const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
      require('postcss-csso'),
      require('postcss-import'),
      postcssPresetEnv({ browsers: 'last 2 versions' }),
      require('cssnano')({
        preset: ['default', {
            discardComments: {
                removeAll: true,
            },
        }]
    }),
  ],
};
