/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['images.microcms-assets.io', 'img.youtube.com'],
    formats: ['image/avif', 'image/webp'],
  },
};
