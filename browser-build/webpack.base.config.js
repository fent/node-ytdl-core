const webpack      = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const path         = require('path')

module.exports = {
  entry: './src/globals.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ytdl-core.js',
    sourceMapFilename: 'ytdl-core.map'
  },
  target: ['web'],
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
      path.resolve('../node_modules')
    ],
    fallback: {
      "querystring": require.resolve("querystring-es3"),
      "stream":      require.resolve("stream-browserify"),
      "vm":          require.resolve("vm-browserify")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  },
  optimization: {
    nodeEnv: 'production', 
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        terserOptions: {
          compress: true,
          sourceMap: true
        }
      }),
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV:       JSON.stringify('production'),
        YTDL_NO_UPDATE: JSON.stringify(true)
      }
    })
  ]
}
