import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/faaliyet-alanlari", label: "Faaliyet Alanları" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl tracking-tight text-[color:var(--navy-deep)]">
            Cüneyt Kocamanoğlu
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            Hukuk Bürosu
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/75 transition-colors hover:text-[color:var(--navy-deep)]"
              activeProps={{ className: "text-[color:var(--navy-deep)] font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/iletisim"
            className="border border-[color:var(--navy)] px-5 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--navy-deep)] transition-colors hover:bg-[color:var(--navy)] hover:text-primary-foreground"
          >
            Randevu Al
          </Link>
        </nav>

        <button
          aria-label="Menüyü aç"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-prose flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-foreground/80"
                activeProps={{ className: "text-[color:var(--navy-deep)] font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/iletisim"
              onClick={() => setOpen(false)}
              className="mt-3 border border-[color:var(--navy)] py-3 text-center text-xs uppercase tracking-[0.2em] text-[color:var(--navy-deep)]"
            >
              Randevu Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
