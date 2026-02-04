"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Building2, Users, Settings, Plus, LayoutGrid, Search, MoreVertical, ExternalLink, Activity, X, DoorClosed, ShieldCheck, Mail, Key } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Clinic {
    id: string;
    name: string;
    slug: string;
    address: string;
    active: boolean;
    createdAt: string;
    usersCount?: number;
}

interface Stats {
    clinicsCount: number;
    usersCount: number;
    turnosCount: number;
}

interface AdminUser {
    id: string;
    name: string;
    email: string;
    clinic?: { name: string };
    createdAt: string;
}

export default function SuperAdminDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [clinics, setClinics] = useState<Clinic[]>([]);
    const [stats, setStats] = useState<Stats>({ clinicsCount: 0, usersCount: 0, turnosCount: 0 });
    const [allAdmins, setAllAdmins] = useState<AdminUser[]>([]);
    const [isAddingClinic, setIsAddingClinic] = useState(false);
    const [isManagingAdmin, setIsManagingAdmin] = useState(false);
    const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [apiError, setApiError] = useState<string | null>(null);
    const router = useRouter();

    // Form states
    const [newClinic, setNewClinic] = useState({ name: '', slug: '', address: '' });
    const [newAdmin, setNewAdmin] = useState({ name: '', email: '', password: '' });

    const fetchData = async () => {
        setIsLoading(true);
        setApiError(null);
        try {
            const [clinicsRes, statsRes, adminsRes] = await Promise.all([
                fetch('/api/admin/clinics'),
                fetch('/api/admin/stats'),
                fetch('/api/admin/users')
            ]);

            if (!clinicsRes.ok || !statsRes.ok || !adminsRes.ok) {
                throw new Error('Error al sincronizar con el servidor central');
            }

            setClinics(await clinicsRes.json());
            setStats(await statsRes.json());
            setAllAdmins(await adminsRes.json());
        } catch (error: any) {
            console.error('Error fetching admin data:', error);
            setApiError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/login');
    };

    const handleAddClinic = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/admin/clinics', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newClinic),
            });
            if (res.ok) {
                setIsAddingClinic(false);
                setNewClinic({ name: '', slug: '', address: '' });
                fetchData();
            }
        } catch (error) {
            console.error('Error adding clinic:', error);
        }
    };

    const handleCreateAdmin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedClinic) return;

        try {
            const res = await fetch('/api/admin/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...newAdmin, clinicId: selectedClinic.id }),
            });
            if (res.ok) {
                setIsManagingAdmin(false);
                setNewAdmin({ name: '', email: '', password: '' });
                fetchData();
            } else {
                const err = await res.json();
                alert(err.error || 'Fallo al crear administrador');
            }
        } catch (error) {
            console.error('Error creating admin:', error);
        }
    };

    const toggleClinicStatus = async (id: string, currentStatus: boolean) => {
        try {
            const res = await fetch('/api/admin/clinics', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, active: !currentStatus }),
            });
            if (res.ok) {
                fetchData();
            }
        } catch (error) {
            console.error('Error toggling clinic status:', error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex font-sans">
            {/* Sidebar */}
            <aside className="w-80 border-r border-slate-200 p-8 flex flex-col gap-12 bg-white fixed h-full z-20 shadow-sm">
                <div className="flex items-center gap-4 px-2">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-900/20">
                        <Activity className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div>
                        <span className="block text-xl font-black tracking-tighter uppercase">VozTurno</span>
                        <span className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Super Admin</span>
                    </div>
                </div>

                <nav className="flex flex-col gap-2">
                    {[
                        { id: 'dashboard', label: 'Panel Global', icon: LayoutDashboard },
                        { id: 'clinics', label: 'Red de Clínicas', icon: Building2 },
                        { id: 'users', label: 'Ecosistema', icon: Users },
                        { id: 'settings', label: 'Configuración', icon: Settings },
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

            {/* Main Content */}
            <main className="flex-1 ml-80 p-12 overflow-y-auto min-h-screen">
                <header className="flex items-center justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
                            <p className="text-[11px] text-emerald-600 font-black uppercase tracking-[0.3em]">Sistema Centralizado</p>
                        </div>
                        <h2 className="text-5xl font-black tracking-tight text-slate-900 uppercase">
                            {activeTab === 'dashboard' ? 'Métricas Globales' :
                                activeTab === 'clinics' ? 'Gestión de Sedes' :
                                    activeTab === 'users' ? 'Control de Usuarios' : 'Ajustes de Red'}
                        </h2>
                    </div>
                    {activeTab === 'clinics' && (
                        <button
                            onClick={() => setIsAddingClinic(true)}
                            className="flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-3xl font-black hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/10 active:scale-95"
                        >
                            <Plus className="w-6 h-6 text-emerald-400" />
                            <span className="uppercase tracking-widest text-[11px]">NUEVA INSTANCIA</span>
                        </button>
                    )}
                </header>

                {apiError && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-10 p-8 bg-rose-50 border border-rose-100 rounded-[2.5rem] text-rose-600 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-rose-100 rounded-2xl"><X className="w-6 h-6" /></div>
                            <div>
                                <h4 className="font-black text-sm uppercase tracking-widest mb-1">Fallo Crítico de Conexión</h4>
                                <p className="text-xs font-bold opacity-70 italic">{apiError}</p>
                            </div>
                        </div>
                        <button onClick={fetchData} className="px-8 py-4 bg-rose-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-rose-500/20 hover:bg-rose-500 transition-all">Reintentar Conexión</button>
                    </motion.div>
                )}

                {activeTab === 'dashboard' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {[
                            { label: 'Sedes Activas', value: stats.clinicsCount, icon: Building2, color: 'emerald', desc: 'Clínicas instaladas' },
                            { label: 'Cuentas Staff', value: stats.usersCount, icon: Users, color: 'blue', desc: 'Accesos habilitados' },
                            { label: 'Atenciones Hoy', value: stats.turnosCount, icon: LayoutGrid, color: 'slate', desc: 'Flujo transaccional' }
                        ].map((stat, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${stat.color}-500/5 rounded-bl-[4rem] group-hover:scale-110 transition-transform`}></div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`p-4 bg-${stat.color}-50 rounded-2xl`}><stat.icon className={`w-8 h-8 text-${stat.color}-600`} /></div>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                </div>
                                <p className="text-5xl font-black text-slate-900 tabular-nums">{stat.value}</p>
                                <p className="text-[11px] font-bold text-slate-400 mt-2 uppercase tracking-tighter italic">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                )}

                {(activeTab === 'dashboard' || activeTab === 'clinics') && (
                    <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-10 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Red de Clínicas Registradas</h3>
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input placeholder="Localizar sede..." className="pl-11 pr-6 py-4 bg-white border border-slate-200 rounded-full text-xs outline-none focus:border-emerald-500 transition-all font-bold min-w-[300px]" />
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-slate-400 text-[11px] font-black uppercase tracking-[0.4em] bg-slate-50/50">
                                        <th className="px-12 py-8">Identidad Clínica</th>
                                        <th className="px-12 py-8">Estado</th>
                                        <th className="px-12 py-8">Endpoint / Slug</th>
                                        <th className="px-12 py-8 text-right">Control</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {isLoading ? (
                                        <tr><td colSpan={5} className="px-12 py-24 text-center"><div className="w-8 h-8 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mx-auto mb-4"></div></td></tr>
                                    ) : clinics.map((clinic) => (
                                        <tr key={clinic.id} className="hover:bg-slate-50/50 transition-all group">
                                            <td className="px-12 py-8">
                                                <div className="flex items-center gap-6">
                                                    <div className="w-16 h-16 bg-slate-900 rounded-[1.8rem] flex items-center justify-center text-white group-hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10">
                                                        <span className="text-emerald-400 font-black text-xl group-hover:text-white transition-colors">{clinic.name.charAt(0)}</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-black text-lg text-slate-800 tracking-tighter uppercase block">{clinic.name}</span>
                                                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest lowercase ellipsis max-w-[150px] overflow-hidden">ID: {clinic.id.slice(0, 8)}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-12 py-8">
                                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-black text-[9px] uppercase tracking-widest ${clinic.active ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>
                                                    <div className={`w-1.5 h-1.5 rounded-full ${clinic.active ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></div>
                                                    {clinic.active ? 'Activa' : 'Suspendida'}
                                                </div>
                                            </td>
                                            <td className="px-12 py-8"><span className="text-[11px] font-black bg-slate-100 px-4 py-2 rounded-xl text-slate-600 border border-slate-200 uppercase tracking-widest">/{clinic.slug}</span></td>
                                            <td className="px-12 py-8 text-right">
                                                <div className="flex items-center justify-end gap-3">
                                                    <button
                                                        onClick={() => toggleClinicStatus(clinic.id, clinic.active)}
                                                        className={`px-4 py-2 rounded-xl transition-all border font-black text-[10px] uppercase tracking-widest ${clinic.active ? 'bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-600 hover:text-white' : 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-600 hover:text-white'}`}
                                                    >
                                                        {clinic.active ? 'Inhabilitar' : 'Habilitar'}
                                                    </button>
                                                    <button onClick={() => { setSelectedClinic(clinic); setIsManagingAdmin(true); }} className="px-4 py-2 bg-slate-900 text-white rounded-xl transition-all border border-slate-900 hover:bg-slate-800 flex items-center gap-2 shadow-lg shadow-slate-900/10">
                                                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                                        <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Gestionar Admin</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'users' && (
                    <div className="bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-10 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Administradores de Clínica</h3>
                            <Users className="w-8 h-8 text-emerald-500 opacity-20" />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-slate-400 text-[11px] font-black uppercase tracking-[0.4em] bg-slate-50/50">
                                        <th className="px-12 py-8">Administrador</th>
                                        <th className="px-12 py-8">Sede Vinculada</th>
                                        <th className="px-12 py-8">Acceso</th>
                                        <th className="px-12 py-8 text-right">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {allAdmins.map((admin) => (
                                        <tr key={admin.id} className="hover:bg-slate-50/50 transition-all group">
                                            <td className="px-12 py-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 font-black text-lg border border-emerald-100">{admin.name.charAt(0)}</div>
                                                    <div>
                                                        <span className="font-black text-slate-800 uppercase block tracking-tighter">{admin.name}</span>
                                                        <span className="text-[10px] text-slate-400 font-bold lowercase">{admin.createdAt.split('T')[0]}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-12 py-8"><span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">{admin.clinic?.name || 'Sede Especial'}</span></td>
                                            <td className="px-12 py-8"><div className="flex items-center gap-2 text-slate-400 font-bold text-xs"><Mail className="w-4 h-4" />{admin.email}</div></td>
                                            <td className="px-12 py-8 text-right">
                                                <button onClick={async () => { if (confirm('¿Eliminar acceso administrativo?')) { await fetch(`/api/admin/users?id=${admin.id}`, { method: 'DELETE' }); fetchData(); } }} className="p-3 bg-rose-50 hover:bg-rose-500 hover:text-white rounded-xl text-rose-500 transition-all"><X className="w-4 h-4" /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>

            <AnimatePresence>
                {(isAddingClinic || isManagingAdmin) && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-xl">
                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="bg-white p-12 rounded-[4.5rem] w-full max-w-xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-white relative overflow-hidden">
                            <button onClick={() => { setIsAddingClinic(false); setIsManagingAdmin(false); setSelectedClinic(null); }} className="absolute top-10 right-10 text-slate-300 hover:text-slate-900 transition-colors"><X className="w-8 h-8" /></button>
                            <div className="flex items-center gap-6 mb-12 pb-8 border-b border-slate-100">
                                <div className="w-20 h-20 bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl">{isAddingClinic ? <Building2 className="w-10 h-10 text-emerald-400" /> : <ShieldCheck className="w-10 h-10 text-emerald-400" />}</div>
                                <div><h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">{isAddingClinic ? 'Instancia Nueva' : 'Alta de Admin'}</h3><p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2 italic">{isAddingClinic ? 'Despliegue de Sede' : `Gestión para ${selectedClinic?.name}`}</p></div>
                            </div>
                            <form onSubmit={isAddingClinic ? handleAddClinic : handleCreateAdmin} className="space-y-6">
                                {isAddingClinic ? (
                                    <>
                                        <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Nombre Clínica</label><input value={newClinic.name} onChange={(e) => setNewClinic({ ...newClinic, name: e.target.value })} placeholder="Ej: Clínica Central" className="w-full p-6 bg-slate-100 border-2 border-transparent rounded-[2rem] outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-black uppercase text-sm tracking-tight" required /></div>
                                        <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Ubicación</label><input value={newClinic.address} onChange={(e) => setNewClinic({ ...newClinic, address: e.target.value })} placeholder="Dirección física" className="w-full p-6 bg-slate-100 border-2 border-transparent rounded-[2rem] outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-black uppercase text-sm tracking-tight" /></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Nombre Responsable</label><input value={newAdmin.name} onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })} placeholder="Ej: Lic. Juan Perez" className="w-full p-6 bg-slate-100 border-2 border-transparent rounded-[2rem] outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-black uppercase text-sm tracking-tight" required /></div>
                                        <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Correo Institucional</label><input type="email" value={newAdmin.email} onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })} placeholder="email@clinica.com" className="w-full p-6 bg-slate-100 border-2 border-transparent rounded-[2rem] outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-black text-sm tracking-tight" required /></div>
                                        <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Clave Maestra</label><input type="password" value={newAdmin.password} onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })} placeholder="••••••••" className="w-full p-6 bg-slate-100 border-2 border-transparent rounded-[2rem] outline-none focus:border-emerald-500/20 focus:bg-white transition-all font-black text-sm tracking-tight" required /></div>
                                    </>
                                )}
                                <button type="submit" className="w-full py-7 bg-slate-900 text-white rounded-[2.5rem] font-black text-lg hover:bg-slate-800 transition-all shadow-2xl mt-6 uppercase tracking-widest active:scale-95">{isAddingClinic ? 'PROCESAR ALTA SEDE' : 'HABILITAR ADMINISTRADOR'}</button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
