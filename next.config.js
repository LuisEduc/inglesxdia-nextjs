module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["admin.inglesxdia.com"],
  },

  async redirects() {
    return [
      {
        source: '/lecs',
        destination: '/',
        permanent: true,
      },
    ]
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://prebid.smilewanted.com',
      },
    ]
  },

}
