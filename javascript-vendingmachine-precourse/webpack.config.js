const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, { mode }) => ({
  entry: './src/js/index.ts',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.js',
    assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|webp|bmp|svg)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 40 * 1024,
          },
        },
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  devtool: mode === 'development' ? 'eval-cheap-source-map' : false,
});
