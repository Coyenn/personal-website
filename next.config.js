/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["www.datocms-assets.com"],
        loader: "akamai",
        path: "",
    },
};

module.exports = nextConfig;
