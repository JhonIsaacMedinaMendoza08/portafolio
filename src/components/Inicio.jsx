import React, { useState, useEffect } from "react";

export default function Inicio() {
  // Efecto máquina de escribir para los textos
  const TypewriterName = () => {
    const texts = [
      "Jhon Isaac Medina",
      "Desarrollador Junior Full Stack",
      "Creador de Experiencias",
      "Apasionado por la Tecnología",
    ];
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
      const currentText = texts[currentIndex];

      const handleTyping = () => {
        if (!isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
          if (displayText === currentText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentText.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
            setTypingSpeed(150);
          }
        }
      };

      const timer = setTimeout(
        handleTyping,
        isDeleting ? typingSpeed / 2 : typingSpeed
      );
      return () => clearTimeout(timer);
    }, [displayText, currentIndex, isDeleting, typingSpeed]);

    return <span className="text-cyan-400">{displayText}</span>;
  };

  return (
    <section className="font-mono relative min-h-screen overflow-hidden text-white flex flex-col md:flex-row items-center justify-center gap-20 px-8 md:px-36">
      {/* Texto principal */}
      <div className="relative z-10 flex-1 space-y-4 text-center md:text-left">
        <h1 className="text-[35px] md:text-[65px] lg:text-[66px] font-bold leading-tight">
          Hola, <br />soy <TypewriterName />
        </h1>

        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          <span className="text-sm text-purple-300 bg-purple-600/20 px-3 py-1 rounded-full">
            Tecnología que conecta. Diseño que comunica.
          </span>
          <span className="text-sm text-sky-300 bg-sky-600/20 px-3 py-1 rounded-full">
            Código limpio
          </span>
          <span className="text-sm text-yellow-300 bg-yellow-500/20 px-3 py-1 rounded-full">
            Innovación
          </span>
        </div>

        <p className="text-base md:text-lg text-gray-300 max-w-xl">
          Apasionado por la tecnología, el diseño y la creación de experiencias
          digitales. Transformo ideas en interfaces funcionales con lógica y
          estética. Siempre aprendiendo, siempre creando.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-5 pt-4">
          <a
            href="https://github.com/JhonIsaacMedinaMendoza08"
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-purple-300 px-2 py-2 rounded-full shadow w-10 h-10 flex items-center justify-center"
          >
            <img src="/gitHub-logo.png" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/jhon-isaac-medina-mendoza-3669a5322/"
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-purple-300 px-2 py-2 rounded-full shadow w-10 h-10 flex items-center justify-center"
          >
            <img src="/linkedin-logo.png" alt="LinkedIn" />
          </a>
          <button className="bg-white text-cyan-700 hover:bg-purple-300 px-5 py-2 rounded-full font-semibold shadow transition">
            Obtener CV
          </button>
        </div>
      </div>

      {/* "Archivo" de perfil tipo desarrollador.js */}
      <div className="relative z-10 flex-1 w-full max-w-3xl bg-[#0f172a] border-2 border-cyan-500 rounded-xl shadow-xl text-sm font-mono overflow-x-auto">
        {/* Cabecera tipo consola de Mac */}
        <div className="flex items-center px-4 py-2 bg-[#1e293b]  rounded-t-xl">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="ml-4 text-cyan-300 text-xs">hola.js</span>
        </div>

        {/* Código coloreado como JS */}
        <pre className="p-7 text-[15px] md:text-[16px] lg:text-[17px] text-green-400 whitespace-pre-wrap break-words leading-relaxed">
          <code>
            <span className="text-purple-400">const</span> profile = {"{\n"}
            {"  "}
            <span className="text-yellow-400">name</span>:{" "}
            <span className="text-pink-400">"Jhon Isaac Medina Mendoza"</span>,
            {"\n"}
            {"  "}
            <span className="text-yellow-400">title</span>:{" "}
            <span className="text-pink-400">
              "Desarrollador Web | Full Stack"
            </span>
            ,{"\n"}
            {"  "}
            <span className="text-yellow-400">languages</span>: [
            <span className="text-pink-400">"Español (Nativo)"</span>,{" "}
            <span className="text-pink-400">"Inglés (Intermedio)"</span>],{"\n"}
            {"  "}
            <span className="text-yellow-400">skills</span>: [
            <span className="text-pink-400">"HTML"</span>,{" "}
            <span className="text-pink-400">"CSS"</span>,{" "}
            <span className="text-pink-400">"JavaScript"</span>,{" "}
            <span className="text-pink-400">"Git"</span>,{" "}
            <span className="text-pink-400">"React"</span>,{" "}
            <span className="text-pink-400">"Tailwind"</span>,{" "}
            <span className="text-pink-400">"Node.js"</span>,{" "}
            <span className="text-pink-400">"MongoDB"</span>],{"\n"}
            {"  "}
            <span className="text-yellow-400">education</span>: [
            <span className="text-pink-400">"Técnico en Sistemas - SENA"</span>,{" "}
            <span className="text-pink-400">
              "Supervisor de Obras Civiles - UDES"
            </span>
            ,{" "}
            <span className="text-pink-400">
              "Ingeniería de Sistemas (en curso)"
            </span>
            ,{" "}
            <span className="text-pink-400">
              "Certificaciones en Desarrollo Web"
            </span>
            ],{"\n"}
            {"  "}
            <span className="text-yellow-400">featuredProjects</span>: [
            <span className="text-pink-400">"Portafolio Web"</span>,{" "}
            <span className="text-pink-400">"API de Motocicletas"</span>,{" "}
            <span className="text-pink-400">"Dungeons & Dragons"</span>],{"\n"}
            {"  "}
            <span className="text-yellow-400">experience</span>:{" "}
            <span className="text-blue-400">2</span>,{"\n"}
            {"  "}
            <span className="text-yellow-400">softSkills</span>: [
            <span className="text-pink-400">"Trabajo en equipo"</span>,{" "}
            <span className="text-pink-400">"Comunicación"</span>,{" "}
            <span className="text-pink-400">"Autonomía"</span>],{"\n"}
            {"  "}
            <span className="text-yellow-400">hardWorker</span>:{" "}
            <span className="text-blue-400">true</span>,{"\n"}
            {"  "}
            <span className="text-yellow-400">problemSolver</span>:{" "}
            <span className="text-blue-400">true</span>,{"\n"}
            {"  "}
            <span className="text-yellow-400">quickLearner</span>:{" "}
            <span className="text-blue-400">true</span>,{"\n"}
            {"  "}
            <span className="text-yellow-400">seeking</span>:{" "}
            <span className="text-pink-400">"innovación constante"</span>,{"\n"}
            {"}"};{"\n"}
          </code>
        </pre>
      </div>
    </section>
  );
}