import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react';
import ContactForm from './ContactForm';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Agenda tu Sesión Gratuita",
  description: "Contacta a José Luis Arellano para agendar tu sesión de descubrimiento gratuita. Formulario de contacto, teléfono y email. Ciudad de México, sesiones presenciales y virtuales.",
  keywords: ["contacto", "sesión gratuita", "agendar cita", "coaching Ciudad de México", "consulta gratuita", "formulario contacto"],
  openGraph: {
    title: "Contacto - José Luis Arellano, The Coach",
    description: "Agenda tu sesión de descubrimiento gratuita. Contacta para comenzar tu transformación personal después de los 60.",
  },
};

export default function Contacto() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-wisdom-ascendant text-brand-white-pure py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif-display font-bold mb-4">
            Comencemos esta Conversación
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            El primer paso hacia tu renovación personal es tan simple como una conversación
          </p>
        </div>
      </section>

      {/* Información de Contacto y Formulario */}
      <section className="py-16 bg-brand-white-pure">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Información de Contacto */}
            <div>
              <h2 className="text-3xl font-serif-display font-bold text-brand-blue-deep mb-6">
                Conectemos
              </h2>
              <p className="text-lg text-brand-gray-pro mb-8">
                Estoy aquí para escucharte y acompañarte. Ya sea que tengas preguntas sobre mis servicios 
                o simplemente quieras explorar si el coaching es para ti, no dudes en contactarme.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-brand-gold-warm mt-1" />
                  <div>
                    <h3 className="font-bold text-brand-blue-deep">Email</h3>
                    <a href="mailto:jlarellano@jlathecoach.com" className="text-brand-gray-pro hover:text-brand-gold-warm">
                      jlarellano@jlathecoach.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-gold-warm mt-1" />
                  <div>
                    <h3 className="font-bold text-brand-blue-deep">Teléfono</h3>
                    <a href="tel:+525555555555" className="text-brand-gray-pro hover:text-brand-gold-warm">
                      +52 (55) 5555-5555
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-gold-warm mt-1" />
                  <div>
                    <h3 className="font-bold text-brand-blue-deep">Ubicación</h3>
                    <p className="text-brand-gray-pro">Ciudad de México, México</p>
                    <p className="text-sm text-brand-gray-pro">Sesiones presenciales y virtuales disponibles</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-gold-warm mt-1" />
                  <div>
                    <h3 className="font-bold text-brand-blue-deep">Horario de Atención</h3>
                    <p className="text-brand-gray-pro">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-brand-gray-pro">Tiempo de México (GMT-6)</p>
                  </div>
                </div>
              </div>

              {/* Sesión Gratuita */}
              <div className="bg-brand-blue-ultralight p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-brand-gold-warm mt-1" />
                  <div>
                    <h3 className="font-bold text-brand-blue-deep mb-2">Sesión de Descubrimiento Gratuita</h3>
                    <p className="text-brand-gray-pro mb-3">
                      Ofrezco una sesión inicial de 30 minutos sin costo para conocernos y explorar 
                      cómo puedo ayudarte en tu viaje de transformación.
                    </p>
                    <p className="text-sm text-brand-gray-pro italic">
                      * Sin compromiso. Solo una conversación honesta sobre tus sueños y posibilidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-brand-blue-ultralight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif-display font-bold text-brand-blue-deep mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-6">
              <div className="bg-brand-white-pure p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-blue-deep mb-2">
                  ¿Cómo sé si el coaching es para mí?
                </h3>
                <p className="text-brand-gray-pro">
                  Si sientes que estás en una etapa de transición, buscas renovar tu propósito o simplemente 
                  quieres aprovechar al máximo esta nueva etapa de tu vida, el coaching puede ser una herramienta 
                  poderosa para ti. La sesión gratuita es perfecta para explorar esto juntos.
                </p>
              </div>
              <div className="bg-brand-white-pure p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-blue-deep mb-2">
                  ¿Las sesiones son presenciales o virtuales?
                </h3>
                <p className="text-brand-gray-pro">
                  Ofrezco ambas modalidades. Las sesiones virtuales se realizan por videollamada, lo que permite 
                  trabajar con clientes de cualquier parte del mundo. Las sesiones presenciales están disponibles 
                  en Ciudad de México.
                </p>
              </div>
              <div className="bg-brand-white-pure p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-brand-blue-deep mb-2">
                  ¿Cuánto tiempo dura un proceso de coaching?
                </h3>
                <p className="text-brand-gray-pro">
                  Cada proceso es único y depende de tus objetivos específicos. Algunos clientes ven resultados 
                  significativos en 3-4 meses, mientras otros prefieren un acompañamiento más prolongado. 
                  Lo definimos juntos según tus necesidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}