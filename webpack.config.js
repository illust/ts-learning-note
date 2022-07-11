const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/index.ts",
    // 指定打包文件路径
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js'
    },
    // 下面配置决定了如何处理项目中的不同类型的模块
    module:{
        rules: [{
            test: /\.ts$/, // 指定规则生效的文件类型
            // 要使用的loader
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },
    // 下面选项设置模块如何被解析
    resolve:{
        extensions: ['.ts','.js']
    },

    // webpack使用的插件配置
    plugins: [
        new HtmlWebpackPlugin()
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        }, 
        compress: true,
        port: 9000,
        open: true,
        hot: true,
    }
}