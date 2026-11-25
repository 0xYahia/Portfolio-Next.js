/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      // The separate /about page was removed; the About section lives on the home page.
      { source: '/about', destination: '/#about', permanent: false },
    ];
  },
};

module.exports = nextConfig;
