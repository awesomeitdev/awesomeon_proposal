const path = require('path');
const sharp = require('sharp');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    mode: argv.mode || 'development',
    entry: './src/index.js',
    performance: {
      hints: false
    },
    optimization: {
      minimize: !isDevelopment,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: !isDevelopment,
              drop_debugger: !isDevelopment,
              pure_funcs: !isDevelopment ? ['console.log'] : []
            },
            mangle: !isDevelopment,
            output: {
              comments: isDevelopment,
            },
          },
          extractComments: false,
        }),
      ],
      splitChunks: isDevelopment ? false : {
        chunks: 'all',
        minSize: 20000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: -10,
            reuseExistingChunk: true,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            chunks: 'async',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        },
      },
      runtimeChunk: isDevelopment ? false : 'single',
      moduleIds: isDevelopment ? 'named' : 'deterministic'
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: isDevelopment ? '[name].bundle.js' : '[name].[contenthash].js',
      chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[chunkhash].js',
      publicPath: '/',
      clean: !isDevelopment
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                ['@babel/preset-env', {
                  modules: false,
                  targets: {
                    browsers: ['> 1%', 'last 2 versions', 'not ie <= 11']
                  }
                }],
                '@babel/preset-react'
              ],
              plugins: ['@babel/plugin-syntax-dynamic-import']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.(png|jpg|jpeg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isDevelopment ? 'images/[name][ext]' : 'images/[contenthash][ext]',
                publicPath: '/'
              }
            }
          ]
        },
        {
          test: /\.svg$/i,
          type: 'asset/resource',
          generator: {
            filename: isDevelopment ? 'images/[name][ext]' : 'images/[hash][ext]'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
        inject: true,
        minify: !isDevelopment
      }),
      !isDevelopment && new CompressionPlugin({
        test: /\.(js|css|html|svg)$/,
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.8,
      }),
      process.env.ANALYZE && new BundleAnalyzerPlugin()
    ].filter(Boolean),
    devServer: {
      port: 3002,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'public'),
      },
      hot: true,
      host: '0.0.0.0',
      client: {
        overlay: true,
        progress: true,
        reconnect: true
      },
      open: true,
      compress: true,
      watchFiles: ['src/**/*', 'public/**/*'],
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    devtool: isDevelopment ? 'eval-source-map' : false,
    cache: {
      type: 'filesystem',
      allowCollectingMemory: true,
    },
    stats: isDevelopment ? 'errors-warnings' : {
      modules: false,
      children: false,
      chunks: false,
      assets: true,
    }
  };
}; 