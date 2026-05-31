import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Github } from "lucide-react";
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

      <section className="relative z-10 flex flex-col justify-center min-h-screen px-8 lg:px-24 max-w-7xl mx-auto">
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
          className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none mt-1"
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
          className="mt-10 flex gap-4"
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

        {/* Social icons bottom-left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-8 lg:left-24 flex gap-5 text-foreground/60"
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
