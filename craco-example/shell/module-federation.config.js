const deps = require("./package.json").dependencies;

module.exports = {
    name: "Shell",
    filename: "remoteEntry.js",
    exposes: {
      './Header': "./src/components/Header",
    },
    remotes: {
      
    },
//    shared: ['react'],
    shared: {
      react: {
        singleton: true,
        requiredVersion: deps["react"],
      },
    //   "react-dom": {
    //     singleton: true,
    //     requiredVersion: deps["react-dom"],
    //   },
    },
  };
  