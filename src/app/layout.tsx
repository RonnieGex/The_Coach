import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(components-globales-app)/Header";
import Footer from "./(components-globales-app)/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ToastProvider from "@/components/providers/ToastProvider";

// Nota: Puedes afinar las fuentes aquí si es necesario
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "José Luis Arellano | The Coach - Coaching para Mayores de 60",
    template: "%s | José Luis Arellano - The Coach"
  },
  description: "Coaching especializado para profesionales y ejecutivos mayores de 60 años. Transforma tu experiencia en renovación personal. Después de los 60, ¡viene lo mejor de la vida!",
  keywords: ["coaching", "mayores de 60", "desarrollo personal", "liderazgo", "renovación personal", "coaching ejecutivo", "vida después de 60", "propósito de vida"],
  authors: [{ name: "José Luis Arellano" }],
  creator: "José Luis Arellano",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://joseluisarellano.com",
    siteName: "José Luis Arellano - The Coach",
    title: "José Luis Arellano | The Coach - Coaching para Mayores de 60",
    description: "Coaching especializado para profesionales y ejecutivos mayores de 60 años. Transforma tu experiencia en renovación personal.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "José Luis Arellano - The Coach"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "José Luis Arellano | The Coach - Coaching para Mayores de 60",
    description: "Coaching especializado para profesionales y ejecutivos mayores de 60 años. Transforma tu experiencia en renovación personal.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="es">
      <body className={inter.className}>
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        <ToastProvider />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}