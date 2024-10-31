"use client";
import { usePathname } from 'next/navigation';
import Link from "next/link";
//Importa la libreria clsx para manejar el pathname
import clsx from "clsx";

export default function Navbar() {
    //Obtiene la ruta actual
    const estado = usePathname();
    return (
        //Barra de navegación
        <nav className="bg-cyan-800 text-white px-4 py-3">
            <div className="container mx-auto flex items-center justify-center">
                <h1 className="text-2xl font-bold mr-auto"><Link href="/" className={clsx("hover:text-cyan-600 transition duration-300", estado === "/" && "text-cyan-400")}>Mi Portfolio</Link></h1>
                <ul className="flex space-x-6">
                    {/* Se ve de color text-cyan-400 si la ruta actual es "/" sino blanco */}
                    <li><Link href="/proyectos" className={clsx("hover:text-cyan-400 transition duration-300", estado === "/proyectos" && "text-cyan-400")}>Proyectos</Link></li>
                    <li><Link href="/contacto" className={clsx("hover:text-cyan-400 transition duration-300", estado === "/contacto" && "text-cyan-400")}>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}
