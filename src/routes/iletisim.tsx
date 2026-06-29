import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

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

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Mesajınız iletilmiştir", {
        description: "En kısa sürede tarafınıza dönüş sağlanacaktır.",
      });
      setForm({ name: "", email: "", phone: "", message: "", consent: false });
      setLoading(false);
    }, 500);
  }

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
              <span className="block">· 09:00 — 21:00</span>
            </InfoRow>
          </div>

          <form onSubmit={onSubmit} className="border border-border bg-background p-8 sm:p-10">
            <h2 className="font-serif text-2xl text-[color:var(--navy-deep)]">
              Randevu Talep Formu
            </h2>
            <div className="mt-2 h-px w-10 bg-[color:var(--gold)]" />

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Field label="Ad Soyad" required>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Adınız ve soyadınız"
                  className="field-input"
                />
              </Field>
              <Field label="Telefon" required>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="05XX XXX XX XX"
                  className="field-input"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="E-posta" required>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ornek@eposta.com"
                    className="field-input"
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Kısa Mesaj">
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="field-input resize-none"
                    placeholder="Görüşmek istediğiniz konu hakkında kısa bir bilgi..."
                  />
                </Field>
              </div>
            </div>

            <label className="mt-7 flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
              <input
                type="checkbox"
                required
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--gold)]"
              />
              <span>
                Kişisel verilerimin, ön görüşme talebimin değerlendirilmesi amacıyla
                6698 sayılı KVKK kapsamında işlenmesini kabul ediyorum.{" "}
                <span className="text-[color:var(--gold)]">*</span>
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 inline-flex w-full items-center justify-center bg-[color:var(--navy-deep)] px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-[color:var(--navy)] disabled:opacity-60 sm:w-auto"
            >
              {loading ? "Gönderiliyor..." : "Talebi Gönder"}
            </button>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Form aracılığıyla iletilen bilgiler, yalnızca ön görüşme talebinizi
              değerlendirmek amacıyla kullanılır ve üçüncü kişilerle paylaşılmaz.
            </p>
          </form>
        </div>
      </section>

      <style>{`
        .field-input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 0.75rem 0.9rem;
          font-size: 0.95rem;
          color: var(--foreground);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .field-input::placeholder {
          color: var(--muted-foreground);
        }
        .field-input:hover {
          border-color: color-mix(in oklab, var(--gold) 40%, var(--border));
        }
        .field-input:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--gold) 18%, transparent);
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label} {required && <span className="text-[color:var(--gold)]">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
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
