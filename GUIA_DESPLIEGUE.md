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
   - **Build Command:** `npm install && npx prisma generate && npm run build`
   - **Start Command:** `npx tsx server.ts` (o `node server.js` si compilaste a JS)
     > [!TIP]
     > Para producción, es mejor compilar y usar un proceso optimizado, pero `npx tsx` funciona bien para empezar.

### Paso 4: Configurar Variables de Entorno (En Render)
Ve a la pestaña **Environment** de tu servicio y agrega:
- `NODE_ENV`: `production`
- `DATABASE_URL`: (La que copiaste en el Paso 2)
- `JWT_SECRET`: (Una clave larga y aleatoria)
- `ALLOWED_ORIGINS`: `https://tu-app.onrender.com` (Tu URL final)
- `PORT`: `10000` (Render asigna uno automáticamente, pero puedes forzarlo)

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
