const path = require("path");
const webpack = require("webpack");
// "webpack-dev-server/client?http://localhost:5000",
// 'webpack/hot/only-dev-server',
module.exports = {
    entry: [
        "react-hot-loader/patch",
        "./src/Index.tsx"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    devtool: "source-map", // or source-map
    resolve: {
        extensions: [".webpack.js", ".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loaders: ["react-hot-loader/webpack", "awesome-typescript-loader"]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devServer: {
        port: 5000,
        historyApiFallback: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}
