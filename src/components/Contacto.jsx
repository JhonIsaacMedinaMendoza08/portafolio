'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Github, Linkedin, Phone, MessageCircle } from 'lucide-react';

export default function Contacto() {
  const email = 'jhonisaacmedinamendoza08@outlook.com';
  const phone = '+57 302 246 9589'; //

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyText = async (text, setCopied) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt('Copia el texto:', text);
    }
  };

  return (
    <section id="contacto" className="relative z-10 py-24 px-4 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">
          <span className="text-3xl md:text-5xl font-bold text-indigo-400 mb-12 text-center">
            Ponte en contacto conmigo
          </span>
        </h2>
        <p className="text-center text-white/70 mt-3">
          Ya sea por correo, teléfono o redes, ¡estaré encantado de escucharte!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl bg-[#0f1625] border border-slate-800/70 p-6 shadow-xl"
        >
          {/* Correo */}
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Mail className="w-5 h-5 text-violet-300" /> Correo electrónico
          </h3>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3">
            <span className="truncate">{email}</span>
            <button
              onClick={() => copyText(email, setCopiedEmail)}
              className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-violet-600 hover:bg-violet-500 transition"
            >
              {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedEmail ? 'Copiado' : 'Copiar'}
            </button>
          </div>
          <a
            href={`mailto:${email}`}
            className="mt-3 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
          >
            Abrir cliente de correo →
          </a>

          {/* Teléfono */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-300" /> Teléfono / WhatsApp
            </h3>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3">
              <span className="truncate">{phone}</span>
              <button
                onClick={() => copyText(phone, setCopiedPhone)}
                className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-green-600 hover:bg-green-500 transition"
              >
                {copiedPhone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedPhone ? 'Copiado' : 'Copiar'}
              </button>
              <a
                href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 transition"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Redes */}
          <div className="mt-8 h-px bg-white/10" />
          <h4 className="mt-6 text-sm font-semibold text-white/80">Redes</h4>
          <div className="mt-3 flex gap-3">
            <a
              href="https://github.com/JhonIsaacMedinaMendoza08"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="http://www.linkedin.com/in/isaac-medina-3669a5322"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
