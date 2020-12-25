// yarn add webpack-dev-server
// 启动服务器
// webpack serve  --config webpack配置文件


const HtmlWebpackPlugin = require("html-webpack-plugin")
const Path = require("path")
const Webpack = require("webpack")
module.exports = {
    entry: Path.resolve(__dirname, "./src/index.tsx"),
    // 加上target才能热更新
    target:"web",
    output: {
        path:Path.resolve(__dirname,"./build"),
        filename:"js/built.js"
    },
    resolve: {
        extensions:[".tsx",".ts",".jsx",".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader:"ts-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, "./src/index.html"),
            filename:"index.html"
        }),
        new Webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        // 开启HMR功能
        hot: true,
        // 自动打开浏览器
        open: true,
        // 运行代码的目录d
        contentBase: Path.resolve(__dirname, "./build"),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3333,
        // 域名
        host: "localhost",
        // 监听contentBase目录下的所有文件，一旦文件变化就会reload
        watchContentBase: true,
        // 不要显示启动服务器日志信息
        clientLogLevel: "none",
        // 除了一些基本启动信息以外，其他内容都不要显示
        quiet: true,
        // 如果出错了，不要全屏显示
        overlay: false,
        proxy: {
            // 一旦devServer（3333）服务器接受到 /apx/xxx的请求，就会把请求转发到另外一个服务器（3000）
            "/api": {
                target: "http://localhost:3000",
                // 发送请求时，请求路径重写，将/api/xxx--->/xxx， 去掉/api
                pathRewrite: {
                    "^/api":""
                }
            }
        }

    }

}
