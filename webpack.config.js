const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // regex to match js and jsx files
                exclude: /(node_modules)/, // exclude node_modules and bower_components
                loader: 'babel-loader', // use babel-loader
                options: { presets: ['@babel/env'] } // use @babel/env for transpiling
            },
            {
                test: /\.css$/, // regex to match css files
                use: ['style-loader', 'css-loader'] // use style-loader and css-loader
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] }, // resolve js and jsx files
    output: {
        path: path.resolve(__dirname, 'dist/'), // output to dist folder
        publicPath: '/dist/', // public path
        filename: 'bundle.js' // output bundle.js
    },
    devServer: {
        static: path.join(__dirname, 'public/'), // serve from public folder
        devMiddleware: {
            publicPath: 'http://localhost:3000/dist/', // serve bundle.js from dist folder
        },
        port: 3000,
        hot: "only" // hot reload
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
    