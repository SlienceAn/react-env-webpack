const path = require('path'); //引用node.js path模組
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');// 載入 html-webpack-plugin
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'source-map', //產生Source map方便除錯
    entry: './src/index.js', //入口文件，可以是多個(使用陣列表示)
    output: {
        filename: 'bundle.js', //打包後的檔案名稱
        publicPath: '', //設定發布線上資源的URL字首
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /node_modules/, //exclude使指不包含在編譯範圍內的路徑
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'] //編譯JSX
                    }
                }
            },
            {
                //loader是從後面編譯至前面，因此順序不能反
                //MiniCssExtractPlugin將CSS獨立打包
                test: [/\.scss$/, /\.css$/],
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
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
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ //生成HTML檔案
            template: 'index.html',
            filename: 'index.html'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ //壓縮JS
                terserOptions: {
                    compress: {
                        drop_console: false, //刪除所有console敘述
                        collapse_vars: true,//內嵌以定義但是只用一次的變數
                        reduce_vars: true //分析多次但沒有定義成變數的參考值
                    },
                    output: {
                        beautify: false,//最緊湊的輸出
                        comments: false//刪除所有注釋
                    }
                }
            })
        ],
    },
    devServer: {
        port: 9000, //指定開啟的port，預設8080
        compress: true,//伺服器端開啟GZIP壓縮功能
        open: true,//執行時自動開始分頁
        hot: true, //開啟熱重載
        https: false,//是否開啟HTTPS
        contentBase: './dist', //設定DevServer HTTP伺服器的檔案根目錄
        historyApiFallback: true, //是否開啟 HTML5 History API 網頁
        profile: true, //是否捕捉webpack建置效能資訊

    }
};