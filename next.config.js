/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io', 'img.youtube.com'],
    formats: ['image/avif', 'image/webp'],
  },
};
