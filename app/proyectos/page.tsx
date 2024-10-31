import Link from "next/link";
import Cards from "../components/Cards";
import clsx from "clsx";
//Página de proyectos
export default function Proyectos() {
    return (
        //Contenedor de la pagina
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Mis Proyectos</h1>
            <p className="text-gray-600 text-center mb-8">Aquí puedes encontrar algunos de mis proyectos más destacados</p>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                {/* Cards de proyectos */}
                <Cards
                    imageSrc="/proyectoPeliculas.png"
                    imageAlt="PeliculasProyecto"
                    titulo="Peliculas"
                    descripcion="Muestras peliculas de una api"
                    enlace="https://github.com/GabrielCaja/peliculas"
                />
                <Cards
                    imageSrc="/java.png"
                    imageAlt="Proyecto Integrador"
                    titulo="Proyecto Integrador"
                    descripcion="Proyecto Integrador creado con Java y MySQL"
                    enlace="https://github.com/GabrielCaja/PoryectoIntegrador"
                />
            </div>
            <div className="text-center mt-8 ">
                <p className="text-gray-600">¿Interesado en ver mas?</p>
                <div className="flex justify-center gap-4">
                    <a href="https://github.com/GabrielCaja" className="inline-block mt-4 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-300">
                        Visita mi GitHub
                    </a>
                    <Link href="/contacto" className="inline-block mt-4 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-300">
                        Contacto
                    </Link>
                </div>
            </div>
        </div>
    );
}
