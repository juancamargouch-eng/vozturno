"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Bell, Clock, Activity } from 'lucide-react';
import { speak } from '@/lib/tts';
import { useSocket } from '@/hooks/useSocket';

interface Turno {
    id: string;
    number: string;
    status: string;
    updatedAt: string;
    patient: { name: string };
    area: { name: string };
}

export default function PublicDisplay() {
    const [turns, setTurns] = useState<Turno[]>([]);
    const [currentCall, setCurrentCall] = useState<Turno | null>(null);
    const [clinicName, setClinicName] = useState<string>('VozTurno');
    const [voiceConfig, setVoiceConfig] = useState('es-PE-AlexNeural');
    const [clinicId, setClinicId] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            const query = clinicId ? `?clinicId=${clinicId}` : '';
            const res = await fetch(`/api/turnos${query}`);
            const data = await res.json();

            // Recientes: últimos completados o llamados
            setTurns(data.filter((t: Turno) => t.status !== 'WAITING').slice(0, 6));

            // Llamado Activo: El más reciente con estado 'CALLED'
            const calledOnes = data
                .filter((t: Turno) => t.status === 'CALLED')
                .sort((a: Turno, b: Turno) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

            const latestActive = calledOnes[0] || null;

            setCurrentCall(prev => {
                if (latestActive && (!prev || latestActive.id !== prev.id)) {
                    // Solo hablar si es un nuevo llamado
                    speak(`Turno ${latestActive.number}, por favor acercarse a ${latestActive.area.name}.`, voiceConfig);
                    return latestActive;
                }
                return latestActive;
            });
        } catch (err) {
            console.error(err);
        }
    }, [voiceConfig, clinicId]);

    const fetchVoiceConfig = useCallback(async () => {
        if (!clinicId) return;
        const res = await fetch(`/api/clinic/settings?clinicId=${clinicId}`);
        const data = await res.json();

        if (data && data.active === false) {
            window.location.href = '/suspended';
            return;
        }

        if (data.name) setClinicName(data.name);
        if (data.voiceConfig) setVoiceConfig(data.voiceConfig);
    }, [clinicId]);

    // Integración de Sockets para llamados e información en tiempo real
    useSocket(clinicId, (data) => {
        if (data.action === 'called' || data.action === 'created' || data.action === 'updated') {
            fetchData();
        } else if (data.action === 'settings-updated') {
            console.log("Evento settings-updated recibido:", data);
            if (data.turno?.voiceConfig) {
                console.log("Actualizando voiceConfig a:", data.turno.voiceConfig);
                setVoiceConfig(data.turno.voiceConfig);
            } else {
                fetchVoiceConfig();
            }
        }
    });

    useEffect(() => {
        const getVoice = async () => {
            const getCookie = (name: string) => {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) return parts.pop()?.split(';').shift();
            };

            const cid = getCookie('clinic_id');
            if (cid) {
                setClinicId(cid);
                const res = await fetch(`/api/clinic/settings?clinicId=${cid}`);
                const data = await res.json();
                if (data.voiceConfig) setVoiceConfig(data.voiceConfig);
            }
        };
        getVoice();
    }, []);

    useEffect(() => {
        let isMounted = true;
        const load = () => { if (isMounted) fetchData(); };

        load();
        // Respaldo de seguridad cada 30s (el socket es instantáneo)
        const interval = setInterval(load, 30000);
        return () => { isMounted = false; clearInterval(interval); };
    }, [fetchData]);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 p-8 md:p-16 flex flex-col overflow-hidden relative font-sans">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/5 blur-[150px] rounded-full -z-10"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-slate-500/5 blur-[150px] rounded-full -z-10"></div>

            <header className="flex justify-between items-end mb-16 relative z-10 border-b border-slate-200 pb-12">
                <div className="flex items-center gap-10">
                    <motion.div
                        animate={{
                            boxShadow: currentCall ? ["0 0 0px rgba(16,185,129,0)", "0 0 60px rgba(16,185,129,0.3)", "0 0 0px rgba(16,185,129,0)"] : "none",
                            scale: currentCall ? [1, 1.05, 1] : 1
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-24 h-24 bg-slate-900 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-slate-900/20"
                    >
                        <Volume2 className="w-12 h-12 text-emerald-400" />
                    </motion.div>
                    <div>
                        <h1 className="text-7xl font-black tracking-tighter text-slate-900 uppercase truncate max-w-[600px]">{clinicName}</h1>
                        <p className="text-emerald-600 font-black uppercase tracking-[0.5em] text-xs mt-2 italic">Terminal de Visualización Pública</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-8xl font-black tabular-nums tracking-tighter text-slate-900 leading-none">
                        {new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mt-3">Hora Local • Sincronización GPS</p>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-12 flex-1 relative z-10">
                <main className="col-span-12 lg:col-span-8">
                    <AnimatePresence mode="wait">
                        {currentCall ? (
                            <motion.div
                                key={currentCall.id}
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.1, y: -50 }}
                                transition={{ type: "spring", damping: 30, stiffness: 150 }}
                                className="h-full bg-white/80 backdrop-blur-3xl rounded-[5rem] flex flex-col items-center justify-center p-16 border border-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] relative overflow-hidden group"
                            >
                                <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-bl-[12rem] -z-10"></div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="px-12 py-5 rounded-full bg-emerald-50 border border-emerald-100 mb-12 shadow-sm"
                                >
                                    <p className="text-emerald-600 font-black text-xl uppercase tracking-[0.6em] flex items-center gap-4">
                                        <Bell className="w-6 h-6 animate-bounce" />
                                        TURNO LLAMADO
                                    </p>
                                </motion.div>

                                <motion.p
                                    initial={{ y: 20 }}
                                    animate={{ y: 0 }}
                                    className="text-[24rem] font-black leading-none tracking-tighter text-slate-900 drop-shadow-2xl mb-12"
                                >
                                    {currentCall.number}
                                </motion.p>

                                <div className="space-y-6 text-center">
                                    <h2 className="text-8xl font-black uppercase tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors bg-slate-100 px-16 py-6 rounded-[3rem] inline-block">{currentCall.area.name}</h2>
                                    <p className="text-4xl font-bold text-slate-400 italic tracking-wide uppercase">{currentCall.patient.name}</p>
                                </div>

                                <div className="absolute bottom-16 flex gap-6">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/40 animate-pulse delay-75"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/10 animate-pulse delay-150"></div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="h-full bg-white/50 backdrop-blur-sm border-4 border-dashed border-slate-200 rounded-[5rem] flex flex-col items-center justify-center text-slate-300 text-center p-24">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="mb-12 opacity-10"
                                >
                                    <Activity className="w-48 h-48" />
                                </motion.div>
                                <h2 className="text-5xl font-black uppercase tracking-[0.5em] opacity-20">Esperando Pacientes</h2>
                                <p className="mt-6 font-bold opacity-20 uppercase tracking-[0.3em] text-lg">Sistema de voz en línea para el próximo turno</p>
                            </div>
                        )}
                    </AnimatePresence>
                </main>

                <aside className="col-span-12 lg:col-span-4 flex flex-col gap-10">
                    <div className="bg-white/70 backdrop-blur-xl rounded-[4rem] p-12 flex-1 border border-white shadow-xl relative overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between mb-16 px-4">
                            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 flex items-center gap-4">
                                <Clock className="w-5 h-5 text-emerald-500" /> Atenciones Recientes
                            </h3>
                            <div className="px-5 py-2 rounded-xl bg-emerald-50 border border-emerald-100">
                                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">En Vivo</span>
                            </div>
                        </div>

                        <div className="space-y-8 flex-1 overflow-y-auto custom-scrollbar pr-2">
                            <AnimatePresence mode="popLayout">
                                {turns.length > 0 ? (
                                    turns.map((t, idx) => (
                                        <motion.div
                                            key={t.id}
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="p-10 rounded-[3.5rem] bg-slate-50 border border-slate-100 flex justify-between items-center transition-all group hover:bg-white hover:border-emerald-300 hover:shadow-2xl hover:-translate-x-4"
                                        >
                                            <div>
                                                <p className="text-5xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors tracking-tighter">{t.number}</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.area.name}</p>
                                                </div>
                                            </div>
                                            <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-inner transition-colors ${t.status === 'CALLED' ? 'bg-emerald-600 text-white shadow-emerald-500/20' : 'bg-white text-slate-200'}`}>
                                                <Bell className={`w-10 h-10 ${t.status === 'CALLED' ? 'animate-swing' : ''}`} />
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="flex-1 flex flex-col items-center justify-center py-24 bg-slate-50/50 rounded-[3rem] border-2 border-dashed border-slate-100">
                                        <p className="font-black uppercase text-[10px] text-slate-300 tracking-[0.5em]">Sin actividad reciente</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-[3rem] p-10 border border-slate-800 flex items-center justify-between shadow-2xl shadow-slate-900/40 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                        <div className="flex items-center gap-6 relative z-10">
                            <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_20px_rgba(16,185,129,0.8)]"></div>
                            <div>
                                <p className="text-xs font-black text-white uppercase tracking-[0.3em]">Operativa Online</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-1">Sede Central · Lima</p>
                            </div>
                        </div>
                        <p className="text-4xl font-black text-white/10 relative z-10 select-none">VozTurno</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}

