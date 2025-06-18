import React from "react";

export default function SobreMi() {
  return (
    <section className="font-mono flex flex-col items-center text-center md:text-left py-40 px-0 md:px-12 lg:px-0  text-white relative">
      <h2 className="text-3xl md:text-5xl font-bold text-indigo-400 mb-6">
        Sobre Mí
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* FOTO de perfil */}
        <img
          src="/foto-perfil.jpg" // guarda tu imagen en public/assets
          alt="Foto de Jhon Mendoza"
          className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-indigo-400 "
        />

        {/* DESCRIPCIÓN */}
        <div className="max-w-xl space-y-4">
          <p>
            ¡Hola! Soy{" "}
            <span className="font-semibold text-white">Jhon Isaac Medina Mendoza</span>,
            desarrollador web apasionado por la tecnología, el diseño y la
            creación de experiencias digitales que marcan la diferencia. <br /> <br />Mi
            formación combina lo técnico con lo práctico: soy técnico en sistemas del SENA,
            supervisor de obras civiles egresado de la UDES, y técnico en
            desarrollo de software formado en Campuslands. Actualmente, sigo
            potenciando mis habilidades como estudiante de Ingeniería de
            Sistemas en la UNAD. <br /> <br />Disfruto transformar ideas en soluciones reales
            mediante interfaces funcionales, modernas y accesibles. Trabajo con
            tecnologías como{" "}
            <span className="text-indigo-300 font-medium">React</span>,
            <span className="text-indigo-300 font-medium"> Tailwind CSS</span>,
            bases de datos y otras tecnologías modernas para construir proyectos
            funcionales, atractivos y accesibles.
          </p>

          {/* HABILIDADES DESTACADAS */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
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
      </div>
    </section>
  );
}


