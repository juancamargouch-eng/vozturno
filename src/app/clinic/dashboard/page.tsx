"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Settings, Plus, LayoutGrid, Activity, Volume2, ShieldCheck, DoorClosed, Clock, UserCheck, Search, BarChart3, TrendingUp, Timer, Mail } from 'lucide-react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useRouter } from 'next/navigation';
import { speak } from '@/lib/tts';
import { useSocket } from '@/hooks/useSocket';

interface Area {
    id: string;
    name: string;
    description?: string;
    nextAreaId?: string;
    nextArea?: { name: string };
    capacity: number;
    _count?: {
        turnos: number;
    };
}

interface User {
    id: string;
    name: string;
    email: string;
    areas: Area[];
}

interface Turno {
    id: string;
    number: string;
    status: string;
    createdAt: string;
    patient: { name: string; dni: string };
    area: { name: string };
}

interface ClinicData {
    id: string;
    name: string;
    active: boolean;
    voiceConfig: string;
}

interface ClinicStats {
    summary: {
        totalToday: number;
        attendedToday: number;
        waitingCount: number;
        avgWaitTimeMinutes: number;
    };
    hourlyDemand: { hour: string; count: number }[];
    areas: { name: string; count: number }[];
}

const getCookie = (name: string) => {
    if (typeof document === 'undefined') return undefined;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
};

export default function ClinicAdminDashboard() {
    const [activeTab, setActiveTab] = useState('monitoring');
    const [areas, setAreas] = useState<Area[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [turnos, setTurnos] = useState<Turno[]>([]);
    const [stats, setStats] = useState<ClinicStats | null>(null);
    const [clinicId, setClinicId] = useState<string | null>(() => getCookie('clinic_id') || null);
    const [clinicName, setClinicName] = useState<string>('VozTurno');
    const [voiceConfig, setVoiceConfig] = useState('es-PE-AlexNeural');
    const [browserVoices, setBrowserVoices] = useState<SpeechSynthesisVoice[]>([]);
    const router = useRouter();

    // Modals
    const [showUserModal, setShowUserModal] = useState(false);
    const [showAreaModal, setShowAreaModal] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [selectedUserAreas, setSelectedUserAreas] = useState<string[]>([]);

    const fetchClinicData = useCallback(async (cid: string) => {
        try {
            const [areasRes, usersRes, clinicRes] = await Promise.all([
                fetch(`/api/areas?clinicId=${cid}`),
                fetch(`/api/clinic/users?clinicId=${cid}`),
                fetch(`/api/clinic/settings?clinicId=${cid}`)
            ]);
            setAreas(await areasRes.json());
            setUsers(await usersRes.json());
            const clinicData: ClinicData = await clinicRes.json();

            if (clinicData && clinicData.active === false) {
                router.push('/suspended');
                return;
            }

            if (clinicData?.name) setClinicName(clinicData.name);
            if (clinicData?.voiceConfig) setVoiceConfig(clinicData.voiceConfig);
        } catch (error) {
            console.error('Error fetching clinic data:', error);
        }
    }, [router]);

    const fetchTurnos = useCallback(async (cid: string) => {
        try {
            const res = await fetch(`/api/turnos?clinicId=${cid}`);
            const data = await res.json();
            setTurnos(data);
        } catch (error) {
            console.error('Error fetching turnos:', error);
        }
    }, []);

    const fetchStats = useCallback(async (cid: string) => {
        try {
            const res = await fetch(`/api/clinic/stats?clinicId=${cid}`);
            const data = await res.json();
            setStats(data);
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    }, []);

    const fetchInitialData = useCallback(async (cid: string) => {
        try {
            await Promise.all([
                fetchClinicData(cid),
                fetchTurnos(cid),
                fetchStats(cid)
            ]);
        } catch (error) {
            console.error('Error fetching initial data:', error);
        }
    }, [fetchClinicData, fetchTurnos, fetchStats]);

    useEffect(() => {
        if (!clinicId) {
            const cid = getCookie('clinic_id');
            if (cid) {
                setTimeout(() => setClinicId(cid), 0);
            } else {
                router.push('/login');
            }
        }
    }, [clinicId, router]);

    useEffect(() => {
        if (clinicId) {
            setTimeout(() => fetchInitialData(clinicId), 0);
        }
    }, [clinicId, fetchInitialData]);

    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                setBrowserVoices(voices.filter(v => v.lang.includes('es')));
            }
        };
        loadVoices();
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }
    }, []);

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/login');
    };

    const { emitAction } = useSocket(clinicId);

    const updateVoice = async (voice: string) => {
        setVoiceConfig(voice);
        await fetch('/api/clinic/settings', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ clinicId, voiceConfig: voice })
        });
        emitAction('settings-updated', { voiceConfig: voice });
    };

    const testVoice = (voiceId: string) => {
        speak("Esta es una prueba de la voz seleccionada para VozTurno.", voiceId);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex font-sans">
            <aside className="w-80 border-r border-slate-200 p-8 flex flex-col gap-12 bg-white fixed h-full z-20 shadow-sm">
                <div className="flex items-center gap-4 px-2">
                    <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
                        <Activity className="w-7 h-7" />
                    </div>
                    <div>
                        <span className="block text-xl font-black tracking-tighter uppercase truncate max-w-[180px]">{clinicName}</span>
                        <span className="block text-[9px] font-black text-emerald-600 uppercase tracking-[0.3em]">Administración</span>
                    </div>
                </div>

                <nav className="flex flex-col gap-2">
                    {[
                        { id: 'monitoring', label: 'Estado de Sede', icon: Clock },
                        { id: 'stats', label: 'Estadísticas', icon: BarChart3 },
                        { id: 'staff', label: 'Gestión Personal', icon: Users },
                        { id: 'areas', label: 'Flujo Módulos', icon: LayoutGrid },
                        { id: 'settings', label: 'Voz / Ajustes', icon: Settings },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`flex items-center gap-4 px-5 py-5 rounded-2xl font-bold transition-all border ${activeTab === item.id
                                ? 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-sm'
                                : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50 border-transparent'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="tracking-tight uppercase text-xs">{item.label}</span>
                        </button>
                    ))}

                    <div className="mt-auto pt-10 border-t border-slate-100">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-4 px-5 py-5 text-rose-500 hover:bg-rose-50 rounded-2xl font-black transition-all group"
                        >
                            <DoorClosed className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            <span className="uppercase text-[11px] tracking-widest font-black">Cerrar Sesión</span>
                        </button>
                    </div>
                </nav>
            </aside>

            <main className="flex-1 ml-80 p-12 overflow-y-auto min-h-screen">
                <header className="flex items-center justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
                            <p className="text-[11px] text-emerald-600 font-black uppercase tracking-[0.3em]">Operativa Online</p>
                        </div>
                        <h2 className="text-5xl font-black tracking-tight text-slate-900 uppercase">
                            {activeTab === 'monitoring' ? 'Monitoreo TV' :
                                activeTab === 'stats' ? 'Análisis Sede' :
                                    activeTab === 'staff' ? 'Mi Equipo' :
                                        activeTab === 'areas' ? 'Zonas de Atención' : 'Configuración'}
                        </h2>
                    </div>
                    {['staff', 'areas'].includes(activeTab) && (
                        <button
                            onClick={() => activeTab === 'staff' ? setShowUserModal(true) : setShowAreaModal(true)}
                            className="flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-3xl font-black hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/10 active:scale-95"
                        >
                            <Plus className="w-6 h-6 text-emerald-400" />
                            <span className="uppercase tracking-widest text-[11px]">{activeTab === 'staff' ? 'REGISTRAR STAFF' : 'NUEVA ÁREA'}</span>
                        </button>
                    )}
                </header>

                <AnimatePresence mode="wait">
                    {activeTab === 'monitoring' && (
                        <motion.div key="monitoring" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { label: 'En Espera', count: turnos.filter(t => t.status === 'WAITING').length, icon: Users, color: 'emerald', desc: 'Aguardando atención' },
                                    { label: 'Atendiendo', count: turnos.filter(t => t.status === 'CALLED').length, icon: Activity, color: 'blue', desc: 'En comunicación hoy' },
                                    { label: 'Completados', count: turnos.filter(t => t.status === 'COMPLETED').length, icon: UserCheck, color: 'slate', desc: 'Total atendidos hoy' }
                                ].map((card, idx) => (
                                    <motion.div key={card.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-${card.color}-500/5 rounded-bl-[4rem] group-hover:scale-110 transition-transform`}></div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`p-4 bg-${card.color}-50 rounded-2xl`}><card.icon className={`w-8 h-8 text-${card.color}-600`} /></div>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{card.label}</span>
                                        </div>
                                        <p className="text-5xl font-black text-slate-900 tabular-nums">{card.count}</p>
                                        <p className="text-[11px] font-bold text-slate-400 mt-2 uppercase tracking-tighter italic">{card.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden">
                                <div className="p-10 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Registro de Movimientos</h3>
                                    <div className="flex items-center gap-4">
                                        <div className="relative group">
                                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input placeholder="Buscar paciente..." className="pl-11 pr-6 py-3 bg-white border border-slate-200 rounded-full text-xs outline-none focus:border-emerald-500 transition-all font-bold min-w-[250px]" />
                                        </div>
                                        <button onClick={() => clinicId && fetchTurnos(clinicId)} className="p-3 bg-emerald-50 hover:bg-emerald-100 rounded-2xl transition-all">
                                            <Activity className="w-5 h-5 text-emerald-600" />
                                        </button>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="text-slate-400 text-[11px] font-black uppercase tracking-[0.3em] bg-slate-50/50">
                                                <th className="px-10 py-6">Código Ticket</th>
                                                <th className="px-10 py-6">Nombre Paciente</th>
                                                <th className="px-10 py-6">Punto de Atención</th>
                                                <th className="px-10 py-6">Estado Actual</th>
                                                <th className="px-10 py-6 text-right">Hora Registro</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {turnos.length === 0 ? (
                                                <tr>
                                                    <td colSpan={5} className="px-10 py-24 text-center">
                                                        <Users className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                                                        <p className="text-slate-300 font-bold uppercase tracking-[0.3em] text-[11px]">No hay transacciones registradas hoy</p>
                                                    </td>
                                                </tr>
                                            ) : turnos.slice(0, 15).map((t) => (
                                                <tr key={t.id} className="hover:bg-slate-50/50 transition-all group">
                                                    <td className="px-10 py-7 font-black text-emerald-600 text-xl tracking-tighter italic">{t.number}</td>
                                                    <td className="px-10 py-7">
                                                        <span className="font-extrabold text-slate-900 block text-lg tracking-tight">{t.patient.name}</span>
                                                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">DNI: {t.patient.dni}</span>
                                                    </td>
                                                    <td className="px-10 py-7">
                                                        <span className="text-[11px] font-black bg-slate-100 px-4 py-2 rounded-xl text-slate-600 border border-slate-200 uppercase tracking-widest group-hover:bg-white">{t.area.name}</span>
                                                    </td>
                                                    <td className="px-10 py-7">
                                                        <span className={`text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest border ${t.status === 'WAITING' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                            t.status === 'CALLED' ? 'bg-blue-50 text-blue-600 border-blue-100 animate-pulse' :
                                                                'bg-emerald-50 text-emerald-600 border-emerald-100'
                                                            }`}>
                                                            {t.status === 'WAITING' ? 'PENDIENTE' : t.status === 'CALLED' ? 'EN PROCESO' : 'COMPLETADO'}
                                                        </span>
                                                    </td>
                                                    <td className="px-10 py-7 text-right text-slate-400 font-black text-base tabular-nums">
                                                        {new Date(t.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'stats' && (
                        <motion.div key="stats" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-12 pb-20">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { label: 'Hoy', value: stats?.summary?.totalToday || 0, icon: Users, color: 'emerald', desc: 'Pacientes en total' },
                                    { label: 'Atendidos', value: stats?.summary?.attendedToday || 0, icon: UserCheck, color: 'blue', desc: 'Ya han pasado por módulo' },
                                    { label: 'Pendientes', value: stats?.summary?.waitingCount || 0, icon: Clock, color: 'amber', desc: 'En cola ahora mismo' },
                                    { label: 'Espera Media', value: `${stats?.summary?.avgWaitTimeMinutes || 0} min`, icon: Timer, color: 'rose', desc: 'Promedio de llamado' }
                                ].map((stat, i) => (
                                    <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                                        <div className={`absolute top-0 right-0 w-24 h-24 bg-${stat.color}-500/5 rounded-bl-full`}></div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`p-3 bg-${stat.color}-50 rounded-xl`}><stat.icon className={`w-5 h-5 text-${stat.color}-600`} /></div>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                        </div>
                                        <p className="text-4xl font-black text-slate-900">{stat.value}</p>
                                        <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase italic">{stat.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                <div className="lg:col-span-8 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8">
                                        <TrendingUp className="w-8 h-8 text-emerald-500 opacity-20" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Curva de Demanda</h3>
                                    <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-12">Pacientes por hora (Hoy)</p>
                                    <div className="h-[400px] w-full">
                                        {stats?.hourlyDemand ? (
                                            <ResponsiveContainer width="100%" height="100%">
                                                <AreaChart data={stats.hourlyDemand}>
                                                    <defs>
                                                        <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                    <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 700 }} />
                                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 700 }} />
                                                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '1.5rem', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase' }} labelStyle={{ display: 'none' }} />
                                                    <Area type="monotone" dataKey="count" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorCount)" />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        ) : (
                                            <div className="h-full flex items-center justify-center text-slate-300 font-black uppercase text-xs tracking-widest">Calculando datos...</div>
                                        )}
                                    </div>
                                </div>
                                <div className="lg:col-span-4 space-y-8">
                                    <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white shadow-2xl shadow-slate-900/40 relative overflow-hidden h-full flex flex-col">
                                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-tl-full"></div>
                                        <h3 className="text-xl font-black mb-8 tracking-tighter uppercase">Rendimiento Áreas</h3>
                                        <div className="flex-1 space-y-6">
                                            {stats?.areas?.sort((a, b) => b.count - a.count).map((area) => (
                                                <div key={area.name} className="space-y-2">
                                                    <div className="flex justify-between items-end">
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{area.name}</span>
                                                        <span className="text-xl font-black text-emerald-400 tabular-nums">{area.count}</span>
                                                    </div>
                                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                                        <motion.div initial={{ width: 0 }} animate={{ width: `${(area.count / (stats.summary.totalToday || 1)) * 100}%` }} className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></motion.div>
                                                    </div>
                                                </div>
                                            ))}
                                            {(!stats?.areas || stats.areas.length === 0) && <div className="h-full flex items-center justify-center italic text-slate-500 text-xs">Sin datos hoy</div>}
                                        </div>
                                        <div className="mt-12 pt-8 border-t border-white/5">
                                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-loose">Sincronización Inteligente de<br />Rendimiento Clínico v3.0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'staff' && (
                        <motion.div key="staff" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-slate-400 text-[11px] font-black uppercase tracking-[0.4em] bg-slate-50/50">
                                        <th className="px-12 py-8">Profesional</th>
                                        <th className="px-12 py-8">Acceso Digital</th>
                                        <th className="px-12 py-8">Módulos Asignados</th>
                                        <th className="px-12 py-8 text-right">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {users.map((user) => (
                                        <tr key={user.id} className="hover:bg-slate-50/50 transition-all group">
                                            <td className="px-12 py-8">
                                                <div className="flex items-center gap-6">
                                                    <div className="w-16 h-16 bg-emerald-50 rounded-[1.8rem] flex items-center justify-center text-emerald-600 font-extrabold text-xl group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm border border-emerald-500/10">
                                                        {user.name?.charAt(0)}
                                                    </div>
                                                    <span className="font-black text-lg text-slate-800 tracking-tighter uppercase">{user.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-12 py-8">
                                                <div className="flex items-center gap-2 text-slate-400 font-bold bg-slate-100 px-4 py-2 rounded-full w-fit text-xs border border-slate-200">
                                                    <Mail className="w-4 h-4" /> {user.email}
                                                </div>
                                            </td>
                                            <td className="px-12 py-8">
                                                <div className="flex flex-wrap gap-3">
                                                    {user.areas?.map(a => (
                                                        <span key={a.id} className="text-[10px] bg-white px-4 py-2 rounded-xl font-black text-slate-900 uppercase tracking-widest border border-slate-200 shadow-sm">
                                                            {a.name}
                                                        </span>
                                                    ))}
                                                    {(!user.areas || user.areas.length === 0) && <span className="text-[10px] text-rose-500 font-black uppercase bg-rose-50 px-4 py-2 rounded-xl border border-rose-100">SIN ACCESO</span>}
                                                </div>
                                            </td>
                                            <td className="px-12 py-8 text-right">
                                                <button onClick={() => { setEditingUser(user); setSelectedUserAreas(user.areas?.map(a => a.id) || []); setShowUserModal(true); }} className="p-4 bg-slate-50 hover:bg-slate-900 hover:text-white rounded-2xl text-slate-400 transition-all shadow-sm">
                                                    <Settings className="w-6 h-6" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    )}

                    {activeTab === 'areas' && (
                        <motion.div key="areas" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {areas.map((area, i) => (
                                <motion.div key={area.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="bg-white p-8 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all relative group overflow-hidden">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-14 h-14 bg-slate-50 rounded-[1.5rem] flex items-center justify-center font-black text-2xl text-emerald-600 border border-slate-100 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                                            {i + 1}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-right">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Capacidad Hoy</p>
                                                <p className="font-black text-slate-900 text-sm">{area._count?.turnos || 0} / {area.capacity || '∞'}</p>
                                            </div>
                                            <div className="w-px h-8 bg-slate-100 mx-2"></div>
                                            <button className="p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl text-slate-400 hover:text-slate-900 transition-all shadow-sm"><Settings className="w-5 h-5" /></button>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-4">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${Math.min((area._count?.turnos || 0) / (area.capacity || 1) * 100, 100)}%` }}
                                                className={`h-full rounded-full transition-all ${(area._count?.turnos || 0) >= (area.capacity || 1) && area.capacity > 0 ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]' : 'bg-emerald-500'}`}
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight uppercase">{area.name}</h3>
                                    <p className="text-slate-400 text-xs font-medium mb-8 line-clamp-2 uppercase tracking-tight">{area.description || 'Consultorio o Punto de Atención Base'}</p>
                                    <div className="flex gap-4">
                                        <div className="flex-1 pt-8 border-t border-slate-50">
                                            <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3 block">Secuencia Automática</label>
                                            <select value={area.nextAreaId || ''} onChange={(e) => { fetch('/api/areas', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: area.id, nextAreaId: e.target.value || null }) }).then(() => { if (clinicId) fetchClinicData(clinicId); }); }} className="w-full bg-slate-50 border-2 border-transparent border-slate-100 rounded-[1.5rem] px-6 py-4 text-[11px] font-black text-emerald-600 outline-none focus:border-emerald-500/30 transition-all uppercase tracking-widest">
                                                <option value="">FINALIZAR FLUJO</option>
                                                {areas.filter(a => a.id !== area.id).map(a => (
                                                    <option key={a.id} value={a.id}>DERIVAR A: {a.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="w-32 pt-8 border-t border-slate-50">
                                            <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3 block">Capacidad</label>
                                            <input type="number" defaultValue={area.capacity} onBlur={(e) => { fetch('/api/areas', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: area.id, capacity: parseInt(e.target.value) || 0 }) }).then(() => { if (clinicId) fetchClinicData(clinicId); }); }} className="w-full bg-slate-50 border-2 border-transparent border-slate-100 rounded-[1.5rem] px-6 py-4 text-[11px] font-black text-slate-900 outline-none focus:border-emerald-500/30 transition-all text-center" placeholder="0" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'settings' && (
                        <motion.div key="settings" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden relative group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-bl-[5rem]"></div>
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="p-5 bg-emerald-50 rounded-[2rem]"><Volume2 className="w-12 h-12 text-emerald-600" /></div>
                                    <div>
                                        <h3 className="text-3xl font-black text-slate-900 tracking-tight underline decoration-emerald-500/20 underline-offset-8">Voz de la Clínica</h3>
                                        <p className="text-slate-400 text-sm mt-3 font-medium uppercase tracking-widest">Configuración de locución global</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 mb-2">Sugerencias Neurales (Premium)</h4>
                                    {[
                                        { id: 'es-PE-AlexNeural', label: 'Alex - Masculino', type: 'Locutor' },
                                        { id: 'es-PE-CamilaNeural', label: 'Camila - Femenino', type: 'Locutora' },
                                    ].map((voice) => (
                                        <div key={voice.id} onClick={() => updateVoice(voice.id)} className={`w-full flex items-center justify-between p-6 rounded-[2rem] border-2 transition-all group/voice cursor-pointer ${voiceConfig === voice.id ? 'bg-emerald-600 text-white border-emerald-600 shadow-xl shadow-emerald-500/20' : 'bg-slate-50 border-transparent text-slate-600 hover:bg-white hover:border-emerald-500/30'}`}>
                                            <span className="font-black text-xs uppercase tracking-tight">{voice.label}</span>
                                            <button onClick={(e) => { e.stopPropagation(); testVoice(voice.id); }} className={`ml-4 p-3 rounded-xl transition-all ${voiceConfig === voice.id ? 'bg-white/20 hover:bg-white/40 text-white' : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'}`}>
                                                <Volume2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                    {browserVoices.length > 0 && (
                                        <>
                                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3 mt-8 mb-2">Voces Detectadas en este Equipo</h4>
                                            <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                                {browserVoices.map((voice) => (
                                                    <div key={voice.name} onClick={() => updateVoice(voice.name)} className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer ${voiceConfig === voice.name ? 'bg-slate-900 text-white border-slate-900 shadow-lg' : 'bg-slate-50 border-transparent text-slate-500 hover:border-slate-200'}`}>
                                                        <span className="font-bold text-[10px] uppercase truncate max-w-[200px]">{voice.name}</span>
                                                        <button onClick={(e) => { e.stopPropagation(); testVoice(voice.name); }} className={`p-2 rounded-lg ${voiceConfig === voice.name ? 'bg-white/20 text-white' : 'bg-white text-slate-400 border border-slate-100'}`}>
                                                            <Volume2 className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl shadow-slate-900/40 relative overflow-hidden group">
                                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-tl-[5rem]"></div>
                                    <ShieldCheck className="w-12 h-12 text-emerald-400 mb-6" />
                                    <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">Seguridad SSL</h3>
                                    <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed italic">Tu conexión y los datos de tus pacientes están protegidos con encriptación de grado médico 256-bit.</p>
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-between">
                                        <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400">Estado Licencia</span>
                                        <span className="px-4 py-2 bg-emerald-500 rounded-xl text-xs font-black">ENTERPRISE</span>
                                    </div>
                                </div>
                                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6">Backup de Información</h3>
                                    <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center"><Activity className="w-5 h-5 text-blue-600" /></div>
                                        <p className="text-xs font-bold text-slate-600">Sincronización en la nube 1:1 activa</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <AnimatePresence>
                {(showUserModal || showAreaModal) && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-xl">
                        <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="bg-white p-12 rounded-[4.5rem] w-full max-w-xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-white">
                            <div className="flex items-center gap-6 mb-12 pb-8 border-b border-slate-100">
                                <div className={`w-20 h-20 ${showUserModal ? 'bg-emerald-600' : 'bg-slate-900'} rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl`}>
                                    {showUserModal ? <Users className="w-10 h-10" /> : <LayoutGrid className="w-10 h-10" />}
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">{showUserModal ? (editingUser ? 'Editar Staff' : 'Registrar Staff') : 'Área Nueva'}</h3>
                                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2 italic">{showUserModal ? 'Personal Operativo de Atención' : 'Punto de Atención y Llamado'}</p>
                                </div>
                            </div>
                            <form className="space-y-6" onSubmit={async (e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                if (showUserModal) {
                                    const data = { id: editingUser?.id, clinicId, name: formData.get('name'), email: formData.get('email'), password: formData.get('password') || undefined, areasIds: selectedUserAreas };
                                    const method = editingUser ? 'PATCH' : 'POST';
                                    await fetch('/api/clinic/users', { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
                                    setShowUserModal(false);
                                    setEditingUser(null);
                                    setSelectedUserAreas([]);
                                } else {
                                    await fetch('/api/areas', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ clinicId, name: formData.get('name'), description: formData.get('description'), order: areas.length + 1 }) });
                                    setShowAreaModal(false);
                                }
                                if (clinicId) fetchClinicData(clinicId);
                            }}>
                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Nombre Identificador</label>
                                        <input name="name" defaultValue={editingUser?.name || ''} placeholder={showUserModal ? "Ej. Dr. Ramirez" : "Ej. Admisión Principal"} className="w-full p-6 bg-slate-100 border-2 border-transparent rounded-[2rem] outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-black uppercase text-sm tracking-tight placeholder:text-slate-300" required />
                                    </div>
                                    {showUserModal ? (
                                        <>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Correo Institucional</label>
                                                <input name="email" type="email" defaultValue={editingUser?.email || ''} placeholder="staff@consultorio.com" className="w-full p-6 bg-slate-100 border-2 border-transparent rounded-[2rem] outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-black text-sm tracking-tight placeholder:text-slate-300" required />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center ml-3">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Clave de Acceso</label>
                                                    {editingUser && <span className="text-[9px] font-bold text-emerald-600 uppercase border border-emerald-100 bg-emerald-50 px-2 py-0.5 rounded-lg">Opcional para cambio</span>}
                                                </div>
                                                <input name="password" type="password" placeholder={editingUser ? "Dejar en blanco para mantener actual" : "••••••••"} className="w-full p-6 bg-slate-100 border-2 border-transparent rounded-[2rem] outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-black text-sm tracking-tight placeholder:text-slate-300" required={!editingUser} />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Autorizar Áreas de Trabajo</label>
                                                <div className="grid grid-cols-2 gap-3 max-h-40 overflow-y-auto p-2">
                                                    {areas.map(area => (
                                                        <button key={area.id} type="button" onClick={() => { setSelectedUserAreas(prev => prev.includes(area.id) ? prev.filter(id => id !== area.id) : [...prev, area.id]); }} className={`p-4 rounded-2xl border-2 text-[10px] font-black uppercase transition-all ${selectedUserAreas.includes(area.id) ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-emerald-500/30'}`}>
                                                            {area.name}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Información Adicional</label>
                                            <textarea name="description" placeholder="Instrucciones al ser llamado..." className="w-full p-6 bg-slate-100 border-2 border-transparent rounded-[2rem] outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-black text-sm tracking-tight h-32 placeholder:text-slate-300" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex gap-6 mt-12">
                                    <button type="button" onClick={() => { setShowUserModal(false); setShowAreaModal(false); setEditingUser(null); setSelectedUserAreas([]); }} className="flex-1 p-6 rounded-[2rem] font-black text-slate-400 hover:bg-slate-50 transition-all uppercase text-[10px] tracking-widest">Descartar</button>
                                    <button type="submit" className={`flex-1 p-6 ${showUserModal ? 'bg-emerald-600' : 'bg-slate-900'} text-white rounded-[2rem] font-black shadow-2xl transition-all uppercase text-[10px] tracking-widest active:scale-95`}>{editingUser ? 'Guardar Cambios' : 'Registrar Staff'}</button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
