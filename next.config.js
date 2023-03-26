/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: true,
    esmExternals: 'loose',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
