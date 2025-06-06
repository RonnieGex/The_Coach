import { MetadataRoute } from 'next' 
  
export const dynamic = 'force-static' 
  
export default function manifest() {  
  return {  
    name: 'Jose Luis Arellano - The Coach',  
    short_name: 'JLA Coach',  
    description: 'Coaching especializado para profesionales',  
    start_url: '/',  
    display: 'standalone',  
    background_color: '#1A365D',  
    theme_color: '#D4AF37'  
  }  
} 
