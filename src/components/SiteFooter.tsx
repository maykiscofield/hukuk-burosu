import { Link } from "@tanstack/react-router";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Kartaltepe+Mah.+1.+Malazgirt+Cad.+No%3A2-4%2F1+Kele%C5%9F+Center+B+Blok+36+K%C3%BC%C3%A7%C3%BCk%C3%A7ekmece+%C4%B0stanbul";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--navy-deep)] text-primary-foreground/85">
      <div className="container-prose grid gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl text-primary-foreground">Cüneyt Kocamanoğlu</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">
            Avukatlık Bürosu
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/65">
            Köklü tecrübemiz ve modern hukuki yaklaşımımızla, müvekkillerimize
            gizlilik ve dürüstlük ilkeleri çerçevesinde danışmanlık sunuyoruz.
          </p>
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