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
    <header className="sticky top-0 z-40 border-b border-[rgba(201,168,76,0.5)] bg-gradient-to-r from-[#0A1223] to-[#1a2a4a] backdrop-blur-md">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
  <img
    src="/logo.png"
    alt="Cüneyt Kocamanoğlu Avukatlık Bürosu"
    className="h-16 w-auto"
  />
</Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative pb-1 text-sm text-white/65 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[color:var(--gold)] after:content-[''] after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              activeProps={{
                className: "text-white font-medium after:w-full",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/iletisim"
            className="bg-[color:var(--gold)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--navy-deep)] transition-colors hover:bg-[color:var(--gold-soft)]"
          >
            Randevu Al
          </Link>
        </nav>

        <button
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-[rgba(201,168,76,0.5)] bg-[#0A1223] md:hidden">
          <div className="container-prose flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-white/75"
                activeProps={{ className: "text-white font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/iletisim"
              onClick={() => setOpen(false)}
              className="mt-3 bg-[color:var(--gold)] py-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--navy-deep)] transition-colors hover:bg-[color:var(--gold-soft)]"
            >
              Randevu Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}