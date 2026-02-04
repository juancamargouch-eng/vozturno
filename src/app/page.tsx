"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Activity } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // El middleware se encarga de la redirección real basada en cookies.
    // Este useEffect es un respaldo por si el middleware no actúa instantáneamente
    // o para disparar la evaluación de la ruta.
    router.refresh();
  }, [router]);

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 animate-pulse">
          <Activity className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-black text-white tracking-tighter">Cargando VozTurno...</h1>
        <p className="text-slate-500 font-medium mt-2">Redirigiendo a su panel de control</p>
      </div>
    </div>
  );
}
