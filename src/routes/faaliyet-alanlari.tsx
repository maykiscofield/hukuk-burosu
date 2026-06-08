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
      { title: "Faaliyet Alanları — Cüneyt Kocamanoğlu Hukuk Bürosu" },
      {
        name: "description",
        content:
          "Ceza, ticaret, aile, gayrimenkul, iş ve idare hukuku başta olmak üzere uzmanlık alanlarımız.",
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
  },
  {
    icon: Building2,
    title: "Ticaret Hukuku",
    desc: "Şirket kuruluşları, birleşme-devralma, ticari sözleşmeler ve uyuşmazlıkların çözümünde stratejik danışmanlık sağlıyoruz.",
  },
  {
    icon: Users,
    title: "Aile Hukuku",
    desc: "Boşanma, velayet, nafaka ve mal rejimi davalarında gizlilik ilkesi içinde, hassas bir yaklaşımla hizmet veriyoruz.",
  },
  {
    icon: Home,
    title: "Gayrimenkul Hukuku",
    desc: "Tapu iptal-tescil, kira uyuşmazlıkları, kentsel dönüşüm ve imar süreçlerine ilişkin bütüncül destek sunuyoruz.",
  },
  {
    icon: Briefcase,
    title: "İş Hukuku",
    desc: "İşçi ve işveren arasındaki uyuşmazlıklarda; iş sözleşmeleri, kıdem-ihbar tazminatları ve işe iade davalarında temsil.",
  },
  {
    icon: FileText,
    title: "Sözleşmeler Hukuku",
    desc: "Ticari ve özel sözleşmelerin müzakeresi, hazırlanması ve uyuşmazlık halinde yargısal süreçlerin yönetimi.",
  },
  {
    icon: Landmark,
    title: "İdare Hukuku",
    desc: "İdari işlemlere karşı iptal ve tam yargı davaları; vergi ve idari yaptırımlara ilişkin danışmanlık.",
  },
  {
    icon: ShieldCheck,
    title: "Miras Hukuku",
    desc: "Mirasın paylaşımı, vasiyetname düzenlenmesi, tenkis ve muris muvazaası davaları konularında uzman destek.",
  },
];

function PracticeAreas() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-prose py-20">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
            Uzmanlık
          </div>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl text-[color:var(--navy-deep)] sm:text-6xl">
            Faaliyet alanlarımız
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Cüneyt Kocamanoğlu Hukuk Bürosu; özel hukuk ve kamu hukukunun pek çok
            dalında, müvekkillerine güvenilir ve sonuç odaklı danışmanlık sunar.
          </p>
        </div>
      </section>

      <section className="container-prose py-20">
        {/* Grid yapısı 8 kartı tam dolduracak şekilde md:2'li ve lg:4'lü düzene geçirildi. Gri boşluk sıfırlandı. */}
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group bg-background p-8 transition-colors duration-300 hover:bg-secondary"
            >
              <Icon
                className="h-8 w-8 text-[color:var(--navy)] transition-colors group-hover:text-[color:var(--gold)]"
                strokeWidth={1.25}
              />
              <h2 className="mt-6 font-sans text-lg font-medium tracking-tight text-[color:var(--navy-deep)]">
                {title}
              </h2>

              <div className="mt-3 h-px w-10 bg-[color:var(--gold)] transition-all group-hover:w-16" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}