const { resolve } = require("path");
const webpack = require("webpack");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:5000",
        'webpack/hot/only-dev-server',
        "./src/App.tsx"
    ],
    output: {
        filename: "bundle.js",
        publicPath: "/"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

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
        publicPath: "/",
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}
