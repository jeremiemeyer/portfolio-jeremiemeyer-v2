/** @type {import('next').NextConfig} */
const nextConfig = {    images: {
    domains: ['firebasestorage.googleapis.com'],
  },
}

// const nextConfig = {  images: {
//     formats: ['image/avif', 'image/webp'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'assets.vercel.com',
//         port: '',
//         pathname: '/image/upload/**',
//       },
//     ],
//   },
// }

module.exports = nextConfig
