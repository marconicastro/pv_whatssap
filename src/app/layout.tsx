import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import MetaPixel from "@/components/MetaPixel";
import TikTokPixel from "@/components/TikTokPixel";

// Fontes Geist
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "SEU MARACUJÁ ESTÁ MORRENDO? SALVE SUA LAVOURA HOJE!",
  description: "Descubra como eliminar o trips de uma vez por todas com o Guia Prático, baseado na Embrapa, e recupere sua produtividade em semanas!",
  keywords: [
    "maracujá",
    "trips",
    "praga",
    "controle",
    "embrapa",
    "lavoura",
    "agricultura",
    "guia prático",
  ],
  authors: [{ name: "Guia Prático - Controle do Trips" }],
  openGraph: {
    title: "SEU MARACUJÁ ESTÁ MORRENDO? SALVE SUA LAVOURA HOJE!",
    description: "Guia Prático para Controle do Trips no Maracujá - Baseado na Embrapa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEU MARACUJÁ ESTÁ MORRENDO? SALVE SUA LAVOURA HOJE!",
    description: "Guia Prático para Controle do Trips no Maracujá - Baseado na Embrapa",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-subids=""
          async
          defer
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <MetaPixel />
        <TikTokPixel />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
