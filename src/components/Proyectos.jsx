'use client';
import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const proyectos = [
  {
    titulo: "Dungeons & Dragons",
    descripcion:
      "🎲 JuegoCampus – Creador Épico de Personajes D&D 5e Plataforma web interactiva para crear y gestionar personajes de fantasía inspirados en Dungeons & Dragons 5e. Desarrollada con JavaScript puro, consume la API oficial de D&D para ofrecer clases, razas, armas y habilidades dinámicas.",
    imagen: "/dungeons-proyecto.png",
    enlace: "https://github.com/JhonIsaacMedinaMendoza08/Proyecto_JavaScript_MedinaJhon",
    enlaceWeb: "https://proyecto-javascript-medinajhon.vercel.app/",
  },
  {
    titulo: "Explorador de Motocicletas con API",
    descripcion:
      "🏍️ Motorcycle Explorer – API Web App en JavaScript Aplicación web desarrollada en JavaScript puro que consume la Motorcycle API de API Ninjas para explorar motos por marca, modelo y año. Incluye detalles técnicos, formulario de contacto y un panel administrativo para revisar mensajes.",
    imagen: "/motorcycleApi.png",
    enlace: "https://github.com/JhonIsaacMedinaMendoza08/project-MotorCycle-Api-JavaScript",
    enlaceWeb:
      "https://motorcycle-explorer-api-js.vercel.app/",
  },
  {
    titulo: "Gestor de portafolio de proyectos",
    descripcion: "📚 Aplicación CLI desarrollada en Node.js para freelancers que permite gestionar clientes, propuestas, proyectos, contratos, entregables y finanzas de forma estructurada, automatizada y profesional.",
    imagen: "/gestorImage.png",
    enlace: "https://github.com/JhonIsaacMedinaMendoza08/gestor-de-portafolio-de-proyectos",
    enlaceWeb: "",
  },
  {
    titulo: "Landing Pages UI ",
    descripcion: "✨ – HTML + CSS Collection Colección de 26 diseños de landing pages desarrolladas con HTML5 y CSS3, usando maquetación moderna con Flexbox y Grid. Cada diseño es totalmente personalizable, adaptable y pensado para distintas temáticas.",
    imagen: "/landing.png",
    enlace: "https://github.com/JhonIsaacMedinaMendoza08/landing-pages",
    enlaceWeb: "https://landing-pages-theta-orcin.vercel.app/",
  },
];

export default function Proyectos() {
  // Duplicamos extremos para loop infinito
  const trackRef = useRef(null);
  const extended = useMemo(
    () => [proyectos[proyectos.length - 1], ...proyectos, proyectos[0]],
    []
  );
  // Empezamos en 1 (primer real)
  const [idx, setIdx] = useState(1);
  const [anim, setAnim] = useState(true); // controla transición CSS

  const goLeft = () => {
    setAnim(true);
    setIdx((i) => i - 1);
  };
  const goRight = () => {
    setAnim(true);
    setIdx((i) => i + 1);
  };

  // Al terminar la transición, saltamos “sin animación” si estamos en un clon
  const handleTransitionEnd = () => {
    if (idx === 0) {
      setAnim(false);
      setIdx(proyectos.length); // último real
    } else if (idx === proyectos.length + 1) {
      setAnim(false);
      setIdx(1); // primero real
    }
  };

  return (
    <section id="proyectos" className="relative z-10 py-20 px-4 text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-indigo-400 mb-12 text-center">
        Mis Proyectos
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Botones */}
        <button
          onClick={goLeft}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-violet-600/90 hover:bg-violet-500 transition shadow-lg"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goRight}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-violet-600/90 hover:bg-violet-500 transition shadow-lg"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden rounded-2xl">
          {/* Track */}
          <div
            ref={trackRef}
            className={`flex ${anim ? "transition-transform duration-500" : ""}`}
            style={{ transform: `translateX(-${idx * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((card, i) => (
              // Cada slide ocupa 100% del viewport: min-w-full
              <div key={i} className="min-w-full px-1 sm:px-4">
                {/* Tarjeta grande */}
                <motion.article
                  initial={{ opacity: 0.6, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="relative mx-auto w-full h-[58vh] sm:h-[60vh] lg:h-[65vh] max-h-[760px] bg-slate-900/60 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
                >
                  {/* Imagen */}
                  <img
                    src={card.imagen}
                    alt={card.titulo}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                  {/* Degradado para lectura */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                  {/* Contenido overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-9">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-violet-300 drop-shadow">
                      {card.titulo}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-200/90 max-w-3xl">
                      {card.descripcion}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {card.enlaceWeb && (
                        <a
                          href={card.enlaceWeb}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-lg transition"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={card.enlace}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border border-violet-400 text-violet-300 hover:bg-violet-500/10 font-semibold px-4 py-2 rounded-lg transition"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
