module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'postcss-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
