/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
      API_URL:"http://localhost:3009/"
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'file.hstatic.net'
          },
          {
            protocol: 'https',
            hostname: "theme.hstatic.net"
          },
          {
            protocol: 'https',
            hostname: "product.hstatic.net"
          },
        ],
      },
}

module.exports = nextConfig
