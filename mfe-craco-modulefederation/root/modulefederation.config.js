const deps = require("./package.json").dependencies;

module.exports = {
  name: 'Root',
  filename: 'remoteEntry.js',

  exposes : {
    './Button': './src/components/Button/index.js',
  },
  remotes: {
    Ib: 'Ib@http://localhost:3000/remoteEntry.js',
    Statement: 'Statement@http://localhost:3002/remoteEntry.js',
  },

  shared: [
    {
      "react": {
        eager: true,
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        eager: true,
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
      "react-router-dom": {
        eager: true,
        singleton: true,
        requiredVersion: deps["react-router-dom"],
      },
    }
  ],
};
