const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: '/',
    clean: true
  },  
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@certificados': path.resolve(__dirname, 'src/assets/certificados/'),
      '@certifiOp': path.resolve(__dirname, 'src/assets/certifiOptimizados/'),
      '@gifs': path.resolve(__dirname, 'src/assets/gifs/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@proyectos': path.resolve(__dirname, 'src/assets/proyectos/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),
    }
  },
  devtool: 'source-map', // para que no salga una advertencia en la consola de google
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|webp|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    open: true,
    hot: true
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
