import { MetadataRoute } from 'next'  
  
export const dynamic = 'force-static'  
  
export default function sitemap(): MetadataRoute.Sitemap {  
  const baseUrl = 'https://joseluisarellano.com'  
  
  return [  
    {  
      url: baseUrl,  
      lastModified: new Date(),  
      changeFrequency: 'weekly',  
      priority: 1,  
    },  
    {  
      url: `${baseUrl}/quien-soy`,  
      lastModified: new Date(),  
      changeFrequency: 'monthly',  
      priority: 0.8,  
    },  
    {  
      url: `${baseUrl}/servicios`,  
      lastModified: new Date(),  
      changeFrequency: 'monthly',  
      priority: 0.9,  
    },  
    {  
      url: `${baseUrl}/mi-filosofia`,  
      lastModified: new Date(),  
      changeFrequency: 'monthly',  
      priority: 0.7,  
    },  
    {  
      url: `${baseUrl}/contacto`,  
      lastModified: new Date(),  
      changeFrequency: 'weekly',  
      priority: 0.8,  
    },  
  ]  
}  
