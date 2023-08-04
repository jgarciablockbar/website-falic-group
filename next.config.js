/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [
      'r.lvmh-static.com',
      'loremflickr.com'
    ],
  },
}

module.exports = nextConfig
