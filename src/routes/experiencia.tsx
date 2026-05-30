import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import bg from "@/assets/experience-bg.jpg";

export const Route = createFileRoute("/experiencia")({
  head: () => ({
    meta: [
      { title: "Experiência — Luiz Eduardo" },
      { name: "description", content: "Habilidades, projetos e especialidades de Luiz Eduardo." },
    ],
  }),
  component: Experiencia,
});

const skills = [
  { name: "Node.js", v: 90 },
  { name: "TypeScript", v: 85 },
  { name: "JavaScript", v: 90 },
  { name: "Express", v: 85 },
  { name: "MongoDB", v: 80 },
  { name: "MySQL", v: 80 },
  { name: "PostgreSQL", v: 75 },
  { name: "Docker", v: 70 },
  { name: "React", v: 35 },
  { name: "NestJS", v: 15 },
];

const languages = [
  { name: "Português", v: 100 },
  { name: "Inglês (Iniciante)", v: 35 },
];

const projects = [
  { n: "01", title: "Sistema de Controle de Estoque", desc: "Aplicação completa para cadastro, gerenciamento e movimentação de produtos utilizando Node.js, banco de dados e API REST." },
  { n: "02", title: "Dashboard para Barbearia", desc: "Painel administrativo para controle de clientes, serviços, agendamentos e indicadores do negócio." },
  { n: "03", title: "Sistema de Cadastro para Planos", desc: "Aplicação para gerenciamento de clientes, cadastro de planos e acompanhamento de informações contratuais." },
];

const specialties = ["APIs REST","Backend Development","Arquitetura de Software","Banco de Dados","Node.js","DevOps","Docker","Automação"];
const hobbies = [
  { i: "🎸", t: "Tocar Violão" },
  { i: "✈️", t: "Viajar" },
  { i: "🎨", t: "Desenhar" },
  { i: "🚶", t: "Caminhar" },
];

function Bar({ name, v, delay = 0 }: { name: string; v: number; delay?: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-foreground/80">{name}</span>
        <span className="text-accent-blue">{v}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${v}%` }}
          transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary"
        />
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm tracking-[0.3em] font-semibold text-foreground border-b border-primary/40 pb-2 mb-5 uppercase">
      {children}
    </h3>
  );
}

function Experiencia() {
  return (
    <PageShell>
      <div className="absolute inset-0 z-0">
        <img src={bg} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            <SectionTitle>Software Skills</SectionTitle>
            {skills.map((s, i) => <Bar key={s.name} {...s} delay={0.2 + i * 0.05} />)}

            <div className="mt-10">
              <SectionTitle>Languages</SectionTitle>
              {languages.map((l, i) => <Bar key={l.name} {...l} delay={0.4 + i * 0.05} />)}
            </div>
          </motion.div>

          {/* Center column */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <SectionTitle>Experiências</SectionTitle>
            <div className="relative pl-8 border-l border-primary/30 space-y-8">
              {projects.map((p) => (
                <div key={p.n} className="relative">
                  <div className="absolute -left-[42px] top-0 w-10 h-10 rounded-full glass flex items-center justify-center text-xs font-bold text-accent-blue">
                    {p.n}
                  </div>
                  <div className="text-[10px] tracking-[0.25em] text-accent-blue uppercase mb-1">Projeto {p.n}</div>
                  <h4 className="text-base font-semibold text-foreground mb-2">{p.title}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
            <SectionTitle>Especialidades</SectionTitle>
            <ul className="space-y-2 text-sm text-foreground/80">
              {specialties.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent-blue" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <SectionTitle>Hobbies</SectionTitle>
              <div className="grid grid-cols-2 gap-3">
                {hobbies.map((h) => (
                  <div key={h.t} className="glass rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-primary/10 transition-colors">
                    <div className="text-2xl">{h.i}</div>
                    <div className="text-xs text-foreground/80">{h.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
