const path = require("path");

module.exports = {
    entry: "./frontend/entry.jsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-react"]
            }
        }]
    },
    mode: "none"
};
