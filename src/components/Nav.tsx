import { Link, useLocation } from "@tanstack/react-router";
import { Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/experiencia", label: "Experiência" },
];

export function Nav() {
  const { pathname } = useLocation();
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-8 lg:px-16 py-6 flex items-center justify-between">
      <nav className="flex items-center gap-8">
        {links.map((l) => {
          const active = pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm tracking-wide transition-colors ${
                active ? "text-accent-blue font-medium" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
      <a href="mailto:luiz260920@gmail.com" className="hidden md:flex items-center gap-2 text-xs text-foreground/70 hover:text-foreground transition-colors">
        <Phone className="w-3.5 h-3.5" />
        luiz260920@gmail.com
      </a>
    </header>
  );
}
