'use client';

import { Button } from "@/components/ui/Button";
import ModernButton from "@/components/ui/ModernButton";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedText, { GlowingText } from "@/components/ui/AnimatedText";
import FloatingElements, { GeometricShapes } from "@/components/ui/FloatingElements";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Zap, Star, ArrowRight, Play } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section Modernizado */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-600 text-brand-white-pure overflow-hidden">
        {/* Elementos flotantes de fondo */}
        <FloatingElements count={8} />
        <GeometricShapes />
        
        {/* Gradiente overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6"
            >
              <GlassCard className="px-6 py-3 inline-block" blur="sm" opacity="low">
                <span className="text-secondary-400 font-semibold text-sm">
                  ✨ Coaching especializado para mayores de 60 años
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
              Soy José Luis Arellano, "The Coach", y acompaño a mayores de 60 a aprovechar sus experiencias de vida para renovar sus expectativas, reconectar con su propósito y lograr sus sueños...
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

            {/* Estadísticas */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              {[
                { number: "15+", label: "Años de Experiencia" },
                { number: "200+", label: "Vidas Transformadas" },
                { number: "98%", label: "Satisfacción de Clientes" },
              ].map((stat, index) => (
                <GlassCard key={index} className="p-6 text-center" delay={index * 0.1}>
                  <div className="text-3xl font-bold text-secondary-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-brand-white-pure/80">{stat.label}</div>
                </GlassCard>
              ))}
            </motion.div>
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
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-neutral-100 relative overflow-hidden">
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
              Con una trayectoria que abarca desde el campeonato nacional de natación hasta roles directivos en Procter & Gamble, Bic y Duracell, he transformado décadas de experiencia y superación personal en un método único para guiar a profesionales y ejecutivos hacia nuevos comienzos plenos y significativos.
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
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
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

      {/* Call to Action Final Modernizado */}
      <section className="py-20 bg-gradient-to-r from-accent-600 via-primary-800 to-secondary-600 text-brand-white-pure relative overflow-hidden">
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