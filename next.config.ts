import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Blog-post duplicaat → de rijkere standalone pagina
      {
        source: '/blog/wat-is-een-vpn',
        destination: '/wat-is-een-vpn',
        permanent: true, // 301
      },
    ]
  },
};

export default nextConfig;
