import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Heart, Brain, Target, Sparkles } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Filosofía de Coaching - Los 4 Pilares Fundamentales",
  description: "Descubre mi filosofía de coaching: después de los 60 no viene el ocaso, viene lo mejor de la vida. Los 4 pilares: sabiduría acumulada, renovación emocional, propósito renovado y vitalidad plena.",
  keywords: ["filosofía coaching", "coaching mayores 60", "renovación personal", "propósito de vida", "sabiduría experiencial", "vitalidad"],
  openGraph: {
    title: "Mi Filosofía de Coaching - José Luis Arellano",
    description: "Después de los 60 no viene el ocaso, viene lo mejor de la vida. Descubre mi filosofía de coaching basada en 4 pilares fundamentales.",
  },
};

export default function MiFilosofia() {
  const pilares = [
    {
      icon: <Brain className="w-10 h-10 text-brand-gold-warm" />,
      titulo: "Sabiduría Acumulada",
      descripcion: "Cada experiencia vivida es un activo invaluable. Mi filosofía reconoce que después de los 60, tienes un tesoro de conocimiento y experiencia que puede ser la base para tu renovación."
    },
    {
      icon: <Heart className="w-10 h-10 text-brand-gold-warm" />,
      titulo: "Renovación Emocional",
      descripcion: "La madurez emocional que viene con los años es tu superpoder. Es momento de liberarte de viejos patrones y abrazar nuevas formas de ser y estar en el mundo."
    },
    {
      icon: <Target className="w-10 h-10 text-brand-gold-warm" />,
      titulo: "Propósito Renovado",
      descripcion: "Después de décadas cumpliendo expectativas externas, es tu momento de definir qué es verdaderamente importante para ti y vivir alineado con tus valores más profundos."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-brand-gold-warm" />,
      titulo: "Vitalidad Plena",
      descripcion: "La edad cronológica no define tu vitalidad. Mi filosofía abraza la energía renovada que viene cuando vives con propósito y pasión."
    }
  ];

  const creencias = [
    {
      titulo: "El Ocaso es un Mito",
      contenido: "La sociedad nos ha vendido la idea de que después de los 60 viene el declive. Mi experiencia personal y la de cientos de clientes demuestran lo contrario: es el momento de mayor libertad y potencial."
    },
    {
      titulo: "La Experiencia es Poder",
      contenido: "Tus décadas de vida no son un peso, son alas. Cada fracaso, cada éxito, cada aprendizaje te ha preparado para este momento de transformación consciente."
    },
    {
      titulo: "Nunca es Tarde para Ser",
      contenido: "No importa cuántos años tengas, siempre puedes elegir ser quien realmente viniste a ser. La autenticidad no tiene fecha de caducidad."
    },
    {
      titulo: "El Servicio da Sentido",
      contenido: "Compartir tu sabiduría y experiencia con otros no solo los beneficia a ellos, sino que da un sentido profundo y renovado a tu propia vida."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-golden-vitality text-brand-white-pure py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif-display font-bold mb-4">
            Mi Filosofía de Coaching
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            "Después de los 60, no viene el ocaso... ¡Viene lo mejor de la vida!"
          </p>
        </div>
      </section>

      {/* Introducción Filosófica */}
      <section className="py-16 bg-brand-white-pure">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif-display font-bold text-brand-blue-deep mb-6 text-center">
              Una Nueva Visión de la Madurez
            </h2>
            <p className="text-lg text-brand-gray-pro mb-6">
              Mi filosofía de coaching nace de una convicción profunda: los años después de los 60 no son el final 
              de nada, sino el comienzo de la etapa más auténtica y significativa de tu vida.
            </p>
            <p className="text-lg text-brand-gray-pro mb-6">
              Después de décadas en el mundo corporativo y mi propia transformación personal a los 50 años, 
              descubrí que la verdadera libertad viene cuando dejamos de vivir según las expectativas de otros 
              y comenzamos a vivir desde nuestra esencia más profunda.
            </p>
            <p className="text-lg text-brand-gray-pro">
              Esta filosofía no es teoría: es el resultado de mi propia experiencia y la de cientos de personas 
              que he acompañado en su viaje de renovación personal después de los 60.
            </p>
          </div>
        </div>
      </section>

      {/* Los 4 Pilares */}
      <section className="py-16 bg-brand-blue-ultralight">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif-display font-bold text-brand-blue-deep mb-12 text-center">
            Los 4 Pilares de mi Filosofía
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pilares.map((pilar, index) => (
              <div key={index} className="bg-brand-white-pure p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {pilar.icon}
                  <h3 className="text-xl font-bold text-brand-blue-deep ml-4">
                    {pilar.titulo}
                  </h3>
                </div>
                <p className="text-brand-gray-pro">
                  {pilar.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creencias Fundamentales */}
      <section className="py-16 bg-brand-white-pure">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif-display font-bold text-brand-blue-deep mb-12 text-center">
              Mis Creencias Fundamentales
            </h2>
            <div className="space-y-8">
              {creencias.map((creencia, index) => (
                <div key={index} className="border-l-4 border-brand-gold-warm pl-6">
                  <h3 className="text-xl font-bold text-brand-blue-deep mb-2">
                    {creencia.titulo}
                  </h3>
                  <p className="text-brand-gray-pro">
                    {creencia.contenido}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* El Método */}
      <section className="py-16 bg-gradient-natural-renewal text-brand-white-pure">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif-display font-bold mb-8">
              Mi Método: El Viaje de Renovación
            </h2>
            <p className="text-lg mb-6">
              Mi método de coaching no es un proceso lineal, sino un viaje de descubrimiento personal que respeta 
              tu individualidad y se adapta a tu ritmo. No se trata de cambiar quien eres, sino de revelar quien 
              siempre has sido bajo las capas de expectativas y roles que has acumulado.
            </p>
            <p className="text-lg mb-8">
              A través de conversaciones profundas, ejercicios reflexivos y acciones concretas, te acompaño en el 
              proceso de reconectar con tu esencia, redefinir tu propósito y diseñar una vida que refleje tus 
              valores más auténticos.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonio Personal */}
      <section className="py-16 bg-brand-white-pure">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-brand-blue-ultralight p-8 rounded-lg">
            <h3 className="text-2xl font-serif-display font-bold text-brand-blue-deep mb-4 text-center">
              Mi Promesa Personal
            </h3>
            <p className="text-lg text-brand-gray-pro italic text-center mb-4">
              "A mis 65 años, vivo cada día con más energía y propósito que cuando tenía 40. 
              No porque ignore mi edad, sino porque he aprendido a honrarla y aprovecharla."
            </p>
            <p className="text-brand-gray-pro text-center">
              Mi compromiso contigo es simple: te acompañaré con toda mi experiencia, sabiduría y corazón 
              en tu viaje hacia una vida más plena. Porque sé, por experiencia propia, que es posible.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-wisdom-ascendant text-brand-white-pure">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif-display font-bold mb-6">
            ¿Resuena Esta Filosofía Contigo?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Si sientes que es momento de escribir un nuevo capítulo en tu vida, uno donde tú eres el autor 
            principal, me encantaría conversar contigo.
          </p>
          <Link href="/contacto">
            <Button variant="primary" className="text-lg px-8 py-3">
              Comienza tu Viaje de Renovación
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}