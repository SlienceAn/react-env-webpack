//建立伺服器端檔案，產生HTML
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/server.js',
    target: 'node', //目標執行環境，預設為web
    externals: [nodeExternals()],
    output: {
        // libraryTarget: 'commonjs2', //以CommonJS2標準繪製出函數
        filename: 'bundle_server.js',
        path: path.resolve(__dirname, './server'),
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
            { //忽略CSS，CSS不能被打包進入服務端的程式中
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