import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda — Cüneyt Kocamanoğlu Hukuk Bürosu" },
      {
        name: "description",
        content:
          "2017'den bu yana İstanbul'da hizmet veren Cüneyt Kocamanoğlu Hukuk Bürosu'nun felsefesi, ekibi ve değerleri.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-[color:var(--navy-deep)]">
        {/* Subtle diagonal overlay for depth */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 60px)",
          }}
        />

        <div className="container-prose relative py-24 md:py-32">
          <div className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--gold)]">
            Biz Kimiz
          </div>

          <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.15] text-white sm:text-5xl md:text-6xl">
            Yılların getirdiği <br className="hidden sm:block" />
            derin hukuki birikim.
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
            İstanbul merkezli, ticaret ve ceza hukukunda uzmanlaşmış. Stratejik
            hukuki danışmanlıktan dava takibine kadar her aşamada yanınızdayız.
          </p>

          {/* Stats bar */}
          <div className="mt-14 grid grid-cols-3 gap-0 divide-x divide-white/10 border border-white/10 md:max-w-xl">
            {[
              { value: "8+", label: "Yıllık Deneyim" },
              { value: "2017", label: "Kuruluş Yılı" },
              { value: "İBB", label: "İstanbul Barosu" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-5">
                <div className="font-serif text-2xl text-[color:var(--gold)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FELSEFE ──────────────────────────────────────────────── */}
      <section className="container-prose py-24">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* Image with gold frame */}
          <div className="relative">
            <div className="absolute -inset-3 -z-10 border border-[color:var(--gold)]/40" />
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80"
              alt="Hukuk bürosu iç mekânı"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl text-[color:var(--navy-deep)] sm:text-4xl">
              Felsefemiz
            </h2>
            <div className="mt-4 h-px w-12 bg-[color:var(--gold)]" />

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/80">
              <p>
                İstanbul merkezli kurulan Cüneyt Kocamanoğlu Hukuk Bürosu, hukuki
                danışmanlık ve dava takip hizmetlerini yenilikçi ve dinamik bir
                yaklaşımla, kurumsal bir disiplin çerçevesinde sunmaktadır.
                Akademik başarı ve güçlü bir vizyonla temelleri atılan büromuz, hem
                yerli hem yabancı müvekkillerine geniş bir yelpazede nitelikli hukuk
                hizmeti sağlamaktadır.
              </p>
              <p>
                Faaliyetlerimizin merkezinde üç temel ilke yer alır:{" "}
                <span className="font-medium text-[color:var(--navy-deep)]">
                  gizlilik, dürüstlük ve özen.
                </span>{" "}
                Her dosya, müvekkilimizle kurduğumuz güven ilişkisi temelinde, en
                ince ayrıntısına kadar değerlendirilir.
              </p>
              <p>
                Avukatlık Kanunu ve Türkiye Barolar Birliği meslek kurallarına tam
                bağlılıkla; çözüm odaklı, sonuç alıcı ve sürdürülebilir hukuki
                stratejiler geliştiriyoruz.
              </p>
            </div>

            {/* Core values */}
            <div className="mt-10 space-y-3">
              {[
                { icon: "⚖", label: "Gizlilik", desc: "Müvekkil bilgilerinin mutlak korunması" },
                { icon: "◈", label: "Dürüstlük", desc: "Şeffaf iletişim ve etik yaklaşım" },
                { icon: "◉", label: "Özen",      desc: "Her dosyaya bireysel ilgi ve titizlik" },
              ].map((v) => (
                <div
                  key={v.label}
                  className="flex items-start gap-4 border-l-2 border-[color:var(--gold)]/30 pl-4 py-1"
                >
                  <span className="mt-0.5 text-[color:var(--gold)] text-sm">{v.icon}</span>
                  <div>
                    <div className="text-[13px] font-semibold uppercase tracking-wider text-[color:var(--navy-deep)]">
                      {v.label}
                    </div>
                    <div className="text-[13px] text-foreground/60">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── KURUCU AVUKAT ────────────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-24">
          <h2 className="font-serif text-3xl text-[color:var(--navy-deep)] sm:text-4xl">
            Kurucu Avukat
          </h2>
          <div className="mt-4 h-px w-12 bg-[color:var(--gold)]" />

          <div className="mt-14 grid gap-12 md:grid-cols-[300px_1fr] md:items-start">
            {/* Portrait */}
            <div>
              <div className="relative">
                <div className="absolute -inset-2 -z-10 border border-[color:var(--gold)]/40" />
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80"
                  alt="Av. Cüneyt Kocamanoğlu portresi"
                  className="aspect-[3/4] w-full object-cover grayscale"
                  loading="lazy"
                />
              </div>

              {/* Credential badges under photo */}
              <div className="mt-4 space-y-2">
                {[
                  "İstanbul Üniversitesi Hukuk Fakültesi",
                  "İstanbul Barosu Üyesi",
                  "Onur Öğrencisi — 2017",
                ].map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-2 text-[12px] text-foreground/60"
                  >
                    <span className="h-px w-4 bg-[color:var(--gold)]" />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="font-serif text-3xl text-[color:var(--navy-deep)]">
                Av. Cüneyt Kocamanoğlu
              </h3>
              <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
                Kurucu — İstanbul Barosu
              </div>

              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  Eğitim hayatını İstanbul Üniversitesi bünyesinde şekillendiren Av.
                  Cüneyt Kocamanoğlu, 2009–2013 yılları arasında Siyasal Bilgiler
                  alanında lisans eğitimini başarıyla tamamladı.
                </p>
                <p>
                  Ardından aynı üniversitenin Hukuk Fakültesi'nde eğitimine devam
                  ederek 2013–2017 yılları arasında hukuk derecesini üstün başarıyla,
                  <span className="font-medium text-[color:var(--navy-deep)]">
                    {" "}Onur Öğrencisi{" "}
                  </span>
                  olarak tamamladı.
                </p>
                <p>
                  İstanbul Barosu'na katılmasının ardından stratejik ve çözüm odaklı
                  hukukçu kimliğiyle tanınan Kocamanoğlu; 8 yılı aşkın süredir
                  özellikle{" "}
                  <span className="font-medium text-[color:var(--navy-deep)]">
                    ticaret ve ceza hukukunun
                  </span>{" "}
                  en karmaşık ve yüksek profilli dosyalarında müvekkillerini
                  titizlikle temsil etmekte, çok sayıda emsal karara imza atmaktadır.
                </p>
                <p>
                  Hukuki bilgi birikimini ve derin analiz yeteneğini, müvekkillerine
                  pratik ve etkin hukuki çözümler sunmak için kullanan Kocamanoğlu,
                  her davayı özgün koşulları içinde ele alarak sonuç odaklı
                  stratejiler geliştirmektedir.
                </p>
              </div>

              {/* Achievement highlights */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { value: "8+",    label: "Yıl Deneyim" },
                  { value: "100+",  label: "Kapatılan Dava" },
                  { value: "İki",   label: "Uzmanlık Alanı" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-border bg-background p-4"
                  >
                    <div className="font-serif text-2xl text-[color:var(--navy-deep)]">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}