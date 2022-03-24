const deps = require("./package.json").dependencies;

module.exports = {
    name: "statement",
    filename: "remoteEntry.js",
    exposes: {
      //Header: "./src/components/Header",
    },
    remotes: {
      Shell: "Shell@http://localhost:8001/remoteEntry.js",
      //Header: "./src/components/eader",
    },
    shared: ['react'],
    // shared: {
    //   react: {
    //     singleton: true,
    //     requiredVersion: deps["react"],
    //   },
    //   "react-dom": {
    //     singleton: true,
    //     requiredVersion: deps["react-dom"],
    //   },
    // },
  };
  