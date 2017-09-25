/**
 * Created by yi.dai on 2017/9/25.
 */
const path = require('path');
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'), // 输出路径必须使用绝对路径
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader', // 使用babel-loader这个loader
                exclude: /node_modules/
            }
        ]
    }
};