import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ayuda a identificar problemas en desarrollo
  async redirects() {
    return [
      {
        source: '/api/utm', // Ruta del endpoint UTM
        destination: 'https://gtm-cg-smilladevs-projects.vercel.app/aaa', // URL de redirección para UTM
        permanent: false, // Redirección temporal (307)
      },
      {
        source: '/api/gtm', // Ruta del endpoint GTM
        destination: 'https://gtm-cg-smilladevs-projects.vercel.app/bbb', // URL de redirección para GTM
        permanent: false, // Redirección temporal (307)
      },
    ];
  },
};

export default nextConfig;