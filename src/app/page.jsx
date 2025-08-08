'use client'
import Header from "@/components/Header";
import Inicio from "@/components/Inicio";
import SobreMi from "@/components/SobreMi";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";
import Skills from '@/components/Skills';
import SoftSkills from "@/components/SoftSkills";
import ParticlesBackground from "@/components/ParticlesBackground"; // Importa el fondo de partículas

export default function Home() {
  return (
    <div className="relative bg-slate-900 text-white scroll-smooth overflow-x-hidden">
      {/* Fondo de partículas */}
      <ParticlesBackground />

      {/* Capa oscura opcional */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

      {/* Contenido principal */}
      <Header />
      <main className="relative z-10 pt-0 px-4 md:px-12 lg:px-0">
        <section id="inicio">
          <Inicio />
        </section>
        <section id="sobremi">
          <SobreMi />
        </section>
        <section id="Proyectos">
          <Proyectos />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="soft-skills">
          <SoftSkills />
        </section>
        <section id="contacto">
          <Contacto />
        </section>
      </main>
    </div>
  );
}
