import Image from "next/image";
//Interfaz de las propiedades de la tarjeta
interface PropiedadesTarjeta {
    imageSrc: string;
    imageAlt: string;
    titulo: string;
    descripcion: string;
    enlace: string;
}
//Componente de tarjeta de proyectos
export default function Tarjetas({ imageSrc, imageAlt, titulo, descripcion, enlace }: PropiedadesTarjeta) {
    return (
        //Contenedor de la tarjeta
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src={imageSrc} alt={imageAlt} width={300} height={300} />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{titulo}</h2>
                <p className="text-gray-600 mb-4">{descripcion}</p>
                <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition-colors duration-300">
                    <a href={enlace} className="text-white">Ver más</a>
                </button>
            </div>
        </div>
    );
}
