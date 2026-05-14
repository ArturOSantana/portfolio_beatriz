import type { Metadata } from "next";
import "./globals.css";
import "./design-profissional.css";

export const metadata: Metadata = {
  title: "Beatriz - Jornalista Profissional",
  description: "Portfólio de jornalismo profissional - Redação, Assessoria de Imprensa, Ghostwriting e Blog Posts",
  keywords: ["jornalismo", "redação", "assessoria de imprensa", "ghostwriting", "blog posts", "jornalista"],
  authors: [{ name: "Beatriz" }],
  openGraph: {
    title: "Beatriz - Jornalista Profissional",
    description: "Portfólio de jornalismo profissional - Redação, Assessoria de Imprensa, Ghostwriting e Blog Posts",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

