/**
 * Created by yi.dai on 2017/9/25.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // devtool: 'eval-source-map',
    entry: {
        main: './app/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'), // 输出路径必须使用绝对路径
        filename: 'bundle.[chunkhash].js'
        // publicPath: 'build/' //寻找资源路径(src会变成 src="build/bundle.94048a95e4de0ae7199e.js")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader", // 使用babel-loader这个loader
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // 使用插件剥离css文件的写法
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }]
                }),
                // 下面是webpack写法
                // use: ['style-loader', {
                //     loader: 'css-loader',
                //     options: {
                //         modules: true
                //     }
                // }],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: "file-loader", // 'url-loader'功能类似于file-loader，但是文件低于限制时返回一个URL
                    options: {
                        name: 'image/[name].[hash].[ext]'
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },

    // 插件列表
    plugins: [
        new ExtractTextPlugin('css/[name].css'), // css 输出文件的路径
        new webpack.optimize.CommonsChunkPlugin({ // 提取文件公共部分
            name: 'commonChunk',
            filename: 'commonChunk.js',
            minChunks: Infinity
        }),
        new CleanWebpackPlugin(['build']), // 它会删掉build目录下的东西,保证每次打包都是新的东西
        new htmlWebpackPlugin({
            title: 'test', // 生成html里面的title，<%= htmlWebpackPlugin.options.title %>
            template: './index.html', // 模板源文件，路径为当前路径
            filename: 'name.html', // 输出文件名，输出路径为output path的路径
            inject: 'body', // 标签注入body
        })
    ]
};