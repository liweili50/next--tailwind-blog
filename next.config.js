module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://liweili50.com/api/:path*',
      },
    ]
  },
};
