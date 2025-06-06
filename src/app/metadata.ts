import type { Metadata } from "next";

export const homeMetadata: Metadata = {
  title: "Inicio - Coaching para Mayores de 60",
  description: "Nunca es tarde para ser quien viniste a ser. Coaching especializado para profesionales mayores de 60 años. Transforma tu experiencia en renovación personal con José Luis Arellano.",
  keywords: ["coaching mayores 60", "renovación personal", "propósito de vida", "José Luis Arellano", "desarrollo personal seniors"],
  openGraph: {
    title: "José Luis Arellano - Coaching para Mayores de 60",
    description: "Nunca es tarde para ser quien viniste a ser. Coaching especializado para profesionales mayores de 60 años.",
    url: "https://joseluisarellano.com",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "José Luis Arellano - Coaching para transformar tu vida después de los 60",
      },
    ],
  },
};