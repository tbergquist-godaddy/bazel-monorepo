// @flow

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  output: {
    filename: '[hash].bundle.js',
    chunkFilename: '[contenthash].bundle.js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: (/[\\/]node_modules[\\/]/ /*: RegExp */),
          name: (module /*: Object  */) /* :string */ => {
            // eslint-disable-next-line prefer-named-capture-group
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: (/\.mjs$/ /*: RegExp */),
      },
      {
        test: (/\.(?:js)$/ /*: RegExp */),
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
            plugins: ([isDevelopment && require.resolve('react-refresh/babel')].filter(
              Boolean,
            ) /*: any[]  */),
          },
        },
      },
      {
        test: (/\.css$/i /*: RegExp  */),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: (/\.svg$/ /*: RegExp  */),
        use: ['@svgr/webpack'],
      },
    ],
  },
};
