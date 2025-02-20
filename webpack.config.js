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
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 10,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          }
        }
      },
      runtimeChunk: 'single'
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: isDevelopment ? '[name].bundle.js' : '[name].[contenthash].js',
      chunkFilename: isDevelopment ? '[id].[name].chunk.js' : '[id].[chunkhash].chunk.js',
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
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: false,
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|jpeg|webp)$/i,
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
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
        inject: true,
        minify: !isDevelopment,
        chunks: 'all'
      }),
      new CompressionPlugin({
        test: /\.(js|css|html|svg)$/,
        algorithm: 'gzip'
      }),
      process.env.ANALYZE && new BundleAnalyzerPlugin()
    ].filter(Boolean),
    devServer: {
      port: 3002,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'public'),
      },
      hot: false,
      liveReload: true,
      host: '0.0.0.0',
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
        progress: true,
        reconnect: 5,
      },
      open: true,
      compress: true,
      watchFiles: {
        paths: ['src/**/*', 'public/**/*'],
        options: {
          usePolling: false,
        }
      },
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