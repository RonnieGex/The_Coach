'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { supabase } from '@/lib/supabaseClient';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    servicio: '',
    mensaje: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            nombre: formData.nombre,
            email: formData.email,
            telefono: formData.telefono || null,
            edad: formData.edad || null,
            servicio: formData.servicio || null,
            mensaje: formData.mensaje
          }
        ]);

      if (error) throw error;

      setSuccess(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        edad: '',
        servicio: '',
        mensaje: ''
      });

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

    } catch (error) {
      setError('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-white-pure shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-serif-display font-bold text-brand-blue-deep mb-6">
        Envíame un Mensaje
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-bold text-brand-gray-pro mb-2">
            Nombre Completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold-warm focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-brand-gray-pro mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold-warm focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-bold text-brand-gray-pro mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold-warm focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="edad" className="block text-sm font-bold text-brand-gray-pro mb-2">
            Rango de Edad
          </label>
          <select
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold-warm focus:border-transparent"
          >
            <option value="">Selecciona una opción</option>
            <option value="50-60">50-60 años</option>
            <option value="60-70">60-70 años</option>
            <option value="70+">70+ años</option>
          </select>
        </div>

        <div>
          <label htmlFor="servicio" className="block text-sm font-bold text-brand-gray-pro mb-2">
            Servicio de Interés
          </label>
          <select
            id="servicio"
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold-warm focus:border-transparent"
          >
            <option value="">Selecciona un servicio</option>
            <option value="sesion-individual">Sesiones Individuales</option>
            <option value="taller-grupal">Talleres Grupales</option>
            <option value="conferencia">Conferencias</option>
            <option value="programa-empresarial">Programas Empresariales</option>
            <option value="sesion-gratuita">Sesión de Descubrimiento Gratuita</option>
          </select>
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-bold text-brand-gray-pro mb-2">
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold-warm focus:border-transparent"
            placeholder="Cuéntame un poco sobre ti y qué te gustaría lograr..."
          />
        </div>

        <div>
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar Mensaje'}
          </Button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            ¡Gracias por tu mensaje! Te contactaré pronto.
          </div>
        )}

        <p className="text-xs text-brand-gray-pro text-center">
          * Campos obligatorios. Tu información será tratada con absoluta confidencialidad.
        </p>
      </form>
    </div>
  );
}