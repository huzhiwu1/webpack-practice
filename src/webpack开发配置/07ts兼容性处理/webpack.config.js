/**
 * ts的兼容性处理
 * yarn add @babel/core @babel/cli @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-typescript @babel/preset-react babel-loader
 * 
 * 在根目录下创建一个.babelrc文件
 * {
 *  "presets":[
 *      "@babel/preset-env",
 *      "@babel/preset-typescript",
 *      "@babel/preset-react"
 *   ],
 *  "plugins":[
 *      "@babel/plugin-proposal-class-properties"
 *      
 *   ]
 * }
 */

const Path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: Path.resolve(__dirname, "./src/index.tsx"),
    output: {
        filename:"js/built.js",
        path:Path.resolve(__dirname,"build")
    },
    resolve: {
      extensions:[".tsx",".ts",".jsx",".js"]  
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            // favicon的图标
            // favicon: "xxx",
            // // 页面标题
            // title: "",
            minify: {
                //删除空格
                collapseWhitespace: true,
                //删除注释
                removeComment:true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader:"babel-loader"
            }
        ]
    }
}