"use client";

import { motion } from 'framer-motion';
import { ShieldAlert, Mail, Activity, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SuspendedPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-600/5 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-900/5 blur-[150px] rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-white/80 backdrop-blur-2xl p-12 md:p-20 rounded-[4rem] border border-white max-w-2xl w-full text-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] relative"
            >
                <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/5 rounded-bl-[10rem]"></div>

                <div className="w-24 h-24 bg-rose-50 text-rose-500 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-rose-100 shadow-xl shadow-rose-500/10">
                    <ShieldAlert className="w-12 h-12" />
                </div>

                <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">Sede Suspendida</h1>

                <p className="text-slate-500 text-lg font-medium mb-12 leading-relaxed">
                    El acceso a esta instancia de <span className="text-slate-900 font-bold">VozTurno</span> ha sido inhabilitado temporalmente por el administrador central.
                </p>

                <div className="space-y-4 mb-12">
                    <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 text-left">
                        <Mail className="w-6 h-6 text-slate-400" />
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Soporte Técnico</p>
                            <p className="font-bold text-slate-900">contacto@vozturno.com</p>
                        </div>
                    </div>
                </div>

                <Link
                    href="/login"
                    className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-3xl font-black hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/10 active:scale-95 uppercase tracking-widest text-xs"
                >
                    <ArrowLeft className="w-4 h-4 text-emerald-400" />
                    Volver al Inicio
                </Link>

                <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-center gap-4 text-slate-300">
                    <Activity className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">VozTurno Maestro</span>
                </div>
            </motion.div>
        </div>
    );
}
