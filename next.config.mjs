/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'slice-deck.cdn.prismic.io',
          port: '',
          pathname: '/**',
        },
      ],
    },};

export default nextConfig;
