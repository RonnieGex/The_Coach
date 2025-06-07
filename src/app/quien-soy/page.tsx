import { Button } from "@/components/ui/Button";
import { PremiumBackgrounds, PremiumOverlays } from "@/components/ui/PremiumBackgrounds";
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
      <section className="text-brand-white-pure py-16 md:py-24 relative overflow-hidden">
        {/* Ocean Depth Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/ocean-depth.jpg"
            alt="Ocean Depth Background"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
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
          <div className="max-w-6xl mx-auto">
            {/* Professional Layout with Photo */}
            <div className="grid lg:grid-cols-3 gap-12 mb-12">
              {/* Professional Photo */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  {/* Main Professional Photo */}
                  <div className="relative w-full max-w-sm mx-auto">
                    <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/jose-luis-about.jpg"
                        alt="José Luis Arellano - Conferencista y Coach"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 384px"
                      />
                    </div>
                    
                    {/* Maxwell Certification */}
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border">
                      <Image
                        src="/images/maxwell-certification.png"
                        alt="John C. Maxwell Certification"
                        width={64}
                        height={64}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  
                  {/* Corporate Credentials */}
                  <div className="mt-8 space-y-4">
                    <h4 className="text-sm font-bold text-brand-blue-deep text-center mb-4">Experiencia Corporativa</h4>
                    <div className="flex justify-center gap-3 flex-wrap">
                      <div className="w-16 h-8 bg-brand-blue-ultralight rounded flex items-center justify-center">
                        <span className="text-xs text-brand-blue-deep font-semibold">P&G</span>
                      </div>
                      <div className="w-16 h-8 bg-brand-blue-ultralight rounded flex items-center justify-center">
                        <span className="text-xs text-brand-blue-deep font-semibold">BIC</span>
                      </div>
                      <div className="w-20 h-8 bg-brand-blue-ultralight rounded flex items-center justify-center">
                        <span className="text-xs text-brand-blue-deep font-semibold">Duracell</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:col-span-2">
                {/* Introducción */}
                <div className="mb-12">
              <h2 className="text-3xl font-serif-display font-bold text-brand-blue-deep mb-6">
                José Luis Arellano - Conferencista Certificado Maxwell
              </h2>
              <div className="bg-brand-gold-warm/10 p-6 rounded-lg mb-6 border-l-4 border-brand-gold-warm">
                <h3 className="text-xl font-bold text-brand-blue-deep mb-2">Certificación John C. Maxwell</h3>
                <p className="text-brand-gray-pro">
                  Conferencista oficial certificado por el equipo de John C. Maxwell, especializado en liderazgo transformacional y desarrollo de equipos de alto rendimiento.
                </p>
              </div>
              <p className="text-lg mb-4 text-brand-gray-pro">
                Mi misión como conferencista es simple pero poderosa: demostrar que las crisis más profundas pueden convertirse en los trampolines más extraordinarios. A mis 65 años, no solo enseño esta filosofía, la vivo cada día.
              </p>
              <p className="text-lg mb-4 text-brand-gray-pro">
                Desde ejecutivo corporativo hasta conferencista internacional, mi transformación personal a los 50 se ha convertido en el testimonio viviente de que después de los 60, realmente viene lo mejor de la vida.
              </p>
            </div>

            {/* Trayectoria Profesional */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif-display font-bold text-brand-blue-deep mb-4">
                Mi Expertise en Transformación de Crisis
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-brand-gold-warm pl-6">
                  <h4 className="text-xl font-bold text-brand-blue-deep">Líder Corporativo de Alto Rendimiento</h4>
                  <p className="text-brand-gray-pro">
                    40+ años liderando equipos en multinacionales como Procter & Gamble (1983-1993), Bic y Duracell. Especialista en transformación organizacional y gestión de crisis empresariales.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold-warm pl-6">
                  <h4 className="text-xl font-bold text-brand-blue-deep">Atleta de Élite y Mentalidad Ganadora</h4>
                  <p className="text-brand-gray-pro">
                    Campeón nacional de natación. La disciplina del deporte de alto rendimiento forjó la mentalidad que hoy aplico para ayudar a otros a superar sus límites y redefinir lo posible.
                  </p>
                </div>
                <div className="border-l-4 border-brand-gold-warm pl-6">
                  <h4 className="text-xl font-bold text-brand-blue-deep">Especialista en Conferencias de Crisis</h4>
                  <p className="text-brand-gray-pro">
                    Conferencista especializado en manejo de crisis personal y profesional, ayudando a organizaciones y líderes a navegar momentos de incertidumbre y transformarlos en oportunidades de crecimiento.
                  </p>
                </div>
              </div>
            </div>

            {/* Mi Transformación Personal */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif-display font-bold text-brand-blue-deep mb-4">
                La Crisis que Cambió Mi Destino
              </h3>
              <p className="text-lg mb-4 text-brand-gray-pro">
                A los 50, enfrenté mi propia crisis existencial profunda. Después de décadas de éxito corporativo, algo fundamental faltaba. Esa crisis se convirtió en el momento más transformador de mi vida.
              </p>
              <p className="text-lg mb-4 text-brand-gray-pro">
                En lugar de resignarme al "final de la carrera", decidí reinventarme completamente. Esa experiencia personal de resurrección profesional es ahora el corazón de mis conferencias y programas de transformación.
              </p>
              <p className="text-lg mb-4 text-brand-gray-pro">
                Mi historia no es única: es el testimonio viviente de que las crisis más profundas pueden ser los trampolines hacia una vida extraordinaria. Por eso me especializo en acompañar a líderes y profesionales en su propio proceso de resurrección después de los 60.
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