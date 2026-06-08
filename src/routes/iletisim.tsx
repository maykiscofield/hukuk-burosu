import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim & Randevu — Cüneyt Kocamanoğlu Hukuk Bürosu" },
      {
        name: "description",
        content:
          "Ön görüşme ve danışmanlık randevusu için iletişim bilgilerimiz ve randevu talep formu.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Mesajınız iletilmiştir", {
        description: "En kısa sürede tarafınıza dönüş sağlanacaktır.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 500);
  }

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-prose py-20">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
            İletişim
          </div>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl text-[color:var(--navy-deep)] sm:text-6xl">
            Ön görüşme talep edin.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tüm görüşmeler avukatlık meslek kurallarına uygun olarak gizlilik
            içinde yürütülür.
          </p>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-10">
            <InfoRow icon={MapPin} title="Ofis Adresi">
              Kartaltepe Mah. 1.Malazgirt Cad. No:2-4/1  B Blok 36 Keleş Center<br />
              Küçükçekmece / İstanbul
            </InfoRow>
            <InfoRow icon={Phone} title="Telefon">
              +90 500 00 00<br />
              +90 532 000 00 00
            </InfoRow>
            <InfoRow icon={Mail} title="E-posta">
              avcuneytkocamanoglu@istanbulbarosu.org.tr
            </InfoRow>
            <InfoRow icon={Clock} title="Çalışma Saatleri">
              Pazartesi — Cuma · 09:00 — 18:30<br /> 
            </InfoRow>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="border border-border bg-background p-8 sm:p-10"
          >
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
                  className="field-input"
                />
              </Field>
              <Field label="Telefon" required>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--border);
          padding: 0.65rem 0;
          font-size: 0.95rem;
          color: var(--foreground);
          outline: none;
          transition: border-color .2s;
        }
        .field-input:focus { border-color: var(--gold); }
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
