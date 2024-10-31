export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800 animate-fade-in">
          Bienvenido a mi Portfolio
        </h1>

        <div className="flex flex-row items-start justify-between gap-12">
          <div className="relative w-72 h-72 overflow-hidden border-4 border-cyan-600 shadow-2xl">
            <img
              src="/perfil.jpg"
              alt="Foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="bg-white/80 rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-cyan-800">Sobre Mi</h2>
              <p className="text-xl mb-4 text-gray-700 leading-relaxed">
                En proceso de formación de Desarrollo de Aplicaciones Web (DAW).
              </p>
              <p className="text-xl mb-4 text-gray-700 leading-relaxed">
                Me especializo en desarrollo web full-stack, utilizando tecnologías modernas y siguiendo las mejores prácticas de programación.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Busco oportunidades para colaborar en proyectos interesantes y crear soluciones digitales innovadoras.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-semibold mb-6 text-cyan-800">Tecnologías</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-cyan-600 p-4 rounded-lg shadow-md text-white text-center transform hover:scale-105 transition duration-300">
                  <span className="font-semibold">JavaScript & Java</span>
                </div>
                <div className="bg-cyan-600 p-4 rounded-lg shadow-md text-white text-center transform hover:scale-105 transition duration-300">
                  <span className="font-semibold">React</span>
                </div>
                <div className="bg-cyan-600 p-4 rounded-lg shadow-md text-white text-center transform hover:scale-105 transition duration-300">
                  <span className="font-semibold">Next.js</span>
                </div>
                <div className="bg-cyan-600 p-4 rounded-lg shadow-md text-white text-center transform hover:scale-105 transition duration-300">
                  <span className="font-semibold">Tailwind CSS</span>
                </div>
                <div className="bg-cyan-600 p-4 rounded-lg shadow-md text-white text-center transform hover:scale-105 transition duration-300">
                  <span className="font-semibold">Python & PHP</span>
                </div>
                <div className="bg-cyan-600 p-4 rounded-lg shadow-md text-white text-center transform hover:scale-105 transition duration-300">
                  <span className="font-semibold">MySQL & MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
