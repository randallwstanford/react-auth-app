const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src/index.js');
const DIST_DIR = path.join(__dirname, '/client/dist/');

module.exports = {
  entry: ['babel-polyfill', SRC_DIR],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/typescript'],
            plugins: ['@babel/transform-runtime'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
