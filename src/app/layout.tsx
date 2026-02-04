import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VozTurno - Sistema de Gestión de Colas",
  description: "Sistema avanzado de llamado por turnos para clínicas y centros de salud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex min-h-screen relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="fixed -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="fixed -bottom-24 -right-24 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

          <main className="flex-1 z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
