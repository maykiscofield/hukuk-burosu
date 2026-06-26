import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-serif text-7xl text-[color:var(--navy-deep)]">404</div>
        <h1 className="mt-4 font-serif text-2xl text-[color:var(--navy-deep)]">
          Sayfa Bulunamadı
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-[color:var(--gold)] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[color:var(--navy-deep)] transition-colors hover:bg-[color:var(--gold-soft)]"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-[color:var(--navy-deep)]">
          Bu sayfa yüklenemedi
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Bir şeyler ters gitti. Lütfen tekrar deneyin.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-[color:var(--gold)] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[color:var(--navy-deep)] transition-colors hover:bg-[color:var(--gold-soft)]"
          >
            Tekrar Dene
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-[color:var(--navy)] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[color:var(--navy-deep)] transition-colors hover:bg-[color:var(--navy)] hover:text-primary-foreground"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Cüneyt Kocamanoğlu Hukuk Bürosu",
  "url": "https://cuneytkocamanoglu.av.tr",
  "description": "İstanbul merkezli ceza, ticaret, aile ve gayrimenkul hukuku alanlarında uzman hukuk bürosu.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kartaltepe Mah. 1. Malazgirt Cad. No:2-4/1 Keleş Center B Blok 36",
    "addressLocality": "Küçükçekmece",
    "addressRegion": "İstanbul",
    "addressCountry": "TR"
  },
  "telephone": "+905446562757",
  "email": "avcuneytiletisim@gmail.com",
  "openingHours": "Mo-Su 09:00-21:00",
  "founder": {
    "@type": "Person",
    "name": "Cüneyt Kocamanoğlu",
    "jobTitle": "Avukat",
    "alumniOf": "İstanbul Üniversitesi Hukuk Fakültesi",
    "memberOf": {
      "@type": "Organization",
      "name": "İstanbul Barosu"
    }
  }
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      {
        name: "google-site-verification",
        content: "google2168cc1d9d6c3680",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <Toaster />
    </>
  );
}