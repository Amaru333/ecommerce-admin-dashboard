/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/products/all",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
