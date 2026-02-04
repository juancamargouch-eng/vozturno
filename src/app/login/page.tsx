"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Activity, ArrowRight, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                router.push('/');
            } else {
                setError(data.error || 'Credenciales incorrectas');
            }
        } catch {
            setError('Error al iniciar sesión');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background: Medical Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 z-0 opacity-[0.01]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>

            {/* Background Effects: Ultra-Realistic Medical Monitor EKG */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                <svg width="100%" height="100%" preserveAspectRatio="none" className="absolute inset-0">
                    <defs>
                        <filter id="glow-ultra">
                            <feGaussianBlur stdDeviation="6" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="85%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#34d399" />
                        </linearGradient>
                        <mask id="sweepMask">
                            <motion.rect
                                x="-100%"
                                y="0"
                                width="100%"
                                height="100%"
                                fill="url(#fadeGradient)"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />
                        </mask>
                    </defs>

                    {/* The Active Animated Line (High Visibility) */}
                    <motion.path
                        d="M -100 500 L 200 500 C 210 500, 215 480, 225 500 L 240 500 L 245 520 L 255 350 L 265 580 L 270 500 L 290 500 C 310 500, 320 460, 340 500 L 800 500 C 810 500, 815 480, 825 500 L 840 500 L 845 520 L 855 350 L 865 580 L 870 500 L 890 500 C 910 500, 920 460, 940 500 L 1400 500 C 1410 500, 1415 480, 1425 500 L 1440 500 L 1445 520 L 1455 350 L 1465 580 L 1470 500 L 1490 500 C 1510 500, 1520 460, 1540 500 L 2200 500"
                        fill="transparent"
                        stroke="#10b981"
                        strokeWidth="5"
                        strokeLinecap="round"
                        filter="url(#glow-ultra)"
                        mask="url(#sweepMask)"
                    />

                    {/* The Leading Laser Dot */}
                    <motion.circle
                        r="8"
                        fill="#34d399"
                        filter="url(#glow-ultra)"
                        cx={0}
                        cy={500}
                        animate={{
                            cx: [0, 800, 1600, 2200],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </svg>

                {/* Heartbeat Pulses (Concentric Circles) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
                    {[1, 2].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 4, opacity: [0, 0.2, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 1,
                                ease: "easeOut"
                            }}
                            className="absolute w-[300px] h-[300px] border-[2px] border-emerald-400/20 rounded-full"
                        />
                    ))}
                </div>
            </div>

            {/* Floating Blurred Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-[-15%] left-[-15%] w-[70%] h-[70%] bg-emerald-600/5 blur-[120px] rounded-full -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ duration: 12, repeat: Infinity, delay: 3 }}
                className="absolute bottom-[-15%] right-[-15%] w-[70%] h-[70%] bg-emerald-400/5 blur-[120px] rounded-full -z-10"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-2xl shadow-emerald-500/20">
                        <Activity className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-2 uppercase">VozTurno</h1>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.3em]">Gestión Inteligente de Pacientes</p>
                </div>

                <div className="bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[4rem] group-hover:bg-emerald-500/10 transition-colors"></div>

                    <form onSubmit={handleLogin} className="space-y-8 relative z-10">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Correo Electrónico</label>
                            <div className="relative group">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="ejemplo@clinica.com"
                                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-transparent rounded-2xl outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-bold text-slate-900 placeholder:text-slate-300 shadow-inner"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Contraseña</label>
                            <div className="relative group">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-14 pr-14 py-5 bg-slate-50 border-2 border-transparent rounded-2xl outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-bold text-slate-900 placeholder:text-slate-300 shadow-inner"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-emerald-500 transition-all flex items-center justify-center"
                                    tabIndex={-1}
                                >
                                    <motion.div
                                        key={showPassword ? 'eye-off' : 'eye'}
                                        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                                        transition={{ duration: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </motion.div>
                                </button>
                            </div>
                        </div>

                        {error && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rose-500 text-xs font-bold text-center bg-rose-50 p-4 rounded-xl border border-rose-100 uppercase tracking-tight">
                                {error}
                            </motion.p>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-6 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black text-lg shadow-2xl shadow-slate-900/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95"
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    ACCEDER AL PANEL
                                    <ArrowRight className="w-5 h-5 text-emerald-400" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <div className="mt-10 flex items-center justify-center gap-3 text-slate-400">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Seguridad Encriptada SSL</span>
                </div>
            </motion.div>
        </div>
    );
}
