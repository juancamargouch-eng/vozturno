"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, ArrowLeft, Send, Search, CheckCircle2, Activity } from 'lucide-react';
import Link from 'next/link';
import { useSocket } from '@/hooks/useSocket';

export default function Admission() {
    const [areas, setAreas] = useState<{ id: string, name: string, capacity: number, _count?: { turnos: number } }[]>([]);
    const [dni, setDni] = useState('');
    const [name, setName] = useState('');
    const [areaId, setAreaId] = useState('');
    const [clinicId, setClinicId] = useState<string | null>(null);
    const [clinicName, setClinicName] = useState<string>('Identidad Clínica');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { emitAction } = useSocket(clinicId);

    const fetchAreas = useCallback(async (cid: string | null) => {
        try {
            const url = cid ? `/api/areas?clinicId=${cid}` : '/api/areas';
            const res = await fetch(url);
            const data = await res.json();
            setAreas(data);
        } catch (error) {
            console.error('Error fetching areas:', error);
        }
    }, []);

    useEffect(() => {
        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
        };

        const cid = getCookie('clinic_id');
        if (cid) {
            setClinicId(cid);
            fetchAreas(cid);
            // Cargar nombre de la clínica
            fetch(`/api/clinic/settings?clinicId=${cid}`)
                .then(res => res.json())
                .then(data => { if (data.name) setClinicName(data.name); });
        } else {
            // Fallback dev
            fetchAreas(null);
        }

        // Refresco suave cada 30 segundos para actualizar capacidades
        const interval = setInterval(() => fetchAreas(cid || null), 30000);
        return () => clearInterval(interval);
    }, [fetchAreas]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!areaId) return;

        setIsSubmitting(true);
        try {
            const res = await fetch('/api/turnos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ dni, name, areaId, clinicId }),
            });

            if (res.ok) {
                const newTurno = await res.json();
                emitAction('created', newTurno);
                fetchAreas(clinicId); // Refrescar conteos inmediatamente
                setIsSuccess(true);
                setErrorMessage(null);
                setTimeout(() => setIsSuccess(false), 3000);
                setDni('');
                setName('');
                setAreaId('');
            } else {
                const data = await res.json();
                setErrorMessage(data.error || 'No se pudo generar el turno');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Error de conexión con el servidor');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8 flex flex-col items-center justify-center font-sans relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/5 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-slate-500/5 blur-[150px] rounded-full"></div>

            <div className="w-full max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link href="/" className="inline-flex items-center gap-3 text-slate-400 font-black hover:text-emerald-600 transition-all group uppercase text-[10px] tracking-widest bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        VOLVER AL PANEL CENTRAL
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/70 backdrop-blur-3xl rounded-[4rem] p-8 md:p-16 border border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-bl-[10rem] -z-10"></div>

                    <header className="mb-16">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-slate-900/20">
                                <UserPlus className="w-10 h-10 text-emerald-400" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-1">{clinicName}</h1>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest italic">Nueva Admisión — Emisión de Tickets</p>
                                </div>
                            </div>
                        </div>
                    </header>

                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Identificación (DNI/CE)</label>
                                <div className="relative group">
                                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                                    <input
                                        type="text"
                                        value={dni}
                                        onChange={(e) => setDni(e.target.value)}
                                        placeholder="Ingrese número..."
                                        className="w-full pl-16 pr-8 py-6 bg-slate-50 border-2 border-transparent rounded-[2.2rem] outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-black text-sm tracking-tight placeholder:text-slate-300 shadow-inner"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Nombre del Paciente</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nombres y Apellidos..."
                                    className="w-full px-8 py-6 bg-slate-50 border-2 border-transparent rounded-[2.2rem] outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-black text-sm tracking-tight uppercase placeholder:text-slate-300 shadow-inner"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between px-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Destino Médica / Especialidad</label>
                                <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">Seleccione una opción</span>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                                {areas.map((opt) => {
                                    const isFull = opt.capacity > 0 && (opt._count?.turnos || 0) >= opt.capacity;
                                    return (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            disabled={isFull}
                                            onClick={() => setAreaId(opt.id)}
                                            className={`p-6 rounded-[2rem] border-2 font-black text-xs uppercase transition-all flex flex-col items-center justify-center gap-3 group relative overflow-hidden ${areaId === opt.id
                                                ? 'bg-slate-900 border-slate-900 text-white shadow-2xl shadow-slate-900/30 -translate-y-1'
                                                : isFull
                                                    ? 'bg-rose-50 border-rose-100 text-rose-300 cursor-not-allowed'
                                                    : 'bg-white border-slate-100 text-slate-400 hover:border-emerald-500/30 hover:text-slate-900 hover:bg-slate-50'}`}
                                        >
                                            {areaId === opt.id && <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-500/20 rounded-bl-[2rem]"></div>}
                                            {isFull && <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center text-[8px] tracking-[0.2em] font-black text-rose-500">CAPACIDAD FULL</div>}
                                            <Activity className={`w-6 h-6 transition-colors ${areaId === opt.id ? 'text-emerald-400' : isFull ? 'text-rose-200' : 'text-slate-200 group-hover:text-emerald-500'}`} />
                                            <span className="text-center leading-tight">{opt.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <AnimatePresence>
                            {errorMessage && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-rose-50 border border-rose-100 p-6 rounded-[2rem] text-rose-600 font-black text-xs uppercase tracking-widest text-center"
                                >
                                    ⚠️ {errorMessage}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            type="submit"
                            disabled={isSubmitting || !areaId}
                            className={`w-full py-8 rounded-[2.5rem] text-lg font-black shadow-2xl transition-all transform active:scale-95 flex items-center justify-center gap-4 relative overflow-hidden ${isSubmitting || !areaId
                                ? 'bg-slate-100 text-slate-300 cursor-not-allowed border border-slate-200'
                                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20 hover:-translate-y-1'}`}
                        >
                            {isSubmitting ? (
                                <div className="w-8 h-8 border-4 border-emerald-500/30 border-t-emerald-400 rounded-full animate-spin"></div>
                            ) : isSuccess ? (
                                <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                                    ¡PACIENTE EN COLA!
                                </motion.div>
                            ) : (
                                <>
                                    <Send className="w-6 h-6 text-emerald-400" />
                                    CONFIRMAR Y GENERAR TICKET
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-100 shadow-sm text-slate-400">
                        <Activity className="w-4 h-4 text-emerald-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">VozTurno Intelligent Admission System v2.0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

