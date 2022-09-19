/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com','drive.google.com'],
    formats: ["image/webp"],
  },
  headers : [
    {key:"Access-Control-Allow-Origin",value:"*"}
  ]
}

module.exports = nextConfig
