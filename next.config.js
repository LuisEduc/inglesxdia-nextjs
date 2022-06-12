module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["admin.inglesxdia.com"],
    loader: 'akamai',
    path: 'https://admin.inglesxdia.com/imagen/',
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
}
