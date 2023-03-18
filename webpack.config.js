/* eslint-disable no-tabs */
// const { resolve } = require('path');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const WebpackDevServer = require('webpack-dev-server');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./",
    clean: true
  }, 
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@certificados': path.resolve(__dirname, 'src/assets/certificados/'),
      '@certifiOp': path.resolve(__dirname, 'src/assets/certifiOptimizados/'),
      '@gifs': path.resolve(__dirname, 'src/assets/gifs/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@img': path.resolve(__dirname, 'src/assets/img/'),
      '@proyectos': path.resolve(__dirname, 'src/assets/proyectos/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),
    }
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}  