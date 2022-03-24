const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
      port: 8083,
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
              '@babel/preset-react',
            ], // to compile react to ES5
          },
        },
      ],
    },
  
    plugins: [
      new ModuleFederationPlugin(
        {
          name: 'Shell',
          filename:'remoteEntry.js',
          exposes: {
            './Button': './src/components/Button',
          },
          remotes: {
            Statement:'Statement@http://localhost:8084/remoteEntry.js',
          },
        }
      ),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };