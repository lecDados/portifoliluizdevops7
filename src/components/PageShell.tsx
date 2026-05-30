import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Nav } from "./Nav";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-hero-gradient">
      <Nav />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 min-h-screen"
      >
        {children}
      </motion.main>
    </div>
  );
}
