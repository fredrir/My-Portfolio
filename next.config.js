/** @type {import('next').NextConfig} */
module.exports = {
    async rewrites() {
      return [
        {
          source: '/cv',
          destination: '/cv.pdf', 
        },
      ];
    },
  };
