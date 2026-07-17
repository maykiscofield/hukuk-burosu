import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scale, ShieldCheck, Gavel, Building2, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avukat Cüneyt Kocamanoğlu | İstanbul Avukatlık Bürosu" },
      {
        name: "description",
        content:
          "Avukat Cüneyt Kocamanoğlu — İstanbul Küçükçekmece merkezli avukatlık bürosu. Ceza, ticaret, aile ve gayrimenkul hukukunda 9 yılı aşkın deneyim. Ön görüşme için iletişime geçin.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:title", content: "Avukat Cüneyt Kocamanoğlu | İstanbul Avukatlık Bürosu" },
      {
        property: "og:description",
        content:
          "Ceza, ticaret, aile ve gayrimenkul hukukunda uzman avukat. İstanbul Barosu kayıtlı. 9+ yıl deneyim, 100+ başarıyla sonuçlanan dava.",
      },
      { property: "og:url", content: "https://cuneytkocamanoglu.av.tr/" },
      { property: "og:site_name", content: "Cüneyt Kocamanoğlu Avukatlık Bürosu" },
      { tagName: "link", rel: "canonical", href: "https://cuneytkocamanoglu.av.tr/" },
    ],
  }),
  component: HomePage,
});

const highlights = [
  {
    icon: Scale,
    title: "Ceza Hukuku",
    desc: "Soruşturma ve kovuşturma süreçlerinde stratejik savunma; hakların en güçlü şekilde korunması.",
    detail: "Ağır Ceza · CMK · İstinaf & Temyiz",
  },
  {
    icon: Building2,
    title: "Ticaret Hukuku",
    desc: "Şirket kuruluşu, sözleşme müzakereleri ve ticari uyuşmazlıklarda kurumsal çözümler.",
    detail: "TTK · Şirketler · Sözleşme",
  },
  {
    icon: ShieldCheck,
    title: "Aile Hukuku",
    desc: "Boşanma, velayet ve nafaka süreçlerinde hassasiyet ve mutlak gizlilik.",
    detail: "Boşanma · Velayet · Nafaka",
  },
  {
    icon: Gavel,
    title: "Gayrimenkul Hukuku",
    desc: "Tapu tescili, kira uyuşmazlıkları ve imar sorunlarında uzman hukuki destek.",
    detail: "Tapu · Kira · İmar",
  },
];

const trustItems = [
  "İstanbul Barosu Kayıtlı Avukat",
  "Avukatlık Kanunu'na Tam Uyum",
  "Türkiye Barolar Birliği Üyesi",
  "İlk Görüşme Gizliliği Güvencesi",
];

function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[color:var(--navy-deep)] text-primary-foreground">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('/kutuphane.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--navy-deep) 95%, transparent) 0%, color-mix(in oklab, var(--navy) 82%, transparent) 100%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 60px)",
          }}
          aria-hidden
        />

        <div className="container-prose relative z-10 flex min-h-[82vh] flex-col justify-center py-28">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
              <span className="h-px w-10 bg-[color:var(--gold)]" />
              Avukatlık Bürosu — İstanbul
            </div>

            <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-primary-foreground sm:text-6xl md:text-[4.25rem]">
  Avukat Cüneyt Kocamanoğlu
  <br />
  <span className="inline-block ml-0 sm:ml-[1ch] italic text-2xl sm:text-4xl md:text-[4.25rem] text-[color:var(--gold-soft)]">
    Hukuk & Danışmanlık
  </span>
</h1>

<p className="mt-7 max-w-xl text-[15px] leading-relaxed text-primary-foreground/70 sm:text-base">
  Ticaret ve ceza hukukunun en zorlu davalarında; stratejik savunma,
  sonuç odaklı danışmanlık. 9 yılı aşkın deneyim, onlarca emsal kararla.
</p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/iletisim"
                className="group inline-flex items-center gap-3 bg-[color:var(--gold)] px-8 py-4 text-[12px] uppercase tracking-[0.25em] text-[color:var(--navy-deep)] transition-colors hover:bg-[color:var(--gold-soft)]"
              >
                Ön Görüşme
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/faaliyet-alanlari"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 px-8 py-4 text-[12px] uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:border-[color:var(--gold-soft)] hover:text-[color:var(--gold-soft)]"
              >
                Faaliyet Alanlarımız
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[12px] text-primary-foreground/65"
                >
                  <CheckCircle2
                    className="h-3.5 w-3.5 shrink-0 text-[color:var(--gold)]/60"
                    strokeWidth={2}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="container-prose grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
            {[
              { value: "9+", label: "Yıllık Deneyim" },
              { value: "100+", label: "Dava Dosyası" },
              { value: "7+", label: "Temel Uzmanlık Alanı" },
              { value: "700+", label: "Müvekkil" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-6 md:py-7">
                <div className="font-serif text-2xl text-[color:var(--gold)]">{stat.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ───────────────────────────────────────── */}
      <section className="container-prose pb-12 pt-24">
        <div className="grid gap-14 md:grid-cols-[1fr_2fr]">
          <div className="md:pt-2">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              Faaliyet Alanları
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[color:var(--navy-deep)]">
              Uzmanlık
              <br />
              alanlarımız
            </h2>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              Her hukuk dalında derinlemesine bilgi ve uzun yılların verdiği
              tecrübeyle bütüncül hizmet.
            </p>
            <Link
              to="/faaliyet-alanlari"
              className="mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] text-[color:var(--navy-deep)] transition-colors hover:text-[color:var(--gold)]"
            >
              Tümünü Gör <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, desc, detail }) => (
              <div
                key={title}
                className="group relative bg-background p-8 transition-colors duration-300 hover:bg-[color:var(--navy-deep)]"
              >
                <Icon
                  className="h-7 w-7 text-[color:var(--navy)] transition-colors duration-300 group-hover:text-[color:var(--gold)]"
                  strokeWidth={1.25}
                />
                <h3 className="mt-5 font-sans text-lg font-medium tracking-tight text-[color:var(--navy-deep)] transition-colors duration-300 group-hover:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/70">
                  {desc}
                </p>
                <div className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--navy)]/80 transition-colors duration-300 group-hover:text-[color:var(--gold)]">
                  {detail}
                </div>
                <ArrowRight className="absolute bottom-7 right-7 h-4 w-4 text-[color:var(--gold)] opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US STRIP ─────────────────────────────────────────── */}
      <section className="border-b border-t border-border bg-secondary/40">
        <div className="container-prose pb-24 pt-12">
          <div className="mb-14 text-center">
            <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--gold)]">
              Neden Biz
            </div>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-[color:var(--navy-deep)]">
              Farkımız ne?
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-[color:var(--gold)]/40" />
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Stratejik Yaklaşım",
                d: "Her dava, yalnızca savunma değil; uzun vadeli sonuç hedeflenerek planlanır.",
              },
              {
                n: "02",
                t: "Doğrudan İletişim",
                d: "Müvekkiliniz asla kaybedilmiş hissetmez. Dosyanızdaki her gelişmeden anında haberdar edilirsiniz.",
              },
              {
                n: "03",
                t: "Emsal Kararlar",
                d: "9 yılı aşkın pratikte elde ettiğimiz içtihat birikimi ve emsal kararlar, savunma stratejimizin temelini oluşturur.",
              },
            ].map((it) => (
              <div key={it.n} className="relative border-l-2 border-[color:var(--gold)] pl-6">
                <div className="font-sans text-[12px] font-bold tracking-[0.25em] text-[color:var(--gold)]">
                  {it.n}
                </div>
                <h3 className="mt-2 font-serif text-2xl tracking-tight text-[color:var(--navy-deep)]">
                  {it.t}
                </h3>
                <p className="mt-3 text-[13.5px] font-normal leading-relaxed text-muted-foreground">
                  {it.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}