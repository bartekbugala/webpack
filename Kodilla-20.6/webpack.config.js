const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const plugins = [
    new HtmlWebpackPlugin({
        template: 'src/template.html',
        filename: 'index.html',
        inject: 'body'
    }),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['./build'] }
    }),
];

module.exports = env => {
    const environment = env || 'production';
    console.log('Enviroment:' + environment);
     if (environment === 'production') {
        plugins.push(
            new OptimizeJsPlugin({
                sourceMap: false
            })
        )
    }
    return {
        mode: environment,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.' + environment + '.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader' },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins
    }
};