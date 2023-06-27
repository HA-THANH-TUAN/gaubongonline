/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
      API_URL:"https://jsonplaceholder.typicode.com/todos/1"
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'gaubongonline.vn',

          },
        ],
      },
}

module.exports = nextConfig
