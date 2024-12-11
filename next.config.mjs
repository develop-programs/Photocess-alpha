/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatar.vercel.sh"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        port: "",
        pathname: "*/**",
      }
    ]
  }
};

export default nextConfig;
