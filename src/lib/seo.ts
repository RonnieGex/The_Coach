// src/lib/seo.ts
// Utilidades SEO

// Generar meta tags dinámicos
export const generateMetaTags = (page: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}) => {
  const baseUrl = 'https://the-coach-jose-luis.netlify.app';
  const fullUrl = page.url ? `${baseUrl}${page.url}` : baseUrl;
  const imageUrl = page.image ? `${baseUrl}${page.image}` : `${baseUrl}/images/og-default.jpg`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords?.join(', '),
    openGraph: {
      title: page.title,
      description: page.description,
      url: fullUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: page.title
        }
      ]
    }
  };
};

// Meta tags para páginas específicas
export const pageMetaTags = {
  home: generateMetaTags({
    title: "José Luis Arellano | The Coach - Transformación Personal para Mayores de 60",
    description: "Coach especializado en desarrollo personal y liderazgo para profesionales mayores de 60 años.",
    keywords: ["coaching", "mayores de 60", "desarrollo personal"],
    url: "/"
  }),
  
  services: generateMetaTags({
    title: "Servicios de Coaching - José Luis Arellano",
    description: "Coaching personal, ejecutivo y de renovación personal para mayores de 60 años.",
    url: "/servicios"
  })
};

const seoModule = {
  generateMetaTags,
  pageMetaTags
};

export default seoModule;
