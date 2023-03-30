const mix = require('laravel-mix')

mix
    .setPublicPath('dist')
    .js('resources/js/chart-js-integration.js', 'js')
    .vue({ version: 3 })
    .webpackConfig({
        externals: {
            vue: 'Vue',
            chartjs: 'Chart',
        },
        output: {
            uniqueName: 'novachartjs/chart-js-integration',
        },
    })
