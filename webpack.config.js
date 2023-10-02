import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devServer: {
    static: './dist',
  },
  devtool: 'inline-source-map',
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  optimization: {
    runtimeChunk: 'single',
  },
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: resolve(dirname(fileURLToPath(import.meta.url)), 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({ title: 'Todo List' })],
};
