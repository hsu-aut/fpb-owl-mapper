const path = require("path")

module.exports = {
    entry: './src/cli.ts',
	devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
	target: "node",
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'fpb2owl-cli.js',
        path: path.resolve(__dirname, 'dist'),
    },
};