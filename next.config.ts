import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // acaba com o erro de imagem
  images: {
    remotePatterns: [{hostname: "u9a6wmr3as.ufs.sh"}]
  }
};

export default nextConfig;
