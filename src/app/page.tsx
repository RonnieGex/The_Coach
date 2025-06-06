import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio - Coaching para Mayores de 60",
  description: "Nunca es tarde para ser quien viniste a ser. Coaching especializado para profesionales mayores de 60 años. Transforma tu experiencia en renovación personal con José Luis Arellano.",
  keywords: ["coaching mayores 60", "renovación personal", "propósito de vida", "José Luis Arellano", "desarrollo personal seniors"],
  openGraph: {
    title: "José Luis Arellano - Coaching para Mayores de 60",
    description: "Nunca es tarde para ser quien viniste a ser. Coaching especializado para profesionales mayores de 60 años.",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-wisdom-ascendant text-brand-white-pure text-center py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Nunca es tarde para ser quien viniste a ser… y vivir lo que siempre soñaste
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-sans-body animate-fade-in-up animation-delay-300">
            Soy José Luis Arellano, "The Coach", y acompaño a mayores de 60 a aprovechar sus experiencias de vida para renovar sus expectativas, reconectar con su propósito y lograr sus sueños... Porque después de los 60´s. ¡No viene el Ocaso, viene lo Mejor de la Vida!
          </p>
          <div className="animate-fade-in-up animation-delay-500">
            <Link href="/servicios">
              <Button variant="primary" className="hover:scale-105 transform transition-all duration-300">
                Descubre Cómo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Introducción */}
      <section className="py-16 bg-brand-white-pure">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-brand-blue-deep mb-4 animate-fade-in-up">
              Conoce a José Luis Arellano, The Coach
            </h2>
            <p className="max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Con una trayectoria que abarca desde el campeonato nacional de natación hasta roles directivos en Procter & Gamble, Bic y Duracell, he transformado décadas de experiencia y superación personal en un método único para guiar a profesionales y ejecutivos hacia nuevos comienzos plenos y significativos.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Link href="/quien-soy">
                  <Button variant="secondary" className="hover:scale-105 transform transition-all duration-300">
                    Leer mi Historia
                  </Button>
              </Link>
            </div>
         </div>
      </section>

      {/* Sección de Beneficios Clave */}
      <section className="py-16 bg-brand-blue-ultralight">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif-display font-bold text-brand-blue-deep mb-12 text-center animate-fade-in-up">
            ¿Por qué elegir coaching después de los 60?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-brand-white-pure rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slide-in-left">
              <div className="w-16 h-16 bg-brand-gold-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-blue-deep">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-deep mb-3">Propósito Renovado</h3>
              <p className="text-brand-gray-pro">
                Descubre qué realmente importa en esta nueva etapa y vive alineado con tus valores más profundos.
              </p>
            </div>
            
            <div className="text-center p-6 bg-brand-white-pure rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-brand-gold-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-blue-deep">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-deep mb-3">Energía Renovada</h3>
              <p className="text-brand-gray-pro">
                Transforma la experiencia acumulada en combustible para nuevos proyectos y sueños.
              </p>
            </div>
            
            <div className="text-center p-6 bg-brand-white-pure rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slide-in-right">
              <div className="w-16 h-16 bg-brand-gold-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-blue-deep">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-deep mb-3">Legado Significativo</h3>
              <p className="text-brand-gray-pro">
                Crea un impacto duradero compartiendo tu sabiduría y contribuyendo al mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 bg-gradient-natural-renewal text-brand-white-pure">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif-display font-bold mb-6 animate-fade-in-up">
            Tu Mejor Capítulo Está Por Comenzar
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            No dejes que la edad sea una limitación. Conviértela en tu mayor fortaleza.
          </p>
          <div className="animate-fade-in-up animation-delay-400">
            <Link href="/contacto">
              <Button variant="primary" className="text-lg px-8 py-3 hover:scale-105 transform transition-all duration-300">
                Comienza tu Transformación
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}