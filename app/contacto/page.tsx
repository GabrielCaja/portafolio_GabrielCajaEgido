//Página de contacto
export default function Formulario() {
    return (
        <form className="max-w-md mx-auto mt-8">
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre
                </label>
                <input type="text" id="nombre" name="nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Tu nombre" required />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="tu@email.com" required />
            </div>
            <div className="mb-6">
                <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">
                    Mensaje
                </label>
                <textarea id="mensaje" name="mensaje" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Tu mensaje" required></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Enviar
                </button>
            </div>
        </form >
    );
}
