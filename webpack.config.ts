const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

interface Environment {
  prod: boolean;
}

module.exports = (env: Environment, argv: Record<string, any>) => {
  const isProd = argv.mode === 'production';
  const isDev = !isProd;

  const filename = (ext: string) => (isProd ? `[name].[contenthash].bundle.${ext}` : `[name].bundle.${ext}`);

  const plugins = () => {
    const base = [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/assets/media'),
            to: path.resolve(__dirname, 'dist/media'),
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new MiniCssExtractPlugin({
        filename: filename('css'),
      }),
    ];

    if (isDev) {
      base.push(new ESLintPlugin());
      base.push(
        new StylelintPlugin({
          configFile: '.stylelintrc.json',
          fix: true,
        }),
      );
    }

    return base;
  };

  return {
    context: path.resolve(__dirname, 'src'),
    devServer: {
      historyApiFallback: true,
      open: true,
      port: 3000,
    },
    devtool: isDev ? 'source-map' : false,
    entry: {
      app: './index.tsx',
    },
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: isDev ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:8]',
                },
                sourceMap: isDev,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['postcss-media-minmax'],
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(jpe?g|png|ttf|svg|mp3)$/i,
          type: 'asset/resource',
        },
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
            'ts-loader',
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    output: {
      assetModuleFilename: 'asset/[hash][ext][query]',
      clean: true,
      filename: filename('js'),
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: plugins(),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    target: 'web',
  };
};
