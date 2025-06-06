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
        // Sistema de colores original (mantener compatibilidad)
        'brand-blue-deep': '#1A365D',      
        'brand-gold-warm': '#D4AF37',      
        'brand-green-renewal': '#2E8B57', 
        'brand-gray-pro': '#4F4F4F',      
        'brand-white-pure': '#FFFFFF',     
        'brand-blue-ultralight': '#E6EBF2',
        'brand-blue-light': '#B3C4D6',
        'brand-gold-dark': '#A68A1F',
        
        // Sistema moderno de colores
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dfff',
          300: '#7cc8ff',
          400: '#36aeff',
          500: '#0891f2',
          600: '#0072cf',
          700: '#0059a6',
          800: '#064e89',
          900: '#1A365D', // brand-blue-deep
          950: '#0b2745',
        },
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#D4AF37', // brand-gold-warm
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#2E8B57', // brand-green-renewal
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4F4F4F', // brand-gray-pro
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        
        // Colores para Glassmorphism
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          'white-md': 'rgba(255, 255, 255, 0.2)',
          'white-lg': 'rgba(255, 255, 255, 0.3)',
          blue: 'rgba(26, 54, 93, 0.1)',
          'blue-md': 'rgba(26, 54, 93, 0.2)',
          'blue-lg': 'rgba(26, 54, 93, 0.3)',
        },
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
        // Animaciones existentes
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        
        // Nuevas animaciones modernas
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },
      
      backdropBlur: {
        xs: '2px',
      },
      
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'neo': '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
        'neo-inset': 'inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff',
        'glow-sm': '0 0 10px rgba(212, 175, 55, 0.5)',
        'glow-md': '0 0 20px rgba(212, 175, 55, 0.5)',
        'glow-lg': '0 0 30px rgba(212, 175, 55, 0.5)',
      },
      keyframes: {
        // Keyframes existentes
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
        
        // Nuevos keyframes modernos
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config;