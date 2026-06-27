import { createFileRoute } from "@tanstack/react-router";
import {
  Scale,
  Building2,
  Users,
  Home,
  Briefcase,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/faaliyet-alanlari")({
  head: () => ({
    meta: [
      { title: "Faaliyet Alanları — Av. Cüneyt Kocamanoğlu | İstanbul" },
      {
        name: "description",
        content:
          "Ceza hukuku, ticaret hukuku, aile hukuku, gayrimenkul, iş hukuku, idare hukuku ve miras hukuku alanlarında İstanbul'da uzman avukatlık hizmetleri.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:title", content: "Faaliyet Alanları — Av. Cüneyt Kocamanoğlu | İstanbul" },
      {
        property: "og:description",
        content:
          "Ceza, ticaret, aile, gayrimenkul, iş, idare ve miras hukuku alanlarında İstanbul'da uzman avukatlık hizmetleri.",
      },
      { property: "og:url", content: "https://cuneytkocamanoglu.av.tr/faaliyet-alanlari" },
      { property: "og:site_name", content: "Cüneyt Kocamanoğlu Hukuk Bürosu" },
      {
        tagName: "link",
        rel: "canonical",
        href: "https://cuneytkocamanoglu.av.tr/faaliyet-alanlari",
      },
    ],
  }),
  component: PracticeAreas,
});

const areas = [
  {
    icon: Scale,
    title: "Ceza Hukuku",
    desc: "Soruşturma aşamasından temyiz incelemesine kadar tüm ceza yargılaması süreçlerinde müvekkillerimizi etkin biçimde temsil ediyoruz.",
    detail: "Soruşturma · Kovuşturma · Temyiz",
  },
  {
    icon: Building2,
    title: "Ticaret Hukuku",
    desc: "Şirket kuruluşları, birleşme-devralma, ticari sözleşmeler ve uyuşmazlıkların çözümünde stratejik danışmanlık sağlıyoruz.",
    detail: "Şirketler · M&A · Sözleşme",
  },
  {
    icon: Users,
    title: "Aile Hukuku",
    desc: "Boşanma, velayet, nafaka ve mal rejimi davalarında gizlilik ilkesi içinde, hassas bir yaklaşımla hizmet veriyoruz.",
    detail: "Boşanma · Velayet · Nafaka",
  },
  {
    icon: Home,
    title: "Gayrimenkul Hukuku",
    desc: "Tapu iptal-tescil, kira uyuşmazlıkları, kentsel dönüşüm ve imar süreçlerine ilişkin bütüncül destek sunuyoruz.",
    detail: "Tapu · Kira · İmar",
  },
  {
    icon: Briefcase,
    title: "İş Hukuku",
    desc: "İşçi ve işveren arasındaki uyuşmazlıklarda; iş sözleşmeleri, kıdem-ihbar tazminatları ve işe iade davalarında temsil.",
    detail: "Tazminat · İşe İade · Sözleşme",
  },
  {
    icon: FileText,
    title: "Sözleşmeler Hukuku",
    desc: "Ticari ve özel sözleşmelerin müzakeresi, hazırlanması ve uyuşmazlık halinde yargısal süreçlerin yönetimi.",
    detail: "Müzakere · Hazırlık · Uyuşmazlık",
  },
  {
    icon: Landmark,
    title: "İdare Hukuku",
    desc: "İdari işlemlere karşı iptal ve tam yargı davaları; vergi ve idari yaptırımlara ilişkin danışmanlık.",
    detail: "İptal Davası · Vergi · Yaptırım",
  },
  {
    icon: ShieldCheck,
    title: "Miras Hukuku",
    desc: "Mirasın paylaşımı, vasiyetname düzenlenmesi, tenkis ve muris muvazaası davaları konularında uzman destek.",
    detail: "Paylaşım · Vasiyetname · Tenkis",
  },
];

function PracticeAreas() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
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
            Uzmanlık
          </div>

          <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.15] text-white sm:text-5xl md:text-6xl">
            Faaliyet Alanlarımız
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
            Cüneyt Kocamanoğlu Hukuk Bürosu; özel hukuk ve kamu hukukunun pek çok
            dalında, müvekkillerine güvenilir ve sonuç odaklı danışmanlık sunar.
          </p>

          <div className="mt-14 grid grid-cols-3 gap-0 divide-x divide-white/10 border border-white/10 md:max-w-xl">
            {[
              { value: "7+", label: "Uzmanlık Alanı" },
              { value: "9+", label: "Yıllık Deneyim" },
              { value: "100+", label: "Sonuçlanan Dava" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-5">
                <div className="font-serif text-2xl text-[color:var(--gold)]">{stat.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS GRID ──────────────────────────────────── */}
      <section className="container-prose py-24">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ icon: Icon, title, desc, detail }) => (
            <article
              key={title}
              className="group relative bg-background p-8 transition-colors duration-300 hover:bg-[color:var(--navy-deep)]"
            >
              <Icon
                className="h-7 w-7 text-[color:var(--navy)] transition-colors duration-300 group-hover:text-[color:var(--gold)]"
                strokeWidth={1.25}
              />
              <h2 className="mt-5 font-sans text-lg font-medium tracking-tight text-[color:var(--navy-deep)] transition-colors duration-300 group-hover:text-white">
                {title}
              </h2>
              <div className="mt-3 h-px w-10 bg-[color:var(--gold)] transition-all group-hover:w-16" />
              <p className="mt-5 text-[13px] leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/70">
                {desc}
              </p>
              <div className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--navy)]/80 transition-colors duration-300 group-hover:text-[color:var(--gold)]">
                {detail}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}