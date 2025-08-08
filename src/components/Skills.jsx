'use client';
import { motion, useReducedMotion } from 'framer-motion';

const skills = [
    { name: 'JavaScript', icon: '/icons/js.png' },
    { name: 'React', icon: '/icons/react.png' },
    { name: 'Express', icon: '/icons/express.png' },
    { name: 'Node.js', icon: '/icons/node.png' },
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'HTML', icon: '/icons/html.png' },
    { name: 'CSS', icon: '/icons/css.png' },
    { name: 'Git', icon: '/icons/git.png' },
    { name: 'MongoDB', icon: '/icons/mongo.png' },
    { name: 'SQL', icon: '/icons/sql.png' },
];

export default function Skills() {
    const reduce = useReducedMotion();

    // Contenedor: controla el stagger
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.15
            }
        }
    };

    // Cada tarjeta: “encenderse”
    const item = {
        hidden: { opacity: 0, y: 18, scale: 0.96 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } }
    };

    // Animación de “latido” sutil en reposo
    const idlePulse = reduce
        ? {}
        : {
            boxShadow: [
                '0 0 0 rgba(168,85,247,0)',
                '0 0 18px rgba(168,85,247,0.25)',
                '0 0 0 rgba(168,85,247,0)'
            ],
            transition: { duration: 2.2, repeat: Infinity, repeatDelay: 0.8 }
        };

    return (
        <section id="skills" className="relative z-10 py-20 px-4 text-white">
            <h2 className="text-3xl md:text-5xl font-bold text-indigo-400 mb-12 text-center">
                Mis habilidades técnicas
            </h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
            >
                {skills.map((s) => (
                    <motion.article
                        key={s.name}
                        variants={item}
                        whileHover={{
                            scale: 1.08,
                            y: -6,
                            boxShadow: '0 0 24px rgba(168,85,247,0.55)'
                        }}
                        animate={idlePulse}
                        className="relative group rounded-2xl bg-[#0f1625] border border-slate-800/70 shadow-lg p-6 flex flex-col items-center justify-center h-40 overflow-hidden cursor-pointer"
                    >
                        {/* Glow animado que “se enciende” al hover */}
                        <div
                            className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"
                            style={{
                                background:
                                    'radial-gradient(140px 80px at 50% 50%, rgba(168,85,247,0.45), transparent 70%)'
                            }}
                        />

                        <motion.img
                            src={s.icon}
                            alt={s.name}
                            className="w-12 h-12 object-contain mb-4 drop-shadow"
                            whileHover={!reduce ? { rotate: 6, scale: 1.15 } : {}}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        />

                        <span className="font-semibold tracking-wide">{s.name}</span>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}
