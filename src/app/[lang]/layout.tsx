import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";
import { theme } from "@/data/theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "WebStudio | Professional Ready-Made Websites",
  description: "Get a professional, responsive website for your business in 48 hours. Ready-made templates for Restaurants, Gyms, and Clinics.",
  keywords: ["website templates", "ready made websites", "business websites", "restaurant website template", "gym website template", "clinic website template", "whatsapp integration website"],
  authors: [{ name: "WebStudio" }],
  openGraph: {
    title: "WebStudio | Professional Ready-Made Websites",
    description: "Get a professional, responsive website for your business in 48 hours. We build high-converting sites for local businesses.",
    type: "website",
    locale: "en_US",
    siteName: "WebStudio",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebStudio | Professional Ready-Made Websites",
    description: "Get a professional, responsive website for your business in 48 hours.",
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
  `;

  return (
    <html
      lang={lang}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${inter.variable} ${cairo.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
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
