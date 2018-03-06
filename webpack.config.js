const config = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: __dirname + '/build'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = config;