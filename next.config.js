// @ts-check

const nextConfig = {
  // output: "export",
  trailingSlash: true,
  experimental: {
    runtime: "experimental-edge",
  },
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
