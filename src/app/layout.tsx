import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(components-globales-app)/Header";
import Footer from "./(components-globales-app)/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ToastProvider from "@/components/providers/ToastProvider";

// Optimización de fuentes
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial', 'sans-serif']
});

export const metadata: Metadata = {
  title: {
    default: "José Luis Arellano | The Coach - Coaching para Mayores de 60",
    template: "%s | José Luis Arellano - The Coach"
  },
  description: "Coaching especializado para profesionales y ejecutivos mayores de 60 años. Transforma tu experiencia en renovación personal. Después de los 60, ¡viene lo mejor de la vida!",
  keywords: ["coaching", "mayores de 60", "desarrollo personal", "liderazgo", "renovación personal", "coaching ejecutivo", "vida después de 60", "propósito de vida", "transformación personal", "coach profesional"],
  authors: [{ name: "José Luis Arellano" }],
  creator: "José Luis Arellano",
  publisher: "José Luis Arellano - The Coach",
  metadataBase: new URL('https://the-coach-jose-luis.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://the-coach-jose-luis.netlify.app",
    siteName: "José Luis Arellano - The Coach",
    title: "José Luis Arellano | The Coach - Coaching para Mayores de 60",
    description: "Coaching especializado para profesionales y ejecutivos mayores de 60 años. Transforma tu experiencia en renovación personal.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "José Luis Arellano - The Coach",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "José Luis Arellano | The Coach - Coaching para Mayores de 60",
    description: "Coaching especializado para profesionales y ejecutivos mayores de 60 años. Transforma tu experiencia en renovación personal.",
    images: ["/images/twitter-image.jpg"],
    creator: "@CoachJoseLuis"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: 'business',
  classification: 'Coaching y Desarrollo Personal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicons optimizados */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        
        {/* Toast Provider */}
        <ToastProvider />
        
        {/* Layout principal */}
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
