/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "*" ,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: "*" ,
        port: '',
        pathname: '/**',
      }
    ],
  domains: ['localhost','*/fakepath/*']
  },
}

module.exports = nextConfig
