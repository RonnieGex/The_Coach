import { Button } from "@/components/ui/Button";
import { PremiumBackgrounds, PremiumOverlays } from "@/components/ui/PremiumBackgrounds";
import Link from "next/link";
import Image from "next/image";
import { Users, User, Mic, Building } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conferencias y Programas Maxwell - Transformación de Crisis en Oportunidades",
  description: "Conferencista certificado John C. Maxwell. Especialización en conferencias de manejo de crisis, liderazgo transformacional y programas ejecutivos para líderes mayores de 60.",
  keywords: ["conferencias Maxwell", "manejo de crisis", "liderazgo transformacional", "conferencista internacional", "coaching ejecutivo", "John C Maxwell"],
  openGraph: {
    title: "Servicios de Coaching - José Luis Arellano",
    description: "Servicios especializados en coaching para mayores de 60: sesiones individuales, talleres grupales y programas empresariales.",
  },
};

export default function Servicios() {
  const servicios = [
    {
      id: "sesiones-individuales",
      icon: <User className="w-12 h-12 text-brand-gold-warm" />,
      titulo: "Sesiones Individuales de Coaching",
      descripcion: "Acompañamiento personalizado 1:1 para tu transformación personal y profesional",
      caracteristicas: [
        "Sesiones de 60-90 minutos",
        "Plan de acción personalizado",
        "Seguimiento continuo entre sesiones",
        "Herramientas y ejercicios prácticos"
      ],
      precio: "Desde $2,500 MXN por sesión"
    },
    {
      id: "talleres-grupales",
      icon: <Users className="w-12 h-12 text-brand-gold-warm" />,
      titulo: "Talleres Grupales",
      descripcion: "Experiencias transformadoras en grupo para mayores de 60 años",
      caracteristicas: [
        "Grupos de 8-12 personas",
        "Sesiones semanales de 2 horas",
        "Duración: 8 semanas",
        "Comunidad de apoyo continuo"
      ],
      precio: "Desde $8,000 MXN por programa completo"
    },
    {
      id: "conferencias",
      icon: <Mic className="w-12 h-12 text-brand-gold-warm" />,
      titulo: "Conferencias Inspiracionales",
      descripcion: "Charlas motivacionales sobre renovación personal y liderazgo después de los 60",
      caracteristicas: [
        "Duración: 60-90 minutos",
        "Formato presencial o virtual",
        "Material de apoyo incluido",
        "Sesión de Q&A"
      ],
      precio: "Cotización personalizada"
    },
    {
      id: "programas-empresariales",
      icon: <Building className="w-12 h-12 text-brand-gold-warm" />,
      titulo: "Programas Empresariales",
      descripcion: "Coaching ejecutivo y programas de transición para profesionales senior",
      caracteristicas: [
        "Programas a medida",
        "Coaching para pre-jubilación",
        "Desarrollo de mentores internos",
        "Workshops de liderazgo senior"
      ],
      precio: "Cotización según necesidades"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="text-brand-white-pure py-16 md:py-24 relative overflow-hidden">
        {/* Sunrise Transformation Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/sunrise-transformation.jpg"
            alt="Transformation Background"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-orange-900/30 to-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif-display font-bold mb-4">
            Conferencias y Programas de Transformación
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Programas certificados Maxwell y conferencias especializadas en transformación de crisis para líderes que buscan reinventarse
          </p>
        </div>
      </section>

      {/* Introducción a los Servicios */}
      <section className="py-12 bg-brand-white-pure">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif-display font-bold text-brand-blue-deep mb-6">
              Metodología Maxwell Certificada
            </h2>
            <p className="text-lg text-brand-gray-pro">
              Como conferencista certificado John C. Maxwell, cada programa combina metodologías probadas internacionalmente con mi experiencia única transformando crisis corporativas en trampolines de crecimiento. Mi especialización: convertir los momentos más difíciles en las oportunidades más extraordinarias.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-12 bg-brand-blue-ultralight">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {servicios.map((servicio) => (
              <div 
                key={servicio.id} 
                id={servicio.id}
                className="bg-brand-white-pure rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {servicio.icon}
                </div>
                <h3 className="text-2xl font-serif-display font-bold text-brand-blue-deep mb-4 text-center">
                  {servicio.titulo}
                </h3>
                <p className="text-brand-gray-pro mb-6 text-center">
                  {servicio.descripcion}
                </p>
                <ul className="space-y-2 mb-6">
                  {servicio.caracteristicas.map((caracteristica, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-gold-warm mr-2">✓</span>
                      <span className="text-brand-gray-pro">{caracteristica}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <p className="text-lg font-bold text-brand-blue-deep mb-4">
                    {servicio.precio}
                  </p>
                  <Link href="/contacto">
                    <Button variant="ghost">Más Información</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Proceso */}
      <section className="py-16 bg-brand-white-pure">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif-display font-bold text-brand-blue-deep mb-8 text-center">
              Mi Proceso de Trabajo
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold-warm text-brand-white-pure rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-brand-blue-deep mb-2">Conversación Inicial</h3>
                <p className="text-brand-gray-pro">
                  Sesión gratuita de 30 minutos para conocernos y explorar cómo puedo ayudarte
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold-warm text-brand-white-pure rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-brand-blue-deep mb-2">Plan Personalizado</h3>
                <p className="text-brand-gray-pro">
                  Diseñamos juntos un plan de acción adaptado a tus objetivos y circunstancias
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold-warm text-brand-white-pure rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-brand-blue-deep mb-2">Transformación</h3>
                <p className="text-brand-gray-pro">
                  Te acompaño paso a paso en tu viaje hacia una vida más plena y significativa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-natural-renewal text-brand-white-pure">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif-display font-bold mb-6">
            ¿Listo para Comenzar tu Transformación?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            No importa qué servicio elijas, mi compromiso es el mismo: acompañarte en el descubrimiento 
            de que después de los 60, ¡viene lo mejor de la vida!
          </p>
          <Link href="/contacto">
            <Button variant="primary" className="text-lg px-8 py-3">
              Agenda tu Sesión Gratuita
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
