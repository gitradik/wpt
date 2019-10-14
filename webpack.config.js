const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/app.module.js',
    output: {
        path: path.resolve(__dirname, "bin"),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devtool: "#inline-source-map"
};
