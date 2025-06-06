import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quién Soy - Mi Historia y Trayectoria",
  description: "Conoce la historia de José Luis Arellano, desde campeón nacional de natación hasta coach especializado en mayores de 60. Experiencia en P&G, Bic y Duracell.",
  keywords: ["José Luis Arellano", "historia personal", "trayectoria profesional", "Procter & Gamble", "coaching ejecutivo", "experiencia empresarial"],
  openGraph: {
    title: "Quién Soy - José Luis Arellano, The Coach",
    description: "Conoce mi historia: desde campeón de natación hasta coach especializado en transformación personal para mayores de 60 años.",
  },
};

export default function QuienSoy() {
  return (
    <>
      {/* Hero Section con Título */}
      <section className="bg-gradient-natural-renewal text-brand-white-pure py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif-display font-bold mb-4">
            Conoce mi Historia
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Una vida de transformación, superación y servicio
          </p>
        </div>
      </section>

      {/* Sección Principal de Historia */}
      <section className="py-16 bg-brand-white-pure">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introducción */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif-display font-bold text-brand-blue-deep mb-6">
                José Luis Arellano - "The Coach"
              </h2>
              <p className="text-lg mb-4 text-brand-gray-pro">
                Mi vida ha sido un viaje de constante transformación. Desde campeón nacional de natación, pasando por ejecutivo 
                de multinacionales líderes, hasta encontrar mi verdadera vocación como coach de vida para mayores de 60 años.
              </p>
              <p className="text-lg mb-4 text-brand-gray-pro">
                A mis 76 años, he aprendido que cada etapa de la vida trae sus propios desafíos y oportunidades. Mi misión es 
                acompañar a otros en el descubrimiento de que después de los 60, ¡viene lo mejor de la vida!
              </p>
            </div>

            {/* Trayectoria Profesional */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif-display font-bold text-brand-blue-deep mb-4">
                Mi Trayectoria Profesional
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-brand-gold-warm pl-6">
                  <h4 className="text-xl font-bold text-brand-blue-deep">Procter & Gamble (1983-1993)</h4>
                  <p className="text-brand-gray-pro">
                    Una década transformadora donde aprendí los fundamentos del liderazgo corporativo y la gestión de equipos 
                    de alto rendimiento en una de las empresas más exigentes del mundo.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold-warm pl-6">
                  <h4 className="text-xl font-bold text-brand-blue-deep">Bic y Duracell</h4>
                  <p className="text-brand-gray-pro">
                    Roles directivos que me permitieron liderar transformaciones organizacionales y desarrollar una visión 
                    estratégica global del negocio.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold-warm pl-6">
                  <h4 className="text-xl font-bold text-brand-blue-deep">Campeón Nacional de Natación</h4>
                  <p className="text-brand-gray-pro">
                    El deporte me enseñó disciplina, perseverancia y la importancia de superar los propios límites. 
                    Lecciones que aplico diariamente en mi vida y enseñanza.
                  </p>
                </div>
              </div>
            </div>

            {/* Mi Transformación Personal */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif-display font-bold text-brand-blue-deep mb-4">
                Mi Transformación Personal
              </h3>
              <p className="text-lg mb-4 text-brand-gray-pro">
                A los 50 años, experimenté mi propia crisis existencial. Después de décadas en el mundo corporativo, 
                sentí que algo faltaba. Fue entonces cuando descubrí el coaching y encontré mi verdadera vocación: 
                ayudar a otros a navegar sus propias transiciones de vida.
              </p>
              <p className="text-lg mb-4 text-brand-gray-pro">
                Esta transformación personal me llevó a especializarme en el acompañamiento de personas mayores de 60 años, 
                porque entiendo profundamente los desafíos y oportunidades que esta etapa presenta.
              </p>
            </div>

            {/* Valores y Filosofía */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif-display font-bold text-brand-blue-deep mb-4">
                Mis Valores Fundamentales
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brand-blue-ultralight p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-brand-blue-deep mb-2">Sabiduría Experiencial</h4>
                  <p className="text-brand-gray-pro">
                    Cada experiencia vivida es un tesoro de aprendizaje que puede transformarse en sabiduría para el futuro.
                  </p>
                </div>
                <div className="bg-brand-blue-ultralight p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-brand-blue-deep mb-2">Renovación Continua</h4>
                  <p className="text-brand-gray-pro">
                    La edad es solo un número. La capacidad de reinventarse y crecer no tiene límites.
                  </p>
                </div>
                <div className="bg-brand-blue-ultralight p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-brand-blue-deep mb-2">Propósito Claro</h4>
                  <p className="text-brand-gray-pro">
                    Después de los 60, es el momento perfecto para vivir con un propósito más claro y significativo.
                  </p>
                </div>
                <div className="bg-brand-blue-ultralight p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-brand-blue-deep mb-2">Servicio a Otros</h4>
                  <p className="text-brand-gray-pro">
                    Mi mayor satisfacción viene de ver a otros descubrir su potencial y vivir plenamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Llamada a la Acción */}
            <div className="text-center bg-gradient-wisdom-ascendant text-brand-white-pure p-8 rounded-lg">
              <h3 className="text-2xl font-serif-display font-bold mb-4">
                ¿Listo para escribir tu próximo capítulo?
              </h3>
              <p className="text-lg mb-6">
                Si mi historia resuena contigo y sientes que es momento de transformar tu vida, 
                me encantaría acompañarte en este viaje.
              </p>
              <Link href="/contacto">
                <Button variant="primary">Agenda una Conversación</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}