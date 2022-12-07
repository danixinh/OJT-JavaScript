/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
//next.config.js

module.exports = {
  env: {
      API_KEY: `090e91ec6a591a33abd47910a586c9ec`
  },
  images: {
    domains: ["image.tmdb.org"]
}
};