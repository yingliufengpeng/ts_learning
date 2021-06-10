
// 拼接路径
const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack 都应该卸载module.exports中
module.exports = {
    // 入口文件
    entry: './src/index.ts',

    // 打包目录
    output: {
        // 打包目录
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        environment: {
            arrowFunction: false
        }
    },

    // 打包时使用的模块
    module: {
        // 指定规则
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                    loader: "babel-loader",
                    // 配置babel
                    options: {
                        // 预定义的环境
                        presets: [
                            [
                                // 指定环境的插件
                                "@babel/preset-env",

                                // 配置信息
                                {
                                    targets: {
                                        chrome: '88',
                                        ie: '11'
                                    },

                                    // 指定corejs的版本
                                    corejs: '3',
                                    // 按需加载
                                    useBuiltIns: 'usage'
                                }
                            ]
                        ]
                    }
                },
                    'ts-loader'],
                exclude: /node-modules/
            }
        ]
    },

    plugins: [
        new HTMLWebPackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }


}
