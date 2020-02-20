let plugins = [
  require("postcss-import"),
  require("autoprefixer"),
  require('postcss-preset-env')
];

if (process.env.NODE_ENV == "production")
  plugins.push(
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }]
    })
  );

module.exports = {
  plugins
};