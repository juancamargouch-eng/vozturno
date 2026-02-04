import { createServer } from "http";
import express from "express";
import next from "next";
import { Server } from "socket.io";
import helmet from "helmet";

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "localhost";
const port = parseInt(process.env.PORT || "3000", 10);

// Configurar Next.js
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    const httpServer = createServer(server);

    // Seguridad con Helmet
    server.use(helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
                styleSrc: ["'self'", "'unsafe-inline'"],
                imgSrc: ["'self'", "data:", "blob:"],
                connectSrc: ["'self'", "ws:", "wss:"],
            },
        },
        crossOriginEmbedderPolicy: false
    }));

    // Configurar Socket.io
    const io = new Server(httpServer, {
        cors: {
            origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(",") : ["http://localhost:3000", "http://127.0.0.1:3000"],
            methods: ["GET", "POST"]
        }
    });

    // Gestión de Salas (Rooms) por Clínica
    io.on("connection", (socket) => {
        console.log("Cliente conectado:", socket.id);

        socket.on("join-clinic", (clinicId) => {
            socket.join(clinicId);
            console.log(`Socket ${socket.id} se unió a la sala de clínica: ${clinicId}`);
        });

        // Eventos de Turnos
        socket.on("turno-action", (data) => {
            // data: { clinicId, action: 'created' | 'called' | 'updated', turno: {...} }
            if (data.clinicId) {
                io.to(data.clinicId).emit("turno-update", data);
                console.log(`Evento '${data.action}' emitido para clínica: ${data.clinicId}`);
            }
        });

        socket.on("disconnect", () => {
            console.log("Cliente desconectado:", socket.id);
        });
    });

    // Capturar todas las peticiones con Next.js sin usar patrones de ruta (Compatible con Express 5)
    server.all("(.*)", (req, res) => {
        return handle(req, res);
    });

    httpServer.listen(port, () => {
        console.log(`> Servidor Maestro de VozTurno en modo ${dev ? 'DESARROLLO' : 'PRODUCCIÓN'}`);
        console.log(`> Escuchando en http://${hostname}:${port}`);
    });
});
