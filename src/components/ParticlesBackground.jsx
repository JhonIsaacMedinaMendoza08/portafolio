'use client';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="fixed inset-0 z-0 pointer-events-none"
            options={{
                fullScreen: { enable: false },
                background: { color: { value: "#0f172a" } },
                particles: {
                    number: {
                        value: 160, // ⬆️ antes era 80
                        density: { enable: true, area: 600 } // ⬇️ antes era 800
                    },
                    color: { value: "#ffffff" },
                    links: {
                        enable: true,
                        color: "#ffffff",
                        distance: 120,
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1.2,
                        direction: "none",
                        outMode: "bounce"
                    },
                    shape: { type: "circle" },
                    opacity: {
                        value: 0.6,
                        random: true
                    },
                    size: {
                        value: 2.5,
                        random: true
                    }
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        onClick: { enable: true, mode: "push" }
                    },
                    modes: {
                        repulse: { distance: 100 },
                        push: { quantity: 4 }
                    }
                },
                detectRetina: true
            }}
        />
    );
}
