import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./design-profissional.css";

export const metadata: Metadata = {
  title: {
    default: "Beatriz - Jornalista Profissional | Portfólio",
    template: "%s | Beatriz - Jornalista"
  },
  description: "Portfólio profissional de jornalismo com experiência em redação jornalística, assessoria de imprensa, ghostwriting e produção de conteúdo para blogs. Trabalhos publicados em grandes veículos.",
  keywords: [
    "jornalismo",
    "jornalista profissional",
    "redação jornalística",
    "assessoria de imprensa",
    "ghostwriting",
    "blog posts",
    "produção de conteúdo",
    "comunicação",
    "redação publicitária",
    "conteúdo editorial"
  ],
  authors: [{ name: "Beatriz", url: "https://portfolio-beatriz.vercel.app" }],
  creator: "Beatriz",
  publisher: "Beatriz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolio-beatriz.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Beatriz - Jornalista Profissional | Portfólio",
    description: "Portfólio profissional de jornalismo com experiência em redação, assessoria de imprensa e produção de conteúdo.",
    url: 'https://portfolio-beatriz.vercel.app',
    siteName: 'Beatriz - Jornalista',
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: '/assets/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Beatriz - Jornalista Profissional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Beatriz - Jornalista Profissional",
    description: "Portfólio profissional de jornalismo",
    images: ['/assets/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'journalism',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
        
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Beatriz',
              jobTitle: 'Jornalista Profissional',
              description: 'Jornalista com experiência em redação, assessoria de imprensa e produção de conteúdo',
              url: 'https://portfolio-beatriz.vercel.app',
              sameAs: [],
              knowsAbout: [
                'Jornalismo',
                'Redação Jornalística',
                'Assessoria de Imprensa',
                'Ghostwriting',
                'Produção de Conteúdo'
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

