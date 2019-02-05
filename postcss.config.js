const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    plugins: [
        require("postcss-reporter")({
            clearReportedMessages: true,
        }),
        require('postcss-csso'),
        require('postcss-import'),
        postcssPresetEnv({
            browsers: 'last 2 versions'
        }),
        require("stylelint")({
            /* your options */ }),
        require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
        })
    ],
};