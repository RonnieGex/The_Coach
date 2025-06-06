// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue-deep': '#1A365D',      // Azul Profundo
        'brand-gold-warm': '#D4AF37',      // Dorado Cálido
        'brand-green-renewal': '#2E8B57', // Verde Renovación
        'brand-gray-pro': '#4F4F4F',      // Gris Profesional
        'brand-white-pure': '#FFFFFF',     // Blanco Pureza
        // Variaciones tonales
        'brand-blue-ultralight': '#E6EBF2',
        'brand-blue-light': '#B3C4D6',
        'brand-gold-dark': '#A68A1F',
      },
      fontFamily: {
        'serif-display': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans-body': ['"Montserrat"', '"Lato"', '"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        // Degradados de la guía de estilo
        'gradient-wisdom-ascendant': 'linear-gradient(45deg, #1A365D 0%, #D4AF37 100%)',
        'gradient-natural-renewal': 'linear-gradient(180deg, #1A365D 0%, #2E8B57 100%)',
        'gradient-golden-vitality': 'radial-gradient(circle, #D4AF37 0%, #2E8B57 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;