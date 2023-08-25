// next.config.js
module.exports = {
  // ...
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Configure caching options here
    return config;
  },
};
