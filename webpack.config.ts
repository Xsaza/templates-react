import * as path from 'path';

import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

type WpConfig = () => Configuration;

const wpConfig: WpConfig = () => {
  return {
    entry: {
      main: './src/main.tsx',
    },
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?/,
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.app.json'),
          },
        },
      ],
    },
    devServer: {
      port: 3000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html')
      })
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
    },
  }
};

export default wpConfig;
