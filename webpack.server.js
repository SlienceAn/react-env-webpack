//建立伺服器端檔案，產生HTML
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/server.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        libraryTarget: 'commonjs2',
        filename: 'bundle_server.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                },

            },
            {
                test: [/\.scss$/, /\.css$/],
                use: ['ignore-loader']
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            },
            {
                test: [/\.png$/, /\.jpg$/],
                use: 'url-loader'
            }
        ]
    },
    devtool: 'source-map'
}