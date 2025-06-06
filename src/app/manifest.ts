import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'José Luis Arellano - The Coach',
    short_name: 'JLA Coach',
    description: 'Coaching especializado para profesionales y ejecutivos mayores de 60 años',
    start_url: '/',
    display: 'standalone',
    background_color: '#1A365D',
    theme_color: '#D4AF37',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}