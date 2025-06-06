/** @type {import('next').NextConfig} */  
const nextConfig = {  
  output: 'export',  
  trailingSlash: true,  
  images: { 
    unoptimized: true
  },
  
  // Optimizaciones básicas
  compress: true,
  poweredByHeader: false,
  
  // Variables de entorno
  env: {
    BUILD_TIME: new Date().toISOString(),
    APP_VERSION: process.env.npm_package_version || '1.0.0',
  },
}  

export default nextConfig
