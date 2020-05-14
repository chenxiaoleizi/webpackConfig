const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        // filename: "[name].bundle.js",
        // filename: "[id].bundle.js",
        // filename: "[hash].bundle.js"
        path: path.resolve(__dirname, "dist/js")
    }
}