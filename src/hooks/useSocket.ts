import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = (clinicId: string | null, onEvent?: (data: { action: string; turno?: any }) => void) => {
    const socketRef = useRef<Socket | null>(null);
    const onEventRef = useRef(onEvent);

    // Actualizar la referencia del callback sin reiniciar el efecto
    useEffect(() => {
        onEventRef.current = onEvent;
    }, [onEvent]);

    useEffect(() => {
        if (!clinicId) return;

        // Conectar al servidor unificado (mismo host/puerto)
        const socket = io();
        socketRef.current = socket;

        console.log("Iniciando conexión para clínica:", clinicId);

        socket.on("connect", () => {
            console.log("Conectado al servidor de tiempo real. Unido a:", clinicId);
            socket.emit("join-clinic", clinicId);
        });

        socket.on("turno-update", (data) => {
            if (onEventRef.current) onEventRef.current(data);
        });

        socket.on("disconnect", (reason) => {
            console.log("Desconectado del servidor de tiempo real por:", reason);
        });

        return () => {
            console.log("Limpiando socket para clínica:", clinicId);
            socket.disconnect();
        };
    }, [clinicId]); // Ya no depende de onEvent

    const emitAction = (action: string, turno: any) => {
        if (socketRef.current && clinicId) {
            socketRef.current.emit("turno-action", {
                clinicId,
                action,
                turno
            });
        }
    };

    return { emitAction };
};
