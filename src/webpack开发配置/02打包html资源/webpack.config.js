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
        path:Path.resolve(__dirname,"./build")
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