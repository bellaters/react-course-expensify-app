//take a look at https://webpack.js.org/

const path = require('path');

module.exports = {
    //entry: './src/app.js',
    entry: './src/playground/hoc.js',
    output:{
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // loader - Course 54
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true
    }
};

