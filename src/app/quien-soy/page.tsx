import ModernButton from "@/components/ui/ModernButton";
import AnimatedText, { GlowingText } from "@/components/ui/AnimatedText";
import FloatingElements from "@/components/ui/FloatingElements";
import { ArrowRight, CheckCircle, Award, Briefcase, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About José Luis Arellano - Executive Leadership Coach",
  description: "Meet José Luis Arellano, certified John C. Maxwell coach specializing in executive transformation for professionals 60+. Former P&G executive with 40+ years of leadership experience.",
  keywords: ["José Luis Arellano", "executive coach", "John C. Maxwell", "leadership", "Procter & Gamble", "corporate experience"],
  openGraph: {
    title: "About José Luis Arellano - The Executive Coach", 
    description: "Discover the story of transformation from corporate executive to certified leadership coach specializing in professionals 60+.",
  },
};

export default function About() {
  return (
    <>
      {/* Hero Section Professional */}
      <section className="relative py-24 text-brand-white-pure overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
          <div className="absolute inset-0 bg-[url('/images/backgrounds/ocean-depth.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
        
        <FloatingElements count={4} />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in-down">
              <div className="inline-block bg-black/40 backdrop-blur-lg border border-secondary-400/30 rounded-full px-8 py-4 shadow-2xl">
                <span className="text-secondary-300 font-bold text-base">
                  Certified John C. Maxwell Coach
                </span>
              </div>
            </div>
            
            <AnimatedText 
              variant="slide" 
              className="text-4xl md:text-6xl font-serif-display font-bold mb-6"
            >
              <GlowingText intensity="high">
                From Crisis to Transformation
              </GlowingText>
            </AnimatedText>
            
            <AnimatedText 
              variant="fade" 
              delay={0.3}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-white/95 leading-relaxed"
            >
              A journey of executive excellence, personal transformation, and the art of turning life's biggest challenges into extraordinary opportunities.
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Professional Layout with Photo */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              {/* Professional Photo */}
              <div className="lg:order-2">
                <div className="relative animate-scale-in">
                  {/* Main Professional Photo */}
                  <div className="relative w-full max-w-lg mx-auto">
                    <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                      <Image
                        src="/images/jose-luis-about.jpg"
                        alt="José Luis Arellano - Executive Leadership Coach"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 512px"
                      />
                    </div>
                    
                    {/* Maxwell Certification Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 animate-fade-in-up animation-delay-500">
                      <div className="text-center">
                        <Image
                          src="/images/maxwell-certification.png"
                          alt="John C. Maxwell Certification"
                          width={64}
                          height={64}
                          className="rounded-lg mx-auto mb-2"
                        />
                        <div className="text-sm font-bold text-primary-900">Maxwell</div>
                        <div className="text-xs text-gray-600">Certified</div>
                      </div>
                    </div>
                    
                    {/* Experience Badge */}
                    <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 animate-fade-in-up animation-delay-600">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-900 mb-1">40+</div>
                        <div className="text-sm text-gray-600">Years</div>
                        <div className="text-xs text-gray-500">Leading</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:order-1">
                <div className="animate-slide-in-left">
                  {/* Introduction */}
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-primary-900 mb-6">
                      José Luis Arellano
                    </h2>
                    
                    <div className="bg-secondary-100 border-l-4 border-secondary-500 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
                        <Award className="w-6 h-6 text-secondary-500" />
                        Certified John C. Maxwell Coach
                      </h3>
                      <p className="text-neutral-700 leading-relaxed">
                        Official certified speaker by John C. Maxwell's team, specializing in transformational leadership and high-performance team development.
                      </p>
                    </div>
                    
                    <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                      <p>
                        My mission as an executive coach is simple yet powerful: to demonstrate that life's deepest crises can become our most extraordinary springboards. At 65, I don't just teach this philosophy—I live it every day.
                      </p>
                      
                      <p>
                        From corporate executive to international speaker, my personal transformation at 50 has become living proof that after 60, the best of life truly begins.
                      </p>
                    </div>
                  </div>

                  {/* Core Values */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover-lift">
                      <Target className="w-8 h-8 text-secondary-500 mb-4" />
                      <h4 className="text-xl font-bold text-primary-900 mb-3">Purpose-Driven</h4>
                      <p className="text-neutral-700 text-sm leading-relaxed">
                        After 60, it's the perfect time to live with a clearer and more meaningful purpose.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover-lift">
                      <Briefcase className="w-8 h-8 text-secondary-500 mb-4" />
                      <h4 className="text-xl font-bold text-primary-900 mb-3">Experience-Based</h4>
                      <p className="text-neutral-700 text-sm leading-relaxed">
                        Every lived experience is a treasure of learning that can transform into wisdom for the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Journey */}
            <div className="mb-20">
              <div className="text-center mb-16 animate-fade-in-up">
                <h3 className="text-3xl md:text-4xl font-serif-display font-bold text-primary-900 mb-6">
                  My Expertise in Crisis Transformation
                </h3>
                <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
                  Four decades of experience transforming organizational challenges into opportunities for growth and excellence.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Corporate Leadership */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift animate-fade-in-up animation-delay-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 text-white">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary-900 mb-4">Corporate Excellence</h4>
                  <p className="text-neutral-700 mb-4 leading-relaxed">
                    40+ years leading teams at multinationals like Procter & Gamble (1983-1993), Bic, and Duracell.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-neutral-600">Organizational Transformation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-neutral-600">Crisis Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-neutral-600">Team Leadership</span>
                    </div>
                  </div>
                </div>

                {/* Athletic Excellence */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift animate-fade-in-up animation-delay-400">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl flex items-center justify-center mb-6 text-white">
                    <Award className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary-900 mb-4">Athletic Mindset</h4>
                  <p className="text-neutral-700 mb-4 leading-relaxed">
                    National swimming champion. The discipline of elite sports forged the mindset I now apply to help others exceed their limits.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-neutral-600">Elite Performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-neutral-600">Mental Discipline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-neutral-600">Goal Achievement</span>
                    </div>
                  </div>
                </div>

                {/* Transformation Specialist */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift animate-fade-in-up animation-delay-600">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center mb-6 text-white">
                    <Target className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary-900 mb-4">Crisis Specialist</h4>
                  <p className="text-neutral-700 mb-4 leading-relaxed">
                    International speaker specializing in personal and professional crisis management, helping leaders navigate uncertainty.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-neutral-600">Crisis Navigation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-neutral-600">Transformation Coaching</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-neutral-600">Growth Opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Transformation Story */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-brand-white-pure rounded-3xl p-12 relative overflow-hidden animate-fade-in-up">
                <div className="absolute inset-0 bg-[url('/images/pattern-transformation.jpg')] bg-cover bg-center opacity-10" />
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-serif-display font-bold mb-8 text-center">
                    <GlowingText intensity="medium">
                      The Crisis That Changed My Destiny
                    </GlowingText>
                  </h3>
                  
                  <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
                    <p>
                      At 50, I faced my own deep existential crisis. After decades of corporate success, something fundamental was missing. That crisis became the most transformative moment of my life.
                    </p>
                    
                    <p>
                      Instead of resigning myself to the "end of my career," I decided to completely reinvent myself. That personal experience of professional resurrection is now the heart of my coaching programs and transformation methodology.
                    </p>
                    
                    <p>
                      My story isn't unique—it's living proof that life's deepest crises can be springboards to an extraordinary life. That's why I specialize in accompanying leaders and professionals in their own resurrection process after 60.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Experience Logos */}
            <div className="text-center mb-20 animate-fade-in-up">
              <h4 className="text-xl font-bold text-primary-900 mb-8">Corporate Experience</h4>
              <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
                <div className="relative w-24 h-12">
                  <Image
                    src="/images/logo-pg.png"
                    alt="Procter & Gamble"
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="relative w-24 h-12">
                  <Image
                    src="/images/logo-bic.png"
                    alt="BIC"
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="relative w-24 h-12">
                  <Image
                    src="/images/logo-duracell.png"
                    alt="Duracell"
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-brand-white-pure relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-cta.jpg')] bg-cover bg-center opacity-10" />
        <FloatingElements count={4} />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <AnimatedText 
              variant="scale" 
              className="text-3xl md:text-5xl font-serif-display font-bold mb-6"
            >
              <GlowingText intensity="high">
                Ready to Write Your Next Chapter?
              </GlowingText>
            </AnimatedText>
            
            <AnimatedText 
              variant="fade" 
              delay={0.3}
              className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              If my story resonates with you and you feel it's time to transform your life, I'd love to accompany you on this journey.
            </AnimatedText>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <Link href="/contacto">
                <ModernButton 
                  variant="primary" 
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="text-lg px-10 py-4"
                >
                  Schedule a Conversation
                </ModernButton>
              </Link>
              
              <Link href="/servicios">
                <ModernButton 
                  variant="secondary" 
                  size="lg"
                  className="text-lg px-10 py-4"
                >
                  Explore Services
                </ModernButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
