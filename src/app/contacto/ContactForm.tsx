'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ModernButton from "@/components/ui/ModernButton";
import GlassCard from "@/components/ui/GlassCard";
import { supabase } from '@/lib/supabaseClient';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

// Esquema de validación con Zod
const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un email válido'),
  telefono: z.string().optional(),
  edad: z.string().optional(),
  servicio: z.string().optional(),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Toast de loading
    const toastId = toast.loading('Enviando mensaje...', {
      style: {
        background: 'rgba(212, 175, 55, 0.95)',
        color: '#1A365D',
      },
    });

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            nombre: data.nombre,
            email: data.email,
            telefono: data.telefono || null,
            edad: data.edad || null,
            servicio: data.servicio || null,
            mensaje: data.mensaje,
          }
        ]);

      if (error) throw error;

      // Success toast
      toast.success('¡Mensaje enviado exitosamente! Te contactaré pronto.', {
        id: toastId,
        duration: 5000,
        icon: '🎉',
      });

      reset();
    } catch (error) {
      // Error toast
      toast.error('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.', {
        id: toastId,
        duration: 5000,
      });
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GlassCard className="p-8" blur="lg" opacity="high">
      <div className="mb-6">
        <h2 className="text-3xl font-serif-display font-bold text-primary-900 mb-2">
          Envíame un Mensaje
        </h2>
        <p className="text-neutral-600">
          Completa el formulario y te responderé en las próximas 24 horas
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nombre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Nombre Completo *
          </label>
          <input
            {...register('nombre')}
            type="text"
            className={`
              w-full px-4 py-3 rounded-xl border-2 transition-all duration-300
              bg-white/50 backdrop-blur-sm
              focus:outline-none focus:ring-2 focus:ring-secondary-500/50
              ${errors.nombre 
                ? 'border-red-400 focus:border-red-500' 
                : 'border-neutral-200 focus:border-secondary-500'
              }
            `}
            placeholder="Ej: Juan Pérez"
          />
          {errors.nombre && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-600 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.nombre.message}
            </motion.p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            className={`
              w-full px-4 py-3 rounded-xl border-2 transition-all duration-300
              bg-white/50 backdrop-blur-sm
              focus:outline-none focus:ring-2 focus:ring-secondary-500/50
              ${errors.email 
                ? 'border-red-400 focus:border-red-500' 
                : 'border-neutral-200 focus:border-secondary-500'
              }
            `}
            placeholder="juan@ejemplo.com"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-600 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.email.message}
            </motion.p>
          )}
        </motion.div>

        {/* Teléfono y Edad en grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              Teléfono
            </label>
            <input
              {...register('telefono')}
              type="tel"
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 transition-all duration-300 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-secondary-500/50 focus:border-secondary-500"
              placeholder="+52 55 1234 5678"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              Rango de Edad
            </label>
            <select
              {...register('edad')}
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 transition-all duration-300 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-secondary-500/50 focus:border-secondary-500"
            >
              <option value="">Selecciona una opción</option>
              <option value="50-60">50-60 años</option>
              <option value="60-70">60-70 años</option>
              <option value="70+">70+ años</option>
            </select>
          </motion.div>
        </div>

        {/* Servicio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Servicio de Interés
          </label>
          <select
            {...register('servicio')}
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 transition-all duration-300 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-secondary-500/50 focus:border-secondary-500"
          >
            <option value="">Selecciona un servicio</option>
            <option value="sesion-individual">Sesiones Individuales</option>
            <option value="taller-grupal">Talleres Grupales</option>
            <option value="conferencia">Conferencias</option>
            <option value="programa-empresarial">Programas Empresariales</option>
            <option value="sesion-gratuita">Sesión de Descubrimiento Gratuita</option>
          </select>
        </motion.div>

        {/* Mensaje */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Mensaje *
          </label>
          <textarea
            {...register('mensaje')}
            rows={5}
            className={`
              w-full px-4 py-3 rounded-xl border-2 transition-all duration-300
              bg-white/50 backdrop-blur-sm resize-none
              focus:outline-none focus:ring-2 focus:ring-secondary-500/50
              ${errors.mensaje 
                ? 'border-red-400 focus:border-red-500' 
                : 'border-neutral-200 focus:border-secondary-500'
              }
            `}
            placeholder="Cuéntame un poco sobre ti y qué te gustaría lograr..."
          />
          {errors.mensaje && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-600 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.mensaje.message}
            </motion.p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="pt-4"
        >
          <ModernButton
            type="submit"
            variant="primary"
            size="lg"
            loading={isSubmitting}
            disabled={!isValid || !isDirty}
            icon={isSubmitting ? undefined : <Send className="w-5 h-5" />}
            className="w-full"
            glow={isValid && isDirty}
          >
            {isSubmitting ? 'Enviando Mensaje...' : 'Enviar Mensaje'}
          </ModernButton>
        </motion.div>

        {/* Privacy notice */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xs text-neutral-500 text-center flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-4 h-4 text-accent-500" />
          Tu información será tratada con absoluta confidencialidad
        </motion.p>
      </form>
    </GlassCard>
  );
}