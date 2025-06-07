import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard"; // Crearemos este componente después
import { BarChart, Mic, Users } from "lucide-react"; // Asumiendo lucide-react instalado
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section - NUEVO ESTILO */}
      <section className="relative h-screen flex items-center justify-center text-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop')" }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-blue-deep/70 z-10"></div>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 text-brand-white-pure">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Nunca es tarde para ser quien viniste a ser… y vivir lo que siempre soñaste
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-sans-body">
            Soy José Luis Arellano, "The Coach", y acompaño a mayores de 60 a aprovechar sus experiencias de vida para renovar sus expectativas, reconectar con su propósito y lograr sus sueños.
          </p>
          <Link href="/servicios">
            <Button variant="primary" className="text-lg px-8 py-3">Descubre Cómo</Button>
          </Link>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Servicios */}
      <section className="py-20 bg-brand-blue-deep">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Mic size={40} className="text-brand-gold-warm" />}
              title="Conferencias Motivacionales"
              description="Presentaciones inspiradoras y prácticas para grupos corporativos sobre temas como 'La vida no se acaba a los 60'."
            />
            <ServiceCard
              icon={<BarChart size={40} className="text-brand-gold-warm" />}
              title="Cursos para el Área Comercial"
              description="Programas intensivos como 'Estrategias de Venta Resiliente' para prosperar en tiempos difíciles."
            />
            <ServiceCard
              icon={<Users size={40} className="text-brand-gold-warm" />}
              title="Coaching Ejecutivo y Personal"
              description="Acompañamiento personalizado para ejecutivos y profesionales que buscan renovar su propósito."
            />
          </div>
        </div>
      </section>
    </>
  );
}