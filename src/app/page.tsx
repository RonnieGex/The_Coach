'use client';

import { Button } from "@/components/ui/Button";
import ModernButton from "@/components/ui/ModernButton";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedText, { GlowingText } from "@/components/ui/AnimatedText";
import FloatingElements, { GeometricShapes } from "@/components/ui/FloatingElements";
import { PremiumBackgrounds, PremiumOverlays } from "@/components/ui/PremiumBackgrounds";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Zap, Star, ArrowRight, Play } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section Modernizado */}
      <section className={`relative min-h-screen ${PremiumBackgrounds.executiveMidnight} text-brand-white-pure overflow-hidden`}>
        {/* Professional Overlay */}
        <div className={`absolute inset-0 ${PremiumOverlays.darkProfessional}`} />
        {/* Elementos flotantes de fondo */}
        <FloatingElements count={8} />
        <GeometricShapes />
        
        {/* Gradiente overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Hero Content with Photo */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Content Left */}
              <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6"
            >
              <GlassCard className="px-6 py-3 inline-block" blur="sm" opacity="low">
                <span className="text-secondary-400 font-semibold text-sm">
                  ✨ Certificado John C. Maxwell • Conferencista Internacional
                </span>
              </GlassCard>
            </motion.div>

            {/* Título principal con efecto */}
            <AnimatedText 
              variant="slide" 
              delay={0.3}
              className="text-5xl md:text-7xl font-serif-display font-bold leading-tight mb-6"
              stagger={true}
            >
              <GlowingText intensity="medium">
                Nunca es tarde para ser quien viniste a ser
              </GlowingText>
            </AnimatedText>

            {/* Subtítulo */}
            <AnimatedText 
              variant="fade" 
              delay={0.8}
              className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-brand-white-pure/90 leading-relaxed"
            >
              Conferencista certificado John C. Maxwell especializado en transformación de crisis en oportunidades. Ayudo a líderes y profesionales a reinventarse después de los 60, convirtiendo décadas de experiencia en su mayor ventaja competitiva.
            </AnimatedText>

                {/* Frase destacada */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-10"
            >
              <GlassCard className="inline-block px-8 py-4" blur="md" opacity="medium">
                <span className="text-2xl md:text-3xl font-bold text-secondary-400">
                  "¡No viene el Ocaso, viene lo Mejor de la Vida!"
                </span>
              </GlassCard>
                </motion.div>

                {/* Botones de acción */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/servicios">
                <ModernButton 
                  variant="primary" 
                  size="lg" 
                  glow={true}
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Descubre Cómo Transformarte
                </ModernButton>
              </Link>
              
              <Link href="/quien-soy">
                <ModernButton 
                  variant="glass" 
                  size="lg"
                  icon={<Play className="w-5 h-5" />}
                >
                  Ver mi Historia
                </ModernButton>
              </Link>
                </motion.div>
              </div>

              {/* Professional Photo Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Main Photo Container */}
                  <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent z-10" />
                    <Image
                      src="/images/jose-luis-hero.jpg"
                      alt="José Luis Arellano - Conferencista Internacional"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                  
                  {/* Maxwell Certification Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-secondary-200"
                  >
                    <Image
                      src="/images/maxwell-certification.png"
                      alt="John C. Maxwell Certification"
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Corporate Logos Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-center mb-16"
            >
              <p className="text-brand-white-pure/70 text-sm mb-6 uppercase tracking-widest">
                Experiencia Ejecutiva Comprobada
              </p>
              <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
                <div className="relative w-24 h-12">
                  <Image
                    src="/images/logo-pg.png"
                    alt="Procter & Gamble"
                    fill
                    className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="relative w-24 h-12">
                  <Image
                    src="/images/logo-bic.png"
                    alt="BIC"
                    fill
                    className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="relative w-24 h-12">
                  <Image
                    src="/images/logo-duracell.png"
                    alt="Duracell"
                    fill
                    className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </motion.div>

            {/* Estadísticas */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
              >
              {[
                { number: "Maxwell", label: "Certificación Oficial" },
                { number: "40+", label: "Años Liderando" },
                { number: "Crisis", label: "en Oportunidades" },
              ].map((stat, index) => (
                <GlassCard key={index} className="p-6 text-center" delay={index * 0.1}>
                  <div className="text-3xl font-bold text-secondary-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-brand-white-pure/80">{stat.label}</div>
                </GlassCard>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-brand-white-pure/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-brand-white-pure/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Sección de Introducción Modernizada */}
      <section className={`py-20 ${PremiumBackgrounds.maxwellGold} relative overflow-hidden`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText 
              variant="slide" 
              className="text-4xl md:text-5xl font-serif-display font-bold text-primary-900 mb-6"
            >
              Conoce a José Luis Arellano
            </AnimatedText>
            
            <AnimatedText 
              variant="fade" 
              delay={0.3}
              className="text-xl text-neutral-600 mb-8 leading-relaxed"
            >
              Desde liderar equipos en multinacionales como Procter & Gamble hasta superar mi propia crisis de propósito a los 50, he desarrollado un método único: transformar crisis profesionales y personales en trampolines hacia una vida extraordinaria después de los 60.
            </AnimatedText>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/quien-soy">
                <ModernButton 
                  variant="secondary" 
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Leer mi Historia Completa
                </ModernButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios Modernizada */}
      <section className={`py-20 ${PremiumBackgrounds.successEmerald} relative overflow-hidden`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedText 
              variant="slide" 
              className="text-4xl md:text-5xl font-serif-display font-bold text-primary-900 mb-4 text-center"
            >
              ¿Por qué elegir coaching después de los 60?
            </AnimatedText>
            
            <AnimatedText 
              variant="fade" 
              delay={0.3}
              className="text-xl text-neutral-600 mb-16 text-center max-w-3xl mx-auto"
            >
              Descubre cómo tu experiencia de vida se convierte en tu mayor fortaleza
            </AnimatedText>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Propósito Renovado",
                  description: "Descubre qué realmente importa en esta nueva etapa y vive alineado con tus valores más profundos.",
                  delay: 0,
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Energía Renovada", 
                  description: "Transforma la experiencia acumulada en combustible para nuevos proyectos y sueños.",
                  delay: 0.2,
                },
                {
                  icon: <Star className="w-8 h-8" />,
                  title: "Legado Significativo",
                  description: "Crea un impacto duradero compartiendo tu sabiduría y contribuyendo al mundo.",
                  delay: 0.4,
                },
              ].map((benefit, index) => (
                <GlassCard 
                  key={index} 
                  className="p-8 text-center hover:scale-105 transition-transform duration-300" 
                  delay={benefit.delay}
                  hover={true}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: benefit.delay + 0.2 }}
                    className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg"
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${PremiumBackgrounds.wisdomSapphire} text-brand-white-pure relative overflow-hidden`}>
        <div className={`absolute inset-0 ${PremiumOverlays.darkProfessional}`} />
        <FloatingElements count={4} />
        
        <div className="relative z-10 container mx-auto px-6">
          <AnimatedText 
            variant="slide" 
            className="text-4xl md:text-5xl font-serif-display font-bold text-center mb-4"
          >
            <GlowingText intensity="medium">
              Transformaciones Reales
            </GlowingText>
          </AnimatedText>
          
          <AnimatedText 
            variant="fade" 
            delay={0.3}
            className="text-xl text-center mb-16 max-w-3xl mx-auto text-brand-white-pure/90"
          >
            Líderes y ejecutivos que han transformado sus crisis en las oportunidades más extraordinarias de sus vidas
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonio 1 - CEO */}
            <GlassCard className="p-8 text-center" delay={0.2} hover={true}>
              {/* CEO Photo */}
              <div className="relative w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden">
                <Image
                  src="/images/testimonio-ceo.png"
                  alt="Carlos Mendoza - CEO"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              
              <p className="text-brand-white-pure/90 italic mb-6 leading-relaxed">
                "A mis 62 años, después de la crisis más grande de mi empresa, José Luis me ayudó a ver que no era el final, sino el comienzo de mi mejor capítulo como líder."
              </p>
              
              <div className="border-t border-white/20 pt-4">
                <h4 className="font-bold text-secondary-400">Carlos Mendoza</h4>
                <p className="text-sm text-brand-white-pure/70">CEO, Grupo Industrial</p>
                <p className="text-xs text-brand-white-pure/50">65 años</p>
              </div>
            </GlassCard>

            {/* Testimonio 2 - Ejecutiva */}
            <GlassCard className="p-8 text-center" delay={0.4} hover={true}>
              {/* Executive Photo */}
              <div className="relative w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden">
                <Image
                  src="/images/testimonio-ejecutiva.png"
                  alt="María González - Ejecutiva"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              
              <p className="text-brand-white-pure/90 italic mb-6 leading-relaxed">
                "Su metodología Maxwell no solo me preparó para mi jubilación, me preparó para una nueva vida. Ahora soy mentora de jóvenes ejecutivas y nunca he sido más feliz."
              </p>
              
              <div className="border-t border-white/20 pt-4">
                <h4 className="font-bold text-secondary-400">María González</h4>
                <p className="text-sm text-brand-white-pure/70">Ex-Directora, Multinacional</p>
                <p className="text-xs text-brand-white-pure/50">61 años</p>
              </div>
            </GlassCard>

            {/* Testimonio 3 - Empresario */}
            <GlassCard className="p-8 text-center" delay={0.6} hover={true}>
              {/* Entrepreneur Photo */}
              <div className="relative w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden">
                <Image
                  src="/images/testimonio-empresario.png"
                  alt="Roberto Silva - Empresario"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              
              <p className="text-brand-white-pure/90 italic mb-6 leading-relaxed">
                "Pensé que después de vender mi empresa todo había terminado. José Luis me mostró que era el momento perfecto para comenzar mi legado más importante."
              </p>
              
              <div className="border-t border-white/20 pt-4">
                <h4 className="font-bold text-secondary-400">Roberto Silva</h4>
                <p className="text-sm text-brand-white-pure/70">Empresario Serial</p>
                <p className="text-xs text-brand-white-pure/50">68 años</p>
              </div>
            </GlassCard>
          </div>

          {/* Results Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-secondary-400 mb-2">95%</div>
                <div className="text-sm text-brand-white-pure/80">Reportan Mayor Propósito</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary-400 mb-2">87%</div>
                <div className="text-sm text-brand-white-pure/80">Inician Nuevos Proyectos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary-400 mb-2">92%</div>
                <div className="text-sm text-brand-white-pure/80">Recomiendan el Proceso</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Final Modernizado */}
      <section className={`py-20 ${PremiumBackgrounds.royalAuthority} text-brand-white-pure relative overflow-hidden`}>
        <div className={`absolute inset-0 ${PremiumOverlays.darkProfessional}`} />
        <FloatingElements count={6} />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedText 
            variant="scale" 
            className="text-4xl md:text-5xl font-serif-display font-bold mb-6"
          >
            <GlowingText intensity="high">
              Tu Mejor Capítulo Está Por Comenzar
            </GlowingText>
          </AnimatedText>
          
          <AnimatedText 
            variant="fade" 
            delay={0.5}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            No dejes que la edad sea una limitación. Conviértela en tu mayor fortaleza y comienza la transformación que siempre soñaste.
          </AnimatedText>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contacto">
              <ModernButton 
                variant="primary" 
                size="lg" 
                glow={true}
                icon={<ArrowRight className="w-6 h-6" />}
                className="text-xl px-10 py-4"
              >
                Comienza tu Transformación
              </ModernButton>
            </Link>
            
            <Link href="/servicios">
              <ModernButton 
                variant="glass" 
                size="lg"
                className="text-xl px-10 py-4"
              >
                Ver Todos los Servicios
              </ModernButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}