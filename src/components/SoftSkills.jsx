'use client';
import { motion } from 'framer-motion';
import {
    MessageSquare, Users, Lightbulb, Star, Repeat, Palette,
    Timer, Heart
} from 'lucide-react';
import { useState } from 'react';

const softSkills = [
    {
        icon: MessageSquare,
        title: 'Comunicación clara',
        blurb: 'Ideas concisas, feedback accionable.',
        examples: ['Escucha activa', 'Documentación breve', 'Feedback con datos'],
        color: 'from-fuchsia-500 to-violet-500'
    },
    {
        icon: Users,
        title: 'Trabajo en equipo',
        blurb: 'Colaboración orientada a objetivos.',
        examples: ['Pair programming', 'Revisiones', 'Mentoría'],
        color: 'from-emerald-400 to-teal-500'
    },
    {
        icon: Lightbulb,
        title: 'Resolución de problemas',
        blurb: 'Pensamiento analítico y creativo.',
        examples: ['Descomponer en tareas', 'Hipótesis y medición', 'Iteración rápida'],
        color: 'from-amber-400 to-orange-500'
    },
    {
        icon: Star,
        title: 'Liderazgo',
        blurb: 'Influir con ejemplo y claridad.',
        examples: ['Alinear prioridades', 'Cuidar el clima del equipo'],
        color: 'from-indigo-400 to-purple-500'
    },
    {
        icon: Repeat,
        title: 'Adaptabilidad',
        blurb: 'Aprender y ajustar rápido.',
        examples: ['Cambios de scope', 'Iteraciones cortas'],
        color: 'from-sky-400 to-cyan-500'
    },
    {
        icon: Palette,
        title: 'Creatividad',
        blurb: 'Soluciones simples y elegantes.',
        examples: ['UI accesible', 'Prototipos rápidos', 'Exploración de patrones'],
        color: 'from-pink-400 to-rose-500'
    },
    {
        icon: Timer,
        title: 'Gestión del tiempo',
        blurb: 'Priorizar con foco.',
        examples: ['Timeboxing', 'Matriz urgente/importante', 'Entregas incrementales'],
        color: 'from-lime-400 to-green-500'
    },
    {
        icon: Heart,
        title: 'Empatía',
        blurb: 'Personas primero.',
        examples: [ 'Considerar contextos', 'Diseño centrado en usuario'],
        color: 'from-red-400 to-rose-500'
    }
];

export default function SoftSkills() {
    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
    };
    const item = {
        hidden: { opacity: 0, y: 18, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } }
    };

    return (
        <section id="soft-skills" className="relative z-10 py-24 px-4 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold">
                    <span className="text-3xl md:text-5xl font-bold text-indigo-400 mb-12 text-center">
                        Habilidades blandas
                    </span>
                </h2>
                <p className="text-center text-sm md:text-base text-white/70 mt-3">
                    Cómo trabajo con personas, problemas y tiempo — más allá del código.
                </p>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {softSkills.map((s) => (
                        <SkillCard key={s.title} {...s} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function SkillCard({ icon: Icon, title, blurb, examples, color }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.article
            variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
            }}
            whileHover={{ y: -6 }}
            className="relative group rounded-2xl overflow-hidden bg-[#0f1625]/90 border border-slate-800/60 shadow-xl"
        >
            {/* Borde degradado animado propio */}
            <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 rounded-2xl 
        opacity-0 group-hover:opacity-100 transition duration-500`}
                style={{
                    padding: 1,
                    background:
                        `linear-gradient(135deg, transparent 0%, transparent 25%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.05) 75%)`
                }}
            />
            <div className="relative p-6 flex flex-col items-center text-center">
                {/* Chip circular con gradiente propio */}
                <div className={`w-12 h-12 rounded-full grid place-items-center 
          bg-gradient-to-br ${color} shadow-md shadow-black/30`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="mt-3 text-lg font-bold">{title}</h3>
                <p className="text-white/70 text-sm mt-1">{blurb}</p>

                {/* Botón/indicador de ejemplos (visible en mobile para tap) */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="mt-4 text-xs px-3 py-1 rounded-lg border border-white/10 hover:border-white/30 text-white/80"
                >
                    {open ? 'Ocultar ejemplos' : 'Ver ejemplos'}
                </button>

                {/* Lista de ejemplos: aparece al hover en desktop y al click en mobile */}
                <motion.ul
                    initial={false}
                    animate={{
                        height: open ? 'auto' : 0,
                        opacity: open ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full overflow-hidden text-left mt-3 space-y-2"
                >
                    {examples.map((ex) => (
                        <li
                            key={ex}
                            className="text-xs md:text-sm text-white/80 bg-white/5 border border-white/10 rounded-lg px-3 py-2"
                        >
                            • {ex}
                        </li>
                    ))}
                </motion.ul>
            </div>

            {/* Hover auto-reveal solo en desktop */}
            <div
                className="absolute inset-0 hidden md:block"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            />
        </motion.article>
    );
}
