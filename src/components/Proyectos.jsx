import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const proyectos = [
  {
    titulo: "Dungeons & Dragons",
    descripcion: "Dungeons and Dragons es una plataforma desarrollada con HTML, CSS y JavaScript que permite crear personajes personalizados. Utiliza una API externa para obtener la información necesaria y ofrecer una experiencia dinámica basada en el clásico juego de rol.",
    imagen: "/dungeons-proyecto.png",
    enlace: "https://github.com/JhonIsaacMedinaMendoza08/Proyecto_JavaScript_MedinaJhon",
    enlaceWeb: "https://proyecto-javascript-medinajhon.vercel.app/"
  },
  {
    titulo: "Explorador de Motocicletas con API",
    descripcion: "Aplicación web en HTML, CSS y JavaScript que permite filtrar motocicletas por marca y año, consultar sus datos técnicos desde una API y dejar datos de contacto, almacenados con LocalStorage.",
    imagen: "/motorcycleApi.png",
    enlace: "https://github.com/JhonIsaacMedinaMendoza08/project-MotorCycle-Api-JavaScript",
    enlaceWeb: "https://jhonisaacmedinamendoza08.github.io/project-MotorCycle-Api-JavaScript/"
  },
  {
    titulo: "Gestor de Tareas",
    descripcion: "App para organizar tareas con Firebase y autenticación.",
    imagen: "/imagenes/tareas.png",
    enlace: "https://github.com/tuusuario/gestor-tareas"
  },
  {
    titulo: "Blog Personal",
    descripcion: "Blog con Markdown, Next.js y diseño minimalista.",
    imagen: "/imagenes/blog.png",
    enlace: "https://github.com/tuusuario/blog-personal"
  },
];

export default function Proyectos() {
  const [indexActivo, setIndexActivo] = useState(0);

  const moverIzquierda = () => {
    if (indexActivo > 0) setIndexActivo(indexActivo - 1);
  };

  const moverDerecha = () => {
    if (indexActivo < proyectos.length - 1) setIndexActivo(indexActivo + 1);
  };

  return (
    <section id="proyectos" className="relative z-10 py-16 px-4  text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Mis Proyectos</h2>

      <div className="relative flex items-center justify-center">
        {/* Botón izquierda */}
        <button
          onClick={moverIzquierda}
          disabled={indexActivo === 0}
          className="absolute left-0 z-20 p-2 bg-slate-800 hover:bg-slate-700 rounded-full disabled:opacity-30"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Carrusel */}
        <div className="flex overflow-hidden w-full max-w-5xl px-10">
          <motion.div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${indexActivo * 320}px)` }}
          >
            {proyectos.map((proyecto, idx) => (
              <motion.div
                key={idx}
                className={`min-w-[280px] sm:min-w-[300px] transition-all duration-300 rounded-2xl shadow-lg overflow-hidden 
                  ${idx === indexActivo ? 'scale-100' : 'scale-95 opacity-60'}`}
              >
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-44 object-cover"
                />
                <div className="bg-slate-800 p-4 flex flex-col h-full">
                  <h3 className="text-lg font-semibold mb-2">{proyecto.titulo}</h3>
                  <p className="text-sm text-slate-300 mb-4">{proyecto.descripcion}</p>
                  <a
                    href={proyecto.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline text-sm mt-auto"
                  >
                    Ver en GitHub →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Botón derecha */}
        <button
          onClick={moverDerecha}
          disabled={indexActivo === proyectos.length - 1}
          className="absolute right-0 z-20 p-2 bg-slate-800 hover:bg-slate-700 rounded-full disabled:opacity-30"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}




