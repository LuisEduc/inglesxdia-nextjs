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
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/32306/inglesxdia.tech',
        permanent: true,
      },
    ]
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://g.ezoic.net/:path*',
      },
    ]
  },

}
