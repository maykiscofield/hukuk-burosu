import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--navy-deep)] text-primary-foreground/85">
      <div className="container-prose grid gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl text-primary-foreground">Cüneyt Kocamanoğlu</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold-soft)]">
            Hukuk Bürosu
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
            <li>Kartaltepe Mah. 1.Malazgirt Cad. No:2-4/1  B Blok 36 Keleş Center</li>
            <li>Küçükçekmece / İstanbul</li>
            <li>+90 500 000 0000</li>
            <li>avcuneytkocamanoglu@istanbulbarosu.org.tr</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/55 sm:flex-row">
          <span>© {new Date().getFullYear()} Cüneyt Kocamanoğlu Hukuk Bürosu. Tüm hakları saklıdır.</span>
          <span>Avukatlık Kanunu ve TBB meslek kuralları çerçevesinde hizmet verilmektedir.</span>
        </div>
      </div>
    </footer>
  );
}
