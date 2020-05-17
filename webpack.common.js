const path = require("path");

module.exports = {
    // entry: "./src/index.js",
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    output: {
        // filename: "[contenthash].bundle.js",
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"]
            // },
            {
                test: /\.jpeg$/,
                // use: ["file-loader"]
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "imgs"
                    }
                }
            }
        ]
    },
    // plugins: [

    // ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
}