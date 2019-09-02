const path = require('path');

module.exports = env => {
    const enviroment = env || 'production'
    console.log('Enviroment:' + env);
    const optimization = (enviroment === 'production') ? true : false;
    return {
        mode: enviroment,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.' + enviroment + '.bundle.js'
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
        optimization: {
            minimize: optimization
        }
    }
};