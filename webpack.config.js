const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");
module.exports = {
    entry:  "src/components/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};