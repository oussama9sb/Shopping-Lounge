/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "dzbtxopinstwsdhdtqiv.supabase.co",
      },
    ],
  },
};
export default nextConfig;
