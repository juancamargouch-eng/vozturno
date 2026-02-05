# Guía de Despliegue en Producción (Gratis) - VozTurno

VozTurno utiliza una arquitectura potente (Next.js + Express + Socket.io). Para desplegarlo de forma gratuita y que funcione correctamente (especialmente por los WebSockets), te recomiendo usar **Render** para todo el sistema o una combinación de **Render** (BD) + **Vercel** (App).

> [!WARNING]
> **Sobre Vercel:** Vercel es excelente para Next.js, pero **no soporta WebSockets persistentes** (Socket.io) en sus funciones serverless. Si quieres usar Vercel, tendrías que migrar a un servicio externo como Pusher o usar **Render** (que sí permite procesos de servidor de larga duración).

---

## Opción Recomendada: Despliegue Integral en Render

Esta opción mantiene tu `server.ts` con Express y Socket.io funcionando tal cual está ahora.

### Paso 1: Preparar tu Repositorio
1. Asegúrate de que todos tus cambios estén en GitHub (o GitLab/Bitbucket).
2. Verifica que el archivo `.gitignore` incluya `.env` y `node_modules` (ya lo tenemos configurado).

### Paso 2: Crear la Base de Datos (Render o Neon)
Si quieres PostgreSQL gratuito de alto rendimiento:
1. Ve a [Neon.tech](https://neon.tech/) o crea una base de datos en [Render](https://render.com/).
2. Copia la `DATABASE_URL` que te proporcionen.
   - Ejemplo: `postgresql://user:password@hostname:5432/dbname`

### Paso 3: Desplegar la Aplicación en Render
1. En Render, crea un nuevo **"Web Service"**.
2. Conecta tu repositorio de GitHub.
3. Configura los siguientes parámetros:
   - **Environment:** `Node`
   - **Build Command:** `npm install && npx prisma generate && npx prisma db push && npx prisma db seed && npm run build`
     > [!IMPORTANT]
     > Hemos añadido `npx prisma db push` (para crear las tablas) y `npx prisma db seed` (para crear el usuario admin inicial).
   - **Start Command:** `npx tsx server.ts`

### Paso 4: Configurar Variables de Entorno (En Render)
Ve a la pestaña **Environment** de tu servicio y agrega:
- `NODE_ENV`: `production`
- `DATABASE_URL`: (La que copiaste en el Paso 2)
- `JWT_SECRET`: (Una clave larga y aleatoria) Juancamargo2026*
- `ALLOWED_ORIGINS`: `https://vozturno.onrender.com` (Tu URL final)
- `PORT`: `10000` (Render asigna uno automáticamente, pero puedes forzarlo)

---

## Migración de Datos (Local a Producción)

Si ya tienes datos en tu PostgreSQL local (clínicas, usuarios, áreas) y quieres pasarlos a Render exactamente como están, sigue estos pasos:

### Opción A: Usando el Backup Completo

Si el comando anterior te dio un error de `syntax error at or near "ÿþ"`, es porque PowerShell guardó el archivo en un formato incorrecto (UTF-16). Debes volver a generar el backup de esta manera:

1. **Volver a generar el backup (Correcto):**
   Usa el parámetro `-f` y los flags `--no-owner --no-privileges` para evitar errores de permisos en la nube:
   ```powershell
   & "C:\Program Files\PostgreSQL\17\bin\pg_dump.exe" -U postgres -d vozturno --no-owner --no-privileges -f C:\Users\juanc\backup_completo.sql
   ```

2. **Subir el respaldo a Render:**
   Ejecuta el siguiente comando (si ves algunos errores de "must be able to SET ROLE", no te preocupes, son normales en Render y la subida funciona igual):
   ```powershell
   & "C:\Program Files\PostgreSQL\17\bin\psql.exe" "URL_DE_PRODUCCION_RENDER" -f C:\Users\juanc\backup_completo.sql
   ```

2. **Verificar:**
   Si el comando termina sin errores, entra a tu aplicación en Render y verifica que tus datos locales ya estén disponibles allá.

> [!CAUTION]
> Si el comando falla por "tablas existentes", es recomendable limpiar la base de datos de Render antes de subir el backup completo, o usar el Backup de solo datos (Paso 1 de la sección anterior) si las tablas ya fueron creadas por Prisma.

### Opción B: Usando el script Seed (Recomendado si tus datos son iniciales)

Si lo que quieres es simplemente que el usuario admin y los datos base estén ahí:
1. Asegúrate de que `prisma/seed.ts` tenga los datos que deseas.
2. Ejecuta localmente apuntando a producción (Paso 2 de la sección anterior).

---

## ¿Cómo crear el Admin si la base de datos está vacía?

Si ya desplegaste y no puedes entrar, tienes dos opciones:

1. **Opción Render (Automática):** Actualiza tu "Build Command" en la configuración de Render para incluir `npx prisma db push && npx prisma db seed` (como se muestra arriba) y dale a "Manual Deploy" -> "Clear Build Cache & Deploy".
2. **Opción Local (Manual):**
   - En tu computadora, abre la terminal en la carpeta del proyecto.
   - Cambia **temporalmente** tu archivo `.env` local para que `DATABASE_URL` apunte a la de producción (la de Neon o Render).
   - Ejecuta: `npx prisma db push` y luego `npx prisma db seed`.
   - **IMPORTANTE:** Regresa tu `.env` local a su estado original después de hacerlo.

---

## Verificación de Despliegue

Una vez que el build termine (puede tardar unos 5-8 minutos):
1. **Logs:** Revisa los logs de Render para confirmar que dice `> Servidor Maestro de VozTurno en modo PRODUCCIÓN`.
2. **Prueba de Login:** Accede a tu URL y verifica que puedes entrar con las cuentas de admin.
3. **Sockets:** Abre el módulo de TV y el de atención en dos pestañas diferentes; haz un llamado y verifica que la TV se actualice al instante con sonido.

---

## Alternativa Vercel (Solo si no usas Sockets clásicos)
Si prefieres Vercel por su velocidad:
1. Sube tu proyecto. Vercel detectará que es Next.js.
2. **Pero:** Debes saber que Socket.io fallará. Tendrías que refactorizar la lógica para usar un sistema de tiempo real compatible con serverless (como **Ably** o **Supabase Realtime**).

### Recomendación Final
Para VozTurno, **Render** es la mejor opción gratuita "todo en uno" que respeta tu lógica de WebSockets actual.
