const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/app/styles')],
  },
  transpilePackages: ['ui-library'],
};

module.exports = nextConfig;
