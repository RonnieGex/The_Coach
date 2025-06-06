'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Verificar si el email ya está suscrito
      const { data: existingSubscriber } = await supabase
        .from('newsletter_subscribers')
        .select('email')
        .eq('email', email)
        .single();

      if (existingSubscriber) {
        setMessage({ type: 'info', text: 'Este email ya está suscrito al newsletter.' });
        return;
      }

      // Insertar nuevo suscriptor
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;

      setMessage({ type: 'success', text: '¡Gracias por suscribirte! Pronto recibirás nuestro contenido.' });
      setEmail('');

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 5000);

    } catch (error) {
      setMessage({ type: 'error', text: 'Hubo un error. Por favor, intenta de nuevo.' });
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-brand-blue-deep text-brand-white-pure">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información de Contacto */}
          <div>
            <h3 className="text-xl font-serif-display font-bold mb-4 text-brand-gold-warm">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold-warm" />
                <a href="mailto:info@joseluisarellano.com" className="hover:text-brand-gold-warm transition-colors">
                  info@joseluisarellano.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold-warm" />
                <a href="tel:+525555555555" className="hover:text-brand-gold-warm transition-colors">
                  +52 (55) 5555-5555
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold-warm mt-1" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-serif-display font-bold mb-4 text-brand-gold-warm">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quien-soy" className="hover:text-brand-gold-warm transition-colors">
                  Quién Soy
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-brand-gold-warm transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/mi-filosofia" className="hover:text-brand-gold-warm transition-colors">
                  Mi Filosofía
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-brand-gold-warm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xl font-serif-display font-bold mb-4 text-brand-gold-warm">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios#sesiones-individuales" className="hover:text-brand-gold-warm transition-colors">
                  Sesiones Individuales
                </Link>
              </li>
              <li>
                <Link href="/servicios#talleres-grupales" className="hover:text-brand-gold-warm transition-colors">
                  Talleres Grupales
                </Link>
              </li>
              <li>
                <Link href="/servicios#conferencias" className="hover:text-brand-gold-warm transition-colors">
                  Conferencias
                </Link>
              </li>
              <li>
                <Link href="/servicios#programas-empresariales" className="hover:text-brand-gold-warm transition-colors">
                  Programas Empresariales
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales y Newsletter */}
          <div>
            <h3 className="text-xl font-serif-display font-bold mb-4 text-brand-gold-warm">Sígueme</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://linkedin.com" className="hover:text-brand-gold-warm transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="hover:text-brand-gold-warm transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" className="hover:text-brand-gold-warm transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-sm mb-3">Recibe contenido exclusivo sobre renovación personal</p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-3 py-2 bg-brand-white-pure text-brand-gray-pro rounded"
                  disabled={loading}
                />
                <button 
                  type="submit" 
                  className="bg-brand-gold-warm text-brand-blue-deep font-semibold px-4 py-2 rounded hover:bg-brand-gold-dark transition-colors disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? 'Suscribiendo...' : 'Suscribirse'}
                </button>
                {message.text && (
                  <p className={`text-xs mt-1 ${
                    message.type === 'success' ? 'text-green-300' : 
                    message.type === 'error' ? 'text-red-300' : 
                    'text-yellow-300'
                  }`}>
                    {message.text}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-brand-gold-warm/20 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} José Luis Arellano - The Coach. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2 text-brand-white-pure/70">
            Transformando experiencia en nuevos comienzos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;