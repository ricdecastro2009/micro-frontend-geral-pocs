const cracoModuleFederation = require('craco-module-federation')
const federationConfig = require("./module-federation.config.js");

module.exports = {
    mode: 'development',
    devServer: {
      port: 8001,
    },

    plugins: [
      {
        plugin:cracoModuleFederation,
        options: {
          federationConfig,
        }
      },
    ],
    
    plugins: [
      new cracoModuleFederation({
        name: 'shell',
        filename: 'remoteEntry.js',
        remotes: {
        },
        exposes:{
          Header: './src/components/Header'
        },
        
        shared: ['react'],
        

      })
    ],

  };