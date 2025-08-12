'use client';
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";


export default function Inicio() {
  return (
    <section className="
    font-mono relative min-h-screen overflow-hidden text-white
    flex flex-col md:flex-row items-center md:items-center
    justify-start md:justify-center
    gap-20 px-8 md:px-36
    pt-24 sm:pt-28 md:pt-0
  "
    >

      {/* Bloque de presentación izquierda */}
      <motion.div
        className="relative z-10 flex-1 space-y-4 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-[35px] md:text-[65px] lg:text-[66px] font-bold leading-tight">
          Hola, <br />
          soy{" "}
          <span className="text-cyan-400">
            <Typewriter
              words={["Isaac Medina", "Desarrollador Junior Full Stack"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span>
        </h1>


        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="text-sm text-purple-300 bg-purple-600/20 px-3 py-1 rounded-full">
            Tecnología que conecta. Diseño que comunica.
          </span>
          <span className="text-sm text-sky-300 bg-sky-600/20 px-3 py-1 rounded-full">
            Código limpio
          </span>
          <span className="text-sm text-yellow-300 bg-yellow-500/20 px-3 py-1 rounded-full">
            Innovación
          </span>
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-gray-300 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Desarrollo interfaces que transmiten, funcionan y cautivan.
          Cada línea de código y cada decisión de diseño están pensadas
          para crear experiencias memorables y funcionales.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-5 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <a
            href="https://github.com/JhonIsaacMedinaMendoza08"
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-purple-300 px-2 py-2 rounded-full shadow w-10 h-10 flex items-center justify-center"
          >
            <img src="/gitHub-logo.png" alt="GitHub" />
          </a>
          <a
            href="http://www.linkedin.com/in/isaac-medina-3669a5322"
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-purple-300 px-2 py-2 rounded-full shadow w-10 h-10 flex items-center justify-center"
          >
            <img src="/linkedin-logo.png" alt="LinkedIn" />
          </a>
          <a
            href="https://1drv.ms/b/c/f0c2a3002ca76ea7/EbX5yjN2ubpOkEkXv9Exj8sBhL7Nl_CVfT3wX3Y3yNKZKQ?e=eosfMo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-cyan-700 hover:bg-purple-300 px-5 py-2 rounded-full font-semibold shadow transition">
              Obtener CV
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Consola tipo archivo js con animación */}
      <motion.div
        className="relative z-10 flex-1 w-full max-w-3xl bg-[#0f172a] border-2 border-cyan-500 rounded-xl shadow-xl text-sm font-mono overflow-x-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="flex items-center px-4 py-2 bg-[#1e293b] rounded-t-xl">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="ml-4 text-cyan-300 text-xs">hola.js</span>
        </div>

        <pre className="p-7 text-[15px] md:text-[16px] lg:text-[17px] text-green-400 whitespace-pre-wrap break-words leading-relaxed">
          <code>
            <span className="text-purple-400">const</span> profile = {"{\n"}
            {"  "}
            <span className="text-yellow-400">name</span>:{" "}
            <span className="text-pink-400">"Isaac Medina M."</span>,
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
      </motion.div>
    </section>
  );
}
