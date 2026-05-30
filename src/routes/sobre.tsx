import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Luiz Eduardo" },
      { name: "description", content: "Conheça Luiz Eduardo, desenvolvedor Backend Júnior focado em Node.js, TypeScript e arquitetura de software." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <PageShell>
      <section className="relative grid lg:grid-cols-2 min-h-screen max-w-7xl mx-auto">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-32">
          <motion.h1
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            SOBRE
          </motion.h1>
          <motion.a
            href="mailto:luiz260920@gmail.com"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-2 text-sm text-accent-blue tracking-wide"
          >
            luiz260920@gmail.com
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-10 space-y-4 text-sm md:text-[15px] leading-relaxed text-foreground/80 max-w-lg"
          >
            <p>
              Desenvolvedor Backend Júnior apaixonado por tecnologia e arquitetura
              de software.
            </p>
            <p>
              Há mais de três anos estudo programação com foco total em
              desenvolvimento backend, construindo projetos práticos e participando
              de iniciativas pessoais e voluntárias que me permitiram desenvolver
              uma visão sólida sobre criação de soluções reais.
            </p>
            <p>
              Atualmente concentro meus estudos em Node.js, TypeScript e Express,
              aprofundando conceitos modernos de arquitetura, escalabilidade e boas
              práticas de desenvolvimento.
            </p>
            <p>
              Busco minha primeira oportunidade profissional para aplicar meus
              conhecimentos, crescer em equipe e contribuir com projetos de impacto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 max-w-lg"
          >
            <div className="text-xs tracking-[0.25em] text-accent-blue uppercase mb-2">Livro favorito</div>
            <div className="text-foreground font-semibold">Arquitetura Completa de Software</div>
            <div className="text-sm text-foreground/60">Gustavo Luca Brandão</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-8 max-w-lg"
          >
            <div className="text-xs tracking-[0.25em] text-accent-blue uppercase mb-3">Stack</div>
            <div className="flex flex-wrap gap-2">
              {["Node.js","TypeScript","JavaScript","Express","Python","MySQL","PostgreSQL","MongoDB","REST API"].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full glass text-xs">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <img
            src={portrait}
            alt="Retrato profissional"
            loading="lazy"
            width={1024}
            height={1280}
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background" />
        </motion.div>
      </section>
    </PageShell>
  );
}
