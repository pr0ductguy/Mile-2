/** @type {import('next').NextConfig} */
import withPlaceholder from "@plaiceholder/next";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
};

export default withPlaceholder(nextConfig);
