const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const plugins = [
    new HtmlWebpackPlugin({
        template: 'src/template.html',
        filename: 'index.html',
        inject: 'body'
    }),
//    new CleanWebpackPlugin(),
];

module.exports = env => {
    const environment = env || 'production';
    console.log('Enviroment:' + environment);
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
        plugins,
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
          }
    }
};