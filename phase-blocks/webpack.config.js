const path = require('path');
const fs = require('fs');

const blocksDir = path.resolve(__dirname);
const blocks = fs.readdirSync(blocksDir).filter(name => fs.lstatSync(path.join(blocksDir, name)).isDirectory());

const configs = blocks.map(block => ({
    entry: path.join(blocksDir, block, 'src', 'index.js'),
    output: {
        filename: 'index.js',
        path: path.join(blocksDir, block, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
}));

module.exports = configs;
