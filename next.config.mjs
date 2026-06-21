/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["ws", "@neondatabase/serverless"],
  },
};

export default nextConfig;
