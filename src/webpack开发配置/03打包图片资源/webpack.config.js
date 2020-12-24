const Path = require("path")
const HtmlWebpackPlugin =require("html-webpack-plugin")
module.exports = {
    // 开发环境
    mode: "development",
    // 入口文件
    entry: Path.resolve(__dirname, "./src/index.tsx"),
    // 输出
    output: {
        // 输出的文件名
        filename: "js/built.js",
        // 输出文件的目录是build
        path: Path.resolve(__dirname, "./build"),
        // 指定输出的路径的前缀是/,可以与cdn配合
        publicPath:"./"
    },
    resolve: {
         // 配置省略文件路径的后缀名
        // 如import App from "./App"可以省略App的后缀名.tsx
        extensions: [".tsx",".ts",".jsx",".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use:"ts-loader"
            },
          
            // 使用url-loader 
            // 下载url-loader file-loader
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: "url-loader",
                options: {
                    // 当图片文件小于8kb时，就会被base64处理
                    // 优点：减少请求数量（减轻服务器压力）
                    // 缺点：图片体积会更大，（文件请求速度更慢）
                    limit: 8 * 1024,
                    // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
                    // 解析时会出现问题：[object Module]
                    // 解决，关闭url-loader的es6模块化，使用commonjs解析
                    esModule: false,
                    // 给图片进行重命名
                    // [hash:8]取图片的hash的前8位
                    // [ext]取文件的原扩展名
                    name:"[hash:8].[ext]"
                }
            },

            {
                test: /\.html$/,
                // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
                use: "html-loader"
            },
            
        ]
    },
    plugins: [
            // html-webpack-plugin
            // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
            // 需求：需要有结构的HTML文件
        new HtmlWebpackPlugin({
            // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS）
            template: Path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            title:"页面标题",// 替换index.html中的<%=htmlWebpackPlugin.options.title%>
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments:true
            }
        })
    ]
}