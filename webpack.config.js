const path = require('path');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    // entry: glob.sync('./src/*.js'),
    entry: {
        content: './src/content.js',
        background: './src/background.js',
        onload: './src/onload.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/build'),
        filename: '[name].js',
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: './src/static' }],
        }),
    ],
    devtool: '#inline-source-map',
};
