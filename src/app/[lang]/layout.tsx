import type { Metadata } from "next";
import { Outfit, Space_Grotesk, Tajawal } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";
import { theme } from "@/data/theme";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MMS Creative Agency | Digital Solutions for Ambitious Brands",
  description: "Transform your digital presence with strategic marketing, media buying, creative design, and custom software development (mobile apps, web apps, UI/UX).",
  keywords: ["digital marketing agency", "media buying", "strategic marketing", "web development", "mobile apps", "UI/UX design", "video editing", "ready-made business solutions", "MMS Creative Agency"],
  authors: [{ name: "MMS Creative Agency" }],
  openGraph: {
    title: "MMS Creative Agency | Digital Solutions for Ambitious Brands",
    description: "Transform your digital presence with strategic marketing, media buying, creative design, and custom software development.",
    type: "website",
    locale: "en_US",
    siteName: "MMS Creative Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMS Creative Agency | Digital Solutions for Ambitious Brands",
    description: "Transform your digital presence with strategic marketing, media buying, creative design, and custom software development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const isRtl = lang === "ar";

  const themeStyles = `
    :root {
      --theme-primary: ${theme.primary};
      --theme-primary-dark: ${theme.primaryDark};
      --theme-accent: ${theme.accent};
      --theme-secondary: ${theme.secondary};
      --theme-background: ${theme.background};
      --theme-foreground: ${theme.foreground};
    }
    .dark {
      --theme-background: ${theme.dark.background};
      --theme-foreground: ${theme.dark.foreground};
    }
  `;

  return (
    <html
      lang={lang}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${outfit.variable} ${spaceGrotesk.variable} ${tajawal.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          } catch (_) {}
        ` }} />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Navbar lang={lang} />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer lang={lang} />
        <WhatsAppFloatingButton lang={lang} />
      </body>
    </html>
  );
}
