const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-color-alpha'),
    require('postcss-nested'),
    require('autoprefixer')
]

let config = {
    entry: './src/scripts/index.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'assets/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    }
}

if (currentTask == 'dev') {
    config.output = {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src'),
    }
    config.devServer = {
        before: function(app, server) {
            server._watch('./src/**/*.html')
        },
        contentBase: path.join(__dirname, 'src'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    }
    config.mode = 'development'
}

if (currentTask == 'build') {
    config.output = {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
    config.mode = 'production'
}

module.exports = config