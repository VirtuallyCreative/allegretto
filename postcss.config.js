let plugins = [
  require("postcss-import"),
  require("autoprefixer")({ browsers: "last 2 versions" }),
  require('cssnano')({ preset: 'default' })
];

if (process.env.NODE_ENV == 'production') plugins.push(require("postcss-csso"))

module.exports = {
  plugins
}
