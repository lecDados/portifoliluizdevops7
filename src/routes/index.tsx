import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, Boxes, FileSpreadsheet, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-setup.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luiz Eduardo — Backend DevOps" },
      { name: "description", content: "Portfólio de Luiz Eduardo, desenvolvedor Backend e DevOps." },
      { property: "og:title", content: "Luiz Eduardo — Backend DevOps" },
      { property: "og:description", content: "Portfólio de Luiz Eduardo, desenvolvedor Backend e DevOps." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Setup de programação"
          className="w-full h-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <section className="relative z-10 flex flex-col justify-center min-h-screen px-8 lg:px-24 py-16 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl font-light tracking-[0.3em] text-foreground/80"
        >
          LUIZ
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mt-1"
        >
          EDUARDO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-4 text-sm md:text-base tracking-[0.25em] text-accent-blue uppercase"
        >
          Backend · DevOps
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-8 flex gap-4"
        >
          <Link
            to="/sobre"
            className="px-8 py-2.5 rounded-full glass text-sm tracking-wide hover:bg-primary/20 hover:border-primary/50 transition-all"
          >
            Sobre
          </Link>
          <Link
            to="/experiencia"
            className="px-8 py-2.5 rounded-full glass text-sm tracking-wide hover:bg-primary/20 hover:border-primary/50 transition-all"
          >
            Experiência
          </Link>
        </motion.div>

        {/* Projects */}
        <div className="mt-12">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="text-xs tracking-[0.3em] font-semibold text-foreground/80 border-b border-primary/40 pb-2 mb-6 uppercase max-w-xs"
          >
            Projetos
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Controle de Estoque",
                desc: "Sistema para cadastro, gerenciamento e movimentação de produtos com Node.js e API REST.",
                Icon: Boxes,
              },
              {
                title: "Automação de Planilhas Excel",
                desc: "Automação para leitura, processamento e geração de planilhas, reduzindo tarefas manuais.",
                Icon: FileSpreadsheet,
              },
              {
                title: "Automação Bot WhatsApp",
                desc: "Bot automatizado para WhatsApp com mensagens, respostas inteligentes e integrações.",
                Icon: MessageCircle,
              },
            ].map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95 + i * 0.12, duration: 0.5 }}
              >
                <Card className="glass border border-white/10 bg-transparent h-full flex flex-col">
                  <CardHeader className="pb-2 flex flex-row items-center gap-3 space-y-0">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/40 to-accent-blue/40 border border-white/15 flex items-center justify-center shrink-0">
                      <proj.Icon className="w-4 h-4 text-foreground" />
                    </div>
                    <CardTitle className="text-sm font-semibold text-foreground tracking-wide">
                      {proj.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between pt-2">
                    <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                      {proj.desc}
                    </p>
                    <a
                      href="https://github.com/lecDados"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 self-start rounded-full glass px-4 py-2 text-xs font-medium text-foreground/90 hover:bg-primary/10 hover:text-accent-blue transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Ver no GitHub
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-10 flex gap-5 text-foreground/60"
        >
          <a href="https://www.instagram.com/luiz.educardoso/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-accent-blue transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/luiz-eduardo-4a6207384/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent-blue transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/lecDados" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent-blue transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </section>
    </PageShell>
  );
}
