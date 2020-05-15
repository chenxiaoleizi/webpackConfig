const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 生成html并插入打包后的js标签
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 删除上次打包的文件

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.[contenthash].js", 
        // filename: "[name].bundle.js",
        // filename: "[id].bundle.js",
        // filename: "[hash].bundle.js"
        path: path.resolve(__dirname, "dist/js")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ]
}