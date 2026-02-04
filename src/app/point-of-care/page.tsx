"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle, Volume2, Users, Share2, LogOut, Activity, Clock, Plus } from 'lucide-react';
import { speak } from '@/lib/tts';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSocket } from '@/hooks/useSocket';

interface Area {
    id: string;
    name: string;
    capacity: number;
}

interface Turno {
    id: string;
    number: string;
    status: string;
    patient: { name: string };
    area: Area;
    priority: boolean;
    updatedAt: string;
}

export default function PointOfCare() {
    const router = useRouter();
    const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);
    const [areas, setAreas] = useState<Area[]>([]);
    const [voiceConfig, setVoiceConfig] = useState('es-PE-AlexNeural');
    const [clinicId, setClinicId] = useState<string | null>(null);
    const [clinicName, setClinicName] = useState<string>('Identidad Clínica');
    const [currentPatient, setCurrentPatient] = useState<Turno | null>(null);
    const [queue, setQueue] = useState<Turno[]>([]);
    const [skippedQueue, setSkippedQueue] = useState<Turno[]>([]);
    const [attendedCount, setAttendedCount] = useState(0);
    const [capacityLimit, setCapacityLimit] = useState(0);
    const [status, setStatus] = useState<'idle' | 'calling' | 'ongoing'>('idle');
    const [isTransferring, setIsTransferring] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            const getCookie = (name: string) => {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) return parts.pop()?.split(';').shift();
            };

            const cid = getCookie('clinic_id');
            setClinicId(cid || null);

            try {
                const meRes = await fetch('/api/auth/me');
                const meData = await meRes.json();

                if (meRes.status === 401 || meData.error) {
                    router.push('/login');
                    return;
                }

                let validAreas = [];
                const isUserAdmin = ['CLINIC_ADMIN', 'SUPER_ADMIN'].includes(meData.role);

                if (meData.areas && meData.areas.length > 0) {
                    // Si el usuario tiene áreas asignadas explícitamente, su labor es específica
                    validAreas = meData.areas;
                } else if (isUserAdmin) {
                    // Solo los administradores SIN áreas asignadas ven todo el panel
                    const areasRes = await fetch(cid ? `/api/areas?clinicId=${cid}` : '/api/areas');
                    validAreas = await areasRes.json();
                }

                setAreas(validAreas);

                setAreas(validAreas);

                // Cargar configuración de voz precisa de esta clínica
                if (cid) {
                    const settingsRes = await fetch(`/api/clinic/settings?clinicId=${cid}`);
                    const settingsData = await settingsRes.json();

                    if (settingsData && settingsData.active === false) {
                        router.push('/suspended');
                        return;
                    }

                    if (settingsData.name) setClinicName(settingsData.name);
                    if (settingsData.voiceConfig) {
                        console.log("Configuración de voz cargada desde DB:", settingsData.voiceConfig);
                        setVoiceConfig(settingsData.voiceConfig);
                    }
                }
            } catch (error) {
                console.error("Error al inicializar Punto de Atención:", error);
            } finally {
                setLoading(false);
            }
        };
        init();
    }, [router]);

    // Forzar selección automática de área única para staff
    useEffect(() => {
        if (!selectedAreaId && areas.length === 1 && !loading) {
            setSelectedAreaId(areas[0].id);
        }
    }, [areas, selectedAreaId, loading]);

    const fetchQueue = useCallback(async () => {
        if (!selectedAreaId) return;
        try {
            const query = new URLSearchParams({
                clinicId: clinicId || '',
                areaId: selectedAreaId
            });
            const res = await fetch(`/api/turnos?${query.toString()}`);
            const data: Turno[] = await res.json();
            if (Array.isArray(data)) {
                const currentArea = areas.find(a => a.id === selectedAreaId);
                setCapacityLimit(currentArea?.capacity || 0);

                // Filtrar por área seleccionada y estado WAITING
                setQueue(data.filter((t: Turno) => t.area.id === selectedAreaId && t.status === 'WAITING'));

                // Cola de segunda oportunidad (SALTADOS)
                setSkippedQueue(data.filter((t: Turno) => t.area.id === selectedAreaId && t.status === 'SKIPPED'));

                // Contador de atendidos hoy
                const attendedToday = data.filter((t: Turno) =>
                    t.area.id === selectedAreaId &&
                    t.status === 'COMPLETED' &&
                    new Date(t.updatedAt).toDateString() === new Date().toDateString()
                ).length;
                setAttendedCount(attendedToday);

                // Si hay un turno CALLED o IN_PROGRESS para esta área, ponerlo como actual
                const active = data.find((t: Turno) => t.area.id === selectedAreaId && (t.status === 'CALLED' || t.status === 'IN_PROGRESS'));
                if (active && (!currentPatient || active.id !== currentPatient.id)) {
                    setCurrentPatient(active);
                    setStatus('ongoing');
                }
            }
        } catch (err) {
            console.error("Error fetching queue:", err);
        }
    }, [selectedAreaId, currentPatient, clinicId, areas]);

    const fetchVoiceConfig = useCallback(async () => {
        if (!clinicId) return;
        const res = await fetch(`/api/clinic/settings?clinicId=${clinicId}`);
        const data = await res.json();
        if (data.voiceConfig) setVoiceConfig(data.voiceConfig);
    }, [clinicId]);

    // Integración de Sockets para tiempo real
    const { emitAction } = useSocket(clinicId, (data) => {
        if (data.action === 'created' || data.action === 'updated' || data.action === 'called') {
            fetchQueue();
        } else if (data.action === 'settings-updated') {
            console.log("Evento settings-updated recibido en POC:", data);
            if (data.turno?.voiceConfig) {
                console.log("Actualizando voiceConfig en POC a:", data.turno.voiceConfig);
                setVoiceConfig(data.turno.voiceConfig);
            } else {
                fetchVoiceConfig();
            }
        }
    });

    useEffect(() => {
        let isMounted = true;
        if (!selectedAreaId) return;

        const load = async () => {
            if (isMounted) await fetchQueue();
        };

        load();
        // El intervalo de 15s ahora es solo un respaldo de seguridad
        const interval = setInterval(load, 15000);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [fetchQueue, selectedAreaId]);

    const handleCallNext = async (specificTurno?: Turno) => {
        const next = specificTurno || queue[0];
        if (!next) return;
        setStatus('calling');

        try {
            const res = await fetch(`/api/turnos/${next.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'CALLED' }),
            });

            if (res.ok) {
                const updated = await res.json();
                emitAction('called', updated); // Avisar a la pantalla pública
                const areaName = areas.find(a => a.id === selectedAreaId)?.name || 'módulo';
                setTimeout(() => {
                    setCurrentPatient(updated);
                    setStatus('ongoing');
                    speak(`Turno ${next.number}, ${next.patient.name}, por favor acercarse a ${areaName}.`, voiceConfig);
                }, 1000);
            }
        } catch (error) {
            console.error("Error calling next:", error);
            setStatus('idle');
        }
    };

    const handleNoShow = async () => {
        if (!currentPatient) return;
        try {
            await fetch(`/api/turnos/${currentPatient.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'SKIPPED' }),
            });
            setCurrentPatient(null);
            setStatus('idle');
            fetchQueue();
        } catch (error) {
            console.error("Error handling no-show:", error);
        }
    };

    const handleFinish = async () => {
        if (!currentPatient) return;
        try {
            await fetch(`/api/turnos/${currentPatient.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'COMPLETED' }),
            });
            setCurrentPatient(null);
            setStatus('idle');
            fetchQueue();
        } catch (error) {
            console.error("Error finishing:", error);
        }
    };

    const handleTransfer = async (targetAreaId: string) => {
        if (!currentPatient) return;
        try {
            await fetch(`/api/turnos/${currentPatient.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'WAITING', areaId: targetAreaId }),
            });
            setCurrentPatient(null);
            setStatus('idle');
            setIsTransferring(false);
            fetchQueue();
        } catch (error) {
            console.error("Error transferring:", error);
        }
    };

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/login');
    };

    const handleBack = () => {
        if (areas.length > 1) {
            setSelectedAreaId(null);
        } else {
            handleLogout();
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center font-black text-slate-300 uppercase tracking-widest text-[10px]">
            Iniciando Módulo...
        </div>
    );

    if (!selectedAreaId) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-slate-50">
                <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full"></div>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[3.5rem] max-w-4xl w-full text-center relative overflow-hidden border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full"></div>
                    <div className="w-24 h-24 bg-emerald-600 rounded-[2rem] flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-emerald-500/30">
                        <Users className="w-12 h-12" />
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">Panel de Atención</h1>
                    <p className="text-slate-500 mb-14 text-lg font-medium">Gestión de turnos y registro de pacientes</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {areas.map(area => (
                            <button
                                key={area.id}
                                onClick={() => setSelectedAreaId(area.id)}
                                className="p-8 rounded-[2.5rem] border-2 border-slate-100 bg-white hover:bg-emerald-50 hover:border-emerald-500 transition-all group flex flex-col items-center gap-4 shadow-sm hover:shadow-emerald-200/50"
                            >
                                <span className="text-2xl font-black text-slate-800 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{area.name}</span>
                                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                                    <Activity className="w-3 h-3" />
                                    Entrar al Módulo
                                </div>
                            </button>
                        ))}
                    </div>

                    <Link
                        href="/admission"
                        className="mt-10 p-10 rounded-[2.5rem] border-2 border-emerald-600/10 bg-emerald-600 text-white hover:bg-emerald-500 transition-all group flex flex-col items-center gap-4 font-black shadow-2xl shadow-emerald-500/20"
                    >
                        <Plus className="w-12 h-12" />
                        <div className="text-center">
                            <span className="block text-2xl tracking-tight uppercase">Terminal de Registro</span>
                            <span className="block text-[10px] text-emerald-100/60 tracking-[0.3em] font-bold mt-1 uppercase">Apertura de Admisión de Pacientes</span>
                        </div>
                    </Link>
                </motion.div>
            </div>
        );
    }

    const currentAreaName = areas.find(a => a.id === selectedAreaId)?.name || 'módulo';

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-10 max-w-[1600px] mx-auto space-y-10 font-sans relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/5 blur-[150px] rounded-full -z-10"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-slate-500/5 blur-[150px] rounded-full -z-10"></div>

            <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-white/70 backdrop-blur-xl p-10 rounded-[4rem] border border-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-bl-[8rem] -z-10"></div>

                <div className="flex items-center gap-8">
                    <div className="w-24 h-24 bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-slate-900/20">
                        <Activity className="w-12 h-12 text-emerald-400" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                            <span className="text-emerald-600 font-black uppercase tracking-[0.4em] text-[12px]">{clinicName} — {currentAreaName}</span>
                        </div>
                        <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">Terminal de Atención</h1>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className={`bg-white px-12 py-6 rounded-[2.5rem] border-2 text-center min-w-[200px] shadow-sm transition-all ${capacityLimit > 0 && attendedCount >= capacityLimit ? 'border-rose-300 bg-rose-50' : 'border-slate-100'}`}>
                        <p className={`text-5xl font-black tabular-nums ${capacityLimit > 0 && attendedCount >= capacityLimit ? 'text-rose-600' : 'text-slate-900'}`}>
                            {attendedCount}{capacityLimit > 0 ? ` / ${capacityLimit}` : ''}
                        </p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">Pacientes Atendidos</p>
                    </div>
                    <div className="bg-white px-12 py-6 rounded-[2.5rem] border border-slate-100 text-center min-w-[180px] shadow-sm">
                        <p className="text-5xl font-black text-slate-900 tabular-nums">{queue.length}</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">En Espera</p>
                    </div>
                    <Link href="/admission" className="flex items-center gap-4 px-10 py-6 bg-slate-900 text-white rounded-[2rem] font-black transition-all hover:bg-slate-800 shadow-2xl shadow-slate-900/20 active:scale-95">
                        <Plus className="w-6 h-6 text-emerald-400" />
                        <span className="uppercase tracking-widest text-xs">Reg. Admisión</span>
                    </Link>
                    <button onClick={handleBack} className="p-6 bg-rose-50 hover:bg-rose-100 rounded-[2rem] border border-rose-100 transition-all text-rose-500 shadow-sm group" title={areas.length > 1 ? "Cambiar de Área" : "Cerrar Sesión"}>
                        <LogOut className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <main className="lg:col-span-8">
                    <div className="bg-white/80 backdrop-blur-3xl rounded-[5rem] p-12 md:p-24 min-h-[750px] flex flex-col items-center justify-center relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] border border-white overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-bl-[12rem] -z-10"></div>

                        <AnimatePresence mode="wait">
                            {status === 'idle' ? (
                                <motion.div key="idle" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="text-center">
                                    <div className="mb-14 w-32 h-32 mx-auto bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 shadow-inner">
                                        <Users className="w-14 h-14 text-slate-200" />
                                    </div>
                                    <h2 className="text-5xl font-black text-slate-900 mb-14 tracking-tighter uppercase">Módulo Disponible</h2>
                                    <button
                                        onClick={() => handleCallNext()}
                                        disabled={queue.length === 0 || (capacityLimit > 0 && attendedCount >= capacityLimit)}
                                        className={`px-24 py-12 rounded-[3.5rem] text-3xl font-black shadow-2xl transition-all flex items-center gap-8 group/btn relative overflow-hidden ${queue.length === 0 || (capacityLimit > 0 && attendedCount >= capacityLimit) ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1 shadow-slate-900/20 active:scale-95'}`}
                                    >
                                        <Play className={`w-10 h-10 ${queue.length > 0 && !(capacityLimit > 0 && attendedCount >= capacityLimit) ? 'fill-emerald-400 text-emerald-400 animate-pulse' : 'fill-slate-300'}`} />
                                        {capacityLimit > 0 && attendedCount >= capacityLimit ? 'LÍMITE ALCANZADO' : 'LLAMAR SIGUIENTE'}
                                    </button>
                                </motion.div>
                            ) : status === 'calling' ? (
                                <motion.div key="calling" className="text-center">
                                    <div className="relative w-48 h-48 mx-auto mb-16">
                                        <div className="absolute inset-0 border-[12px] border-slate-100 rounded-full"></div>
                                        <div className="absolute inset-0 border-[12px] border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                                        <div className="absolute inset-4 border-[12px] border-emerald-500/20 border-b-transparent rounded-full animate-spin-reverse"></div>
                                    </div>
                                    <p className="text-3xl font-black text-emerald-600 tracking-[0.5em] animate-pulse uppercase">Notificando Voz...</p>
                                </motion.div>
                            ) : (
                                <motion.div key="ongoing" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center w-full">
                                    <div className="mb-14 px-10 py-4 rounded-full bg-emerald-50 border border-emerald-100 inline-block shadow-sm">
                                        <p className="text-emerald-600 font-black text-[10px] uppercase tracking-[0.4em]">Paciente en Atención Actual</p>
                                    </div>
                                    <h3 className="text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase">{currentPatient?.patient.name}</h3>
                                    <div className="inline-block px-16 py-8 bg-slate-900 rounded-[3rem] text-[16rem] font-black leading-none text-white mb-20 tracking-tighter shadow-2xl shadow-slate-900/40 border-8 border-emerald-500/20">
                                        {currentPatient?.number}
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
                                        <button onClick={() => speak(`Turno ${currentPatient?.number}, ${currentPatient?.patient.name}, por favor acercarse a ${currentAreaName}.`, voiceConfig)} className="p-8 rounded-[3rem] bg-white border-2 border-slate-100 text-slate-600 font-black flex flex-col items-center justify-center gap-4 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all shadow-sm group">
                                            <Volume2 className="w-10 h-10 text-slate-300 group-hover:text-emerald-400 transition-colors" />
                                            <span className="text-[10px] uppercase tracking-[0.2em]">Repetir</span>
                                        </button>
                                        <button onClick={handleNoShow} className="p-8 rounded-[3rem] bg-amber-50 border-2 border-amber-100 text-amber-600 font-black flex flex-col items-center justify-center gap-4 hover:border-amber-500 hover:bg-amber-100 transition-all shadow-sm group">
                                            <Share2 className="w-10 h-10 text-amber-300 group-hover:rotate-180 transition-transform" />
                                            <span className="text-[10px] uppercase tracking-[0.2em]">No se Presentó</span>
                                        </button>
                                        <button onClick={handleFinish} className="p-8 rounded-[3rem] bg-emerald-600 text-white font-black flex flex-col items-center justify-center gap-4 shadow-2xl shadow-emerald-500/30 hover:bg-emerald-500 hover:-translate-y-2 transition-all active:scale-95 group">
                                            <CheckCircle className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                                            <span className="text-[10px] uppercase tracking-[0.2em]">Finalizar</span>
                                        </button>
                                        <button onClick={() => setIsTransferring(true)} className="p-8 rounded-[3rem] bg-slate-900 text-white font-black flex flex-col items-center justify-center gap-4 hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/20 active:scale-95 group">
                                            <Share2 className="w-10 h-10 text-emerald-400 group-hover:rotate-45 transition-transform" />
                                            <span className="text-[10px] uppercase tracking-[0.2em]">Derivar</span>
                                        </button>
                                    </div>

                                    <AnimatePresence>
                                        {isTransferring && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 30 }}
                                                className="mt-20 p-16 bg-white border-2 border-slate-100 rounded-[5rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] relative overflow-hidden"
                                            >
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full"></div>
                                                <h4 className="text-3xl font-black text-slate-900 mb-12 tracking-tight uppercase">Seleccionar Área de Derivación</h4>
                                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                                    {areas.filter(a => a.id !== selectedAreaId).map(area => (
                                                        <button key={area.id} onClick={() => handleTransfer(area.id)} className="p-8 rounded-[2rem] bg-slate-50 border-2 border-transparent hover:border-emerald-500/30 hover:bg-white hover:text-emerald-600 hover:shadow-xl transition-all font-black text-xs text-slate-500 uppercase tracking-widest leading-loose">
                                                            {area.name}
                                                        </button>
                                                    ))}
                                                </div>
                                                <button onClick={() => setIsTransferring(false)} className="mt-12 text-[10px] font-black text-rose-500 hover:text-rose-600 uppercase tracking-[0.4em] px-8 py-3 bg-rose-50 rounded-full transition-all hover:bg-rose-100 underline decoration-2">Abortar Transferencia</button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </main>

                <aside className="lg:col-span-4 flex flex-col gap-10">
                    <div className="bg-white rounded-[4rem] p-12 border border-slate-100 shadow-sm relative overflow-hidden flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] flex items-center gap-4">
                                <Clock className="w-5 h-5 text-emerald-500" /> Cola de Espera
                            </h3>
                            <span className="px-6 py-3 rounded-2xl bg-emerald-50 text-emerald-600 text-[11px] font-black tracking-widest border border-emerald-100">SIGUIENTES: {queue.length}</span>
                        </div>

                        <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            <AnimatePresence mode="popLayout">
                                {queue.slice(0, 10).map((t, idx) => (
                                    <motion.div
                                        key={t.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex justify-between items-center group hover:bg-white hover:border-emerald-300 transition-all hover:shadow-xl hover:-translate-x-2"
                                    >
                                        <div className="flex items-center gap-8">
                                            <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center text-xl font-black text-slate-300 group-hover:text-emerald-500 group-hover:bg-slate-900 transition-all border border-slate-100">
                                                {t.number.split('-')[1]}
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-900 text-xl tracking-tighter uppercase">{t.patient.name}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Normal · Espera Estimada: {idx * 5}m</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-emerald-600 font-black text-3xl tracking-tighter tabular-nums block">{t.number}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            {queue.length === 0 && (
                                <div className="flex-1 flex flex-col items-center justify-center py-20 bg-slate-50/50 rounded-[3rem] border-4 border-dashed border-slate-100">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-inner">
                                        <Activity className="w-8 h-8 text-slate-200" />
                                    </div>
                                    <p className="font-black uppercase text-[10px] text-slate-300 tracking-[0.5em] text-center px-10 leading-loose">No hay pacientes pendientes en este módulo</p>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] flex items-center gap-4">
                                <Activity className="w-5 h-5 text-amber-500" /> Segunda Oportunidad
                            </h3>
                            <span className="px-6 py-3 rounded-2xl bg-amber-50 text-amber-600 text-[11px] font-black tracking-widest border border-amber-100">{skippedQueue.length} SALTADOS</span>
                        </div>

                        <div className="space-y-4 mb-12">
                            {skippedQueue.map(t => (
                                <div key={t.id} className="p-6 rounded-[2rem] bg-amber-50/50 border border-amber-100 flex justify-between items-center group">
                                    <div>
                                        <p className="font-black text-slate-900 group-hover:text-amber-600 transition-colors">{t.patient.name}</p>
                                        <p className="text-[9px] font-black text-amber-600 uppercase tracking-widest">{t.number}</p>
                                    </div>
                                    <button onClick={() => handleCallNext(t)} className="p-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20">
                                        <Play className="w-4 h-4 fill-white" />
                                    </button>
                                </div>
                            ))}
                            {skippedQueue.length === 0 && <p className="text-[9px] text-center text-slate-300 font-bold uppercase tracking-widest py-4 border-2 border-dashed border-slate-100 rounded-[2rem]">Sin pacientes saltados</p>}
                        </div>

                        <div className="mt-12 pt-10 border-t border-slate-50 flex items-center justify-between text-slate-400 font-bold text-[9px] uppercase tracking-widest italic">
                            <span>Sincronizado hace: 1s</span>
                            <span>v2.5.0</span>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
