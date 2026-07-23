import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim & Randevu — Av. Cüneyt Kocamanoğlu | İstanbul" },
      {
        name: "description",
        content:
          "Avukat Cüneyt Kocamanoğlu ile ön görüşme randevusu alın. Küçükçekmece / İstanbul. Tel: +90 544 656 2757. Haftanın her günü 09:00-21:00.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:title", content: "İletişim & Randevu — Av. Cüneyt Kocamanoğlu | İstanbul" },
      {
        property: "og:description",
        content: "Ön görüşme randevusu alın. Küçükçekmece / İstanbul. Haftanın her günü 09:00-21:00.",
      },
      { property: "og:url", content: "https://cuneytkocamanoglu.av.tr/iletisim" },
      { property: "og:site_name", content: "Cüneyt Kocamanoğlu Avukatlık Bürosu" },
      { tagName: "link", rel: "canonical", href: "https://cuneytkocamanoglu.av.tr/iletisim" },
    ],
  }),
  component: Contact,
});

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Kartaltepe+Mah.+1.+Malazgirt+Cad.+No%3A2-4%2F1+Kele%C5%9F+Center+B+Blok+36+K%C3%BC%C3%A7%C3%BCk%C3%A7ekmece+%C4%B0stanbul";

const MAPS_EMBED =
  "https://maps.google.com/maps?q=C%C3%BCneyt+Kocamano%C4%9Flu+Avukatl%C4%B1k+B%C3%BCrosu%2C+K%C3%BC%C3%A7%C3%BCk%C3%A7ekmece%2C+%C4%B0stanbul&output=embed";

function Contact() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-[color:var(--navy-deep)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 60px)",
          }}
        />
        <div className="container-prose relative py-24 md:py-32">
          <div className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--gold)]">
            İletişim
          </div>
          <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.15] text-white sm:text-5xl md:text-6xl">
            Ön görüşme talep edin
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
            Tüm görüşmeler avukatlık meslek kurallarına uygun olarak gizlilik içinde yürütülür.
          </p>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">

          <div className="space-y-10">
            <InfoRow icon={MapPin} title="Ofis Adresi">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[color:var(--gold)]">
                <span className="block">Kartaltepe Mah. 1. Malazgirt Cad. No:2-4/1 Keleş Center B Blok 36</span>
                <span className="block">Küçükçekmece / İstanbul</span>
              </a>
            </InfoRow>

            <InfoRow icon={Phone} title="Telefon">
              <a href="tel:+905446562757" className="transition-colors hover:text-[color:var(--gold)]">
                +90 544 656 2757
              </a>
            </InfoRow>

            <InfoRow icon={Mail} title="E-posta">
              <a href="mailto:avcuneytkocamanoglu@istanbulbarosu.org.tr" className="block transition-colors hover:text-[color:var(--gold)]">
                avcuneytkocamanoglu@istanbulbarosu.org.tr
              </a>
              <a href="mailto:avcuneytiletisim@gmail.com" className="block transition-colors hover:text-[color:var(--gold)]">
                avcuneytiletisim@gmail.com
              </a>
            </InfoRow>

            <InfoRow icon={Clock} title="Çalışma Saatleri">
              <span className="block">Haftanın her günü</span>
              <span className="block">09:00 — 21:00</span>
            </InfoRow>

            <div id="hemen-iletisime-gecin" className="space-y-3 pt-2 scroll-mt-24">
              <div className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--gold)]">
                Hemen İletişime Geçin
              </div>
              <a
                href="https://wa.me/905446562757"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-border p-4 text-sm text-foreground/85 transition-all duration-300 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border transition-colors group-hover:border-[color:var(--gold)]">
                  <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
                </div>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Hızlı mesaj gönderin</div>
                </div>
              </a>
              <a
                href="tel:+905446562757"
                className="flex items-center gap-4 border border-border p-4 text-sm text-foreground/85 transition-all duration-300 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border transition-colors group-hover:border-[color:var(--gold)]">
                  <Phone className="h-4 w-4" strokeWidth={1.25} />
                </div>
                <div>
                  <div className="font-medium">Telefon</div>
                  <div className="text-xs text-muted-foreground">+90 544 656 2757</div>
                </div>
              </a>
              <a
                href="mailto:avcuneytiletisim@gmail.com"
                className="flex items-center gap-4 border border-border p-4 text-sm text-foreground/85 transition-all duration-300 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border transition-colors group-hover:border-[color:var(--gold)]">
                  <Mail className="h-4 w-4" strokeWidth={1.25} />
                </div>
                <div>
                  <div className="font-medium">E-posta</div>
                  <div className="text-xs text-muted-foreground">avcuneytiletisim@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          <div className="border border-border overflow-hidden h-full min-h-[500px]">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ofis Konumu"
            />
          </div>

        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border">
        <Icon className="h-5 w-5 text-[color:var(--navy)]" strokeWidth={1.25} />
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--gold)]">
          {title}
        </div>
        <div className="mt-2 text-[15px] leading-relaxed text-foreground/85">
          {children}
        </div>
      </div>
    </div>
  );
}