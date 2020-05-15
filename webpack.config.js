const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    plugins: [
        new HtmlWebpackPlugin()
    ]
}