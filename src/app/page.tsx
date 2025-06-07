'use client';

import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import ModernButton from "@/components/ui/ModernButton";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedText, { GlowingText } from "@/components/ui/AnimatedText";
import FloatingElements, { GeometricShapes } from "@/components/ui/FloatingElements";
import { BarChart, Mic, Users, Target, Zap, Star, ArrowRight, Play, CheckCircle, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero Section Profesional */}
      <section className="relative min-h-screen text-brand-white-pure overflow-hidden">
        {/* Background con gradiente profesional */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
          <div className="absolute inset-0 bg-[url('/images/backgrounds/executive-midnight.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
        
        <FloatingElements count={6} />
        <GeometricShapes />
        
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content Left */}
              <div className="text-center lg:text-left">
                {/* Badge profesional */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="inline-block mb-8"
                >
                  <div className="bg-black/40 backdrop-blur-lg border border-secondary-400/30 rounded-full px-8 py-4 inline-block shadow-2xl">
                    <span className="text-secondary-300 font-bold text-base drop-shadow-sm">
                      ⭐ Certified John C. Maxwell Coach ⭐
                    </span>
                  </div>
                </motion.div>

                {/* Título principal mejorado */}
                <AnimatedText 
                  variant="slide" 
                  delay={0.3}
                  className="text-5xl md:text-7xl font-serif-display font-bold leading-tight mb-8 drop-shadow-xl"
                  stagger={true}
                >
                  <GlowingText intensity="high">
                    Transforming Crisis into Your Greatest Opportunity
                  </GlowingText>
                </AnimatedText>

                {/* Subtítulo profesional */}
                <AnimatedText 
                  variant="fade" 
                  delay={0.8}
                  className="text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 mb-8 text-white/95 leading-relaxed drop-shadow-lg"
                >
                  Executive leadership coach specializing in helping professionals 60+ turn decades of experience into their competitive advantage.
                </AnimatedText>

                {/* Stats rápidas */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-300">40+</div>
                    <div className="text-sm text-white/80">Years Leading</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-300">500+</div>
                    <div className="text-sm text-white/80">Executives Coached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-300">95%</div>
                    <div className="text-sm text-white/80">Success Rate</div>
                  </div>
                </motion.div>

                {/* CTAs principales */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link href="/contacto">
                    <ModernButton 
                      variant="primary" 
                      size="lg" 
                      icon={<ArrowRight className="w-5 h-5" />}
                      className="text-lg px-10 py-4"
                    >
                      Book Strategy Session
                    </ModernButton>
                  </Link>
                  
                  <Link href="/servicios">
                    <ModernButton 
                      variant="secondary" 
                      size="lg"
                      icon={<Play className="w-5 h-5" />}
                      className="text-lg px-10 py-4"
                    >
                      Explore Services
                    </ModernButton>
                  </Link>
                </motion.div>
              </div>

              {/* Professional Photo Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex justify-center lg:justify-end relative"
              >
                {/* Main Photo Container */}
                <div className="relative">
                  <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent z-10" />
                    <Image
                      src="/images/jose-luis-hero.jpg"
                      alt="José Luis Arellano - Executive Leadership Coach"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                  </div>
                  
                  {/* Corporate Experience Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-900 mb-1">P&G</div>
                      <div className="text-sm text-gray-600">Executive Alumni</div>
                    </div>
                  </motion.div>
                  
                  {/* Maxwell Certification */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                    className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100"
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
          </div>
        </div>
      </section>

      {/* Services Section con diseño profesional */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header de sección */}
            <div className="text-center mb-16">
              <AnimatedText 
                variant="slide" 
                className="text-4xl md:text-5xl font-serif-display font-bold text-primary-900 mb-6"
              >
                Executive Coaching Services
              </AnimatedText>
              
              <AnimatedText 
                variant="fade" 
                delay={0.3}
                className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed"
              >
                Specialized programs designed for executives and professionals ready to transform their experience into extraordinary results.
              </AnimatedText>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                  <Mic className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">Keynote Speaking</h3>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Inspiring presentations for corporate groups on transformational leadership and turning setbacks into comebacks.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500" />
                    <span className="text-sm text-neutral-600">Corporate Events</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500" />
                    <span className="text-sm text-neutral-600">Leadership Conferences</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500" />
                    <span className="text-sm text-neutral-600">Team Building Events</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                  <BarChart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">Sales Training</h3>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Intensive programs like 'Resilient Sales Strategies' for teams to thrive in challenging times.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500" />
                    <span className="text-sm text-neutral-600">Advanced Techniques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500" />
                    <span className="text-sm text-neutral-600">Resilience Building</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500" />
                    <span className="text-sm text-neutral-600">Performance Metrics</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">Executive Coaching</h3>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Personalized coaching for executives and professionals seeking to renew their purpose and achieve their goals.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500" />
                    <span className="text-sm text-neutral-600">1-on-1 Sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500" />
                    <span className="text-sm text-neutral-600">Goal Achievement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500" />
                    <span className="text-sm text-neutral-600">Leadership Development</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA de servicios */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <Link href="/servicios">
                <ModernButton 
                  variant="primary" 
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="text-lg px-10 py-4"
                >
                  View All Services
                </ModernButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section Mejorada */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-brand-white-pure relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-testimonials.jpg')] bg-cover bg-center opacity-10" />
        <FloatingElements count={4} />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <AnimatedText 
                variant="slide" 
                className="text-4xl md:text-5xl font-serif-display font-bold mb-6"
              >
                <GlowingText intensity="medium">
                  Success Stories
                </GlowingText>
              </AnimatedText>
              
              <AnimatedText 
                variant="fade" 
                delay={0.3}
                className="text-xl max-w-3xl mx-auto text-brand-white-pure/90 leading-relaxed"
              >
                Leaders and executives who have transformed their biggest challenges into their greatest opportunities
              </AnimatedText>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Testimonio 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-secondary-400 mb-4" />
                <p className="text-brand-white-pure/90 italic mb-6 leading-relaxed">
                  "At 62, after the biggest crisis in my company, José Luis helped me see it wasn't the end, but the beginning of my best chapter as a leader."
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/testimonio-ceo.png"
                      alt="Carlos Mendoza - CEO"
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-400">Carlos Mendoza</h4>
                    <p className="text-sm text-brand-white-pure/70">CEO, Industrial Group</p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonio 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-secondary-400 mb-4" />
                <p className="text-brand-white-pure/90 italic mb-6 leading-relaxed">
                  "His Maxwell methodology didn't just prepare me for retirement, it prepared me for a new life. Now I mentor young executives and I've never been happier."
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/testimonio-ejecutiva.png"
                      alt="María González - Executive"
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-400">María González</h4>
                    <p className="text-sm text-brand-white-pure/70">Former Director, Multinational</p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonio 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 md:col-span-2 lg:col-span-1"
              >
                <Quote className="w-8 h-8 text-secondary-400 mb-4" />
                <p className="text-brand-white-pure/90 italic mb-6 leading-relaxed">
                  "I thought after selling my company everything was over. José Luis showed me it was the perfect time to start my most important legacy."
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/testimonio-empresario.png"
                      alt="Roberto Silva - Entrepreneur"
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-400">Roberto Silva</h4>
                    <p className="text-sm text-brand-white-pure/70">Serial Entrepreneur</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Results Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <div className="text-4xl font-bold text-secondary-400 mb-2">95%</div>
                <div className="text-sm text-brand-white-pure/80">Report Greater Purpose</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <div className="text-4xl font-bold text-secondary-400 mb-2">87%</div>
                <div className="text-sm text-brand-white-pure/80">Start New Projects</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <div className="text-4xl font-bold text-secondary-400 mb-2">92%</div>
                <div className="text-sm text-brand-white-pure/80">Recommend Process</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-brand-white-pure relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-cta.jpg')] bg-cover bg-center opacity-10" />
        <FloatingElements count={6} />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <AnimatedText 
              variant="scale" 
              className="text-4xl md:text-6xl font-serif-display font-bold mb-8"
            >
              <GlowingText intensity="high">
                Your Best Chapter Starts Now
              </GlowingText>
            </AnimatedText>
            
            <AnimatedText 
              variant="fade" 
              delay={0.5}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Don't let age be a limitation. Turn it into your greatest strength and begin the transformation you've always dreamed of.
            </AnimatedText>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/contacto">
                <ModernButton 
                  variant="primary" 
                  size="lg" 
                  icon={<ArrowRight className="w-6 h-6" />}
                  className="text-xl px-12 py-5"
                >
                  Start Your Transformation
                </ModernButton>
              </Link>
              
              <Link href="/servicios">
                <ModernButton 
                  variant="secondary" 
                  size="lg"
                  className="text-xl px-12 py-5"
                >
                  Explore All Services
                </ModernButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
