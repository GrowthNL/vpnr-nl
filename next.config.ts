import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Blog-post duplicaten → de rijkere standalone pagina's
      {
        source: '/blog/wat-is-een-vpn',
        destination: '/wat-is-een-vpn',
        permanent: true,
      },
      {
        source: '/blog/nordvpn-vs-surfshark',
        destination: '/vpn-vergelijken/nordvpn-vs-surfshark',
        permanent: true,
      },
      {
        source: '/blog/vpn-thuiswerken',
        destination: '/beste-vpn/voor-thuiswerken',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
