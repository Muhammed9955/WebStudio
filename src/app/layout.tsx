import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
