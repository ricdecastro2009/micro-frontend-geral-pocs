const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
      port: 8084,
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], 
          },
        },
      ],
    },
  
    plugins: [
      new ModuleFederationPlugin(
        {
          name: 'Statement',
          filename:'remoteEntry.js',
          exposes: {
            './HomeStatement':'./src/components/HomeStatement/index.js'
          },
          remotes: {
            Shell:'Shell@http://localhost:8083/remoteEntry.js',
          },
          
        }
      ),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };