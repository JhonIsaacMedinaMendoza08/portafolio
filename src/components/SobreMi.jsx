'use client';
import React from "react";
import { motion } from "framer-motion";

export default function SobreMi() {
  return (
    <section className="font-mono py-32 px-6 md:px-12 text-white relative flex flex-col items-center text-center">
      {/* Título animado */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-indigo-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Sobre Mí
      </motion.h2>

      {/* Perfil y descripción */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 mb-12 max-w-5xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src="/foto-Isaac.jpeg"
          alt="Foto de Jhon Mendoza"
          className="w-100 h-120 rounded-full object-cover shadow-md border-4 border-indigo-400"
        />

        <div className="max-w-xl space-y-4 text-justify md:text-left">
          <p>
            ¡Hola! Soy{" "}
            <span className="font-semibold">Isaac Medina M</span>,
            desarrollador web apasionado por crear experiencias digitales con
            impacto. Mi formación combina la ingeniería con el desarrollo de
            software, sumando experiencia técnica y enfoque práctico.
          </p>
          <p>
            Actualmente estudio Ingeniería de Sistemas en la UNAD y he reforzado
            mis habilidades en un bootcamp especializado, trabajando con{" "}
            <span className="text-indigo-300 font-medium">Express</span>,{" "}
            <span className="text-indigo-300 font-medium">JavaScript</span>,{" "}
            <span className="text-indigo-300 font-medium">Node.js</span> y bases
            de datos modernas.
          </p>
          <p>
            Me gusta transformar ideas en soluciones reales, funcionales y
            accesibles, aplicando principios de diseño, lógica y colaboración ágil.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Express",
              "MongoDB",
              "Node.js",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Misión y Visión */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-6xl">
        {/* Misión */}
        <motion.div
          className="bg-indigo-900/30 rounded-lg p-6 md:p-8 shadow-xl flex-1 backdrop-blur-md border border-indigo-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-indigo-300 mb-4">Mi misión</h3>
          <p className="text-sm text-gray-200 leading-relaxed text-justify">
            Convertirme en un profesional integral que crea soluciones
            tecnológicas funcionales y escalables. Me enfoco en aplicar mis
            conocimientos técnicos con compromiso, mejora continua y orientación
            a las personas.
          </p>
        </motion.div>

        {/* Visión */}
        <motion.div
          className="bg-indigo-900/30 rounded-lg p-6 md:p-8 shadow-xl flex-1 backdrop-blur-md border border-indigo-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-indigo-300 mb-4">Mi visión</h3>
          <p className="text-sm text-gray-200 leading-relaxed text-justify">
            Consolidarme como desarrollador líder, generando impacto a
            través de proyectos innovadores, eficientes y colaborativos. Aspiro a
            contribuir con soluciones que transformen digitalmente equipos y
            comunidades.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
