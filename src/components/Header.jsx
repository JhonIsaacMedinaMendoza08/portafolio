export default function Header() {
  return (
    <header className="fixed top-4 w-full z-50 flex justify-center pointer-events-none">
      {/* Contenedor tipo bloque de código centrado */}
      <nav className="pointer-events-auto bg-[#0f172a] border border-cyan-500 rounded-xl px-6 md:px-10 py-3 shadow-xl text-white font-mono text-sm md:text-base flex gap-6 md:gap-10 items-center backdrop-blur-md">
        <a
          href="#inicio"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          Inicio
        </a>
        <a
          href="#sobremi"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          Sobre mí
        </a>
        <a
          href="#proyectos"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          Proyectos
        </a>
        <a
          href="#contacto"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}