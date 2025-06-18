'use client'
import Header from "@/components/Header";
import Inicio from "@/components/Inicio";
import SobreMi from "@/components/SobreMi";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";
import { useEffect, useState } from "react";


export default function Home() {
  return (
    <div className="relative bg-slate-900 text-white scroll-smooth overflow-x-hidden">
      {/* Video de fondo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/fondo-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

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
        <section id="contacto">
          <Contacto />
        </section>
      </main>
    </div>
  );
}
