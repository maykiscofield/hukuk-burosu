import { Link } from "@tanstack/react-router";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Kartaltepe+Mah.+1.+Malazgirt+Cad.+No%3A2-4%2F1+Kele%C5%9F+Center+B+Blok+36+K%C3%BC%C3%A7%C3%BCk%C3%A7ekmece+%C4%B0stanbul";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--navy-deep)] text-primary-foreground/85">
      <div className="container-prose grid gap-10 py-16 md:grid-cols-3">
        <div>
          <img
            src="/logo.png"
            alt="Cüneyt Kocamanoğlu Avukatlık Bürosu"
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/65">
            Köklü tecrübemiz ve modern hukuki yaklaşımımızla, müvekkillerimize
            gizlilik ve dürüstlük ilkeleri çerçevesinde danışmanlık sunuyoruz.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/av.cuneytkocamanoglu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center border border-[rgba(201,168,76,0.3)] text-white/50 transition-all duration-300 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/cuneytkocamanoglu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center border border-[rgba(201,168,76,0.3)] text-white/50 transition-all duration-300 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-primary-foreground">Bağlantılar</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[color:var(--gold-soft)]">Ana Sayfa</Link></li>
            <li><Link to="/faaliyet-alanlari" className="hover:text-[color:var(--gold-soft)]">Faaliyet Alanları</Link></li>
            <li><Link to="/hakkimizda" className="hover:text-[color:var(--gold-soft)]">Hakkımızda</Link></li>
            <li><Link to="/iletisim" className="hover:text-[color:var(--gold-soft)]">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-primary-foreground">İletişim</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--gold-soft)]">
                Kartaltepe Mah. 1. Malazgirt Cad. No:2-4/1 Keleş Center B Blok 36
              </a>
            </li>
            <li>Küçükçekmece / İstanbul</li>
            <li>
              <a href="tel:+905446562757" className="hover:text-[color:var(--gold-soft)]">
                +90 544 656 2757
              </a>
            </li>
            <li>
              <a href="mailto:avcuneytkocamanoglu@istanbulbarosu.org.tr" className="hover:text-[color:var(--gold-soft)]">
                avcuneytkocamanoglu@istanbulbarosu.org.tr
              </a>
            </li>
            <li>
              <a href="mailto:avcuneytiletisim@gmail.com" className="hover:text-[color:var(--gold-soft)]">
                avcuneytiletisim@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/55 sm:flex-row">
          <span>© {new Date().getFullYear()} Cüneyt Kocamanoğlu Avukatlık Bürosu. Tüm hakları saklıdır.</span>
          <span>Avukatlık Kanunu ve TBB meslek kuralları çerçevesinde hizmet verilmektedir.</span>
        </div>
      </div>
    </footer>
  );
}