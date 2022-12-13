/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYWRuYW4tYXZkaWMiLCJhIjoiY2xibTFpeTlvMDBiYTNvbWY3NWVwd2dkOSJ9.3rlKeNKV1fcU_YQGamQzNg",
  },
};

module.exports = nextConfig;
