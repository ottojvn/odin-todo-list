import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const devServer = {
  static: './dist',
};
export const devtool = 'inline-source-maps';
export const entry = {
  index: './src/index.js',
};
export const mode = 'development';
export const optimization = {
  runtimeChunk: 'single',
};
export const output = {
  clean: true,
  filename: '[name].bundle.js',
  path: resolve(
    __dirname,
    'dist',
  ),
};
export const plugins = [new HtmlWebpackPlugin({ title: 'Todo List' })];
