const Path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    // 入口文件
    entry: Path.resolve(__dirname, "./src/index.tsx"),
    // 输出
    output: {
        //  输出文件名
        filename: "built.js",
        //  输出路径
        // __dirname指当前文件的目录的绝对路径
        path:Path.resolve(__dirname,"build")
    },
    // 解析模块的规则
    resolve: {
        // 配置省略文件路径的后缀名
        // 如import App from "./App"可以省略App的后缀名.tsx
        extensions:[".tsx",".ts",".jsx",".js"]
    },

    // loader的配置
    module: {
        rules: [
            {
                // 匹配`.css`结尾的文件
                test: /\.css$/,
                // 使用哪些loader进行处理
                // loader的执行顺序是从下到上，从右到左的，
                // 即先执行css-loader，再执行style-loader
                use: [
                    // 创建style标签，将js中的样式资源插入执行，添加到head中生效
                    // "style-loader",

                    // 代替style-loader，将js中的css样式提取出文件
                    MiniCssExtractPlugin.loader,
                    // 将css文件变成commonjs模块加载到js中，里面的内容是样式字符串
                    "css-loader",

                    /**
                     * yarn add postcss-loader autoprefixer
                     * 创建一个postcss.config.js
                     *  module.export={
                     *      plugins: [
                                require('autoprefixer')
                            ]
                     *  }
                     * css兼容处理，postcss--->postcss-loader postcss-preset-env
                     * 帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式
                     * 
                     * "browserslist":{
                     *  //开发环境---》 设置node环境变量 process.env.NODE_ENV = development
                     *  "development":[
                     *      "last 1 chrome version",
                     *      "last 1 firefox version",
                     *      "last 1 safari version"
                     *  ],
                     *  "production":[
                     *      // 兼容99.8%的浏览器
                     *      ">0.2%",
                     *      // 不能是已经死了的浏览器
                     *      "not dead",
                     *      "not op_mini all"
                     *  ]
                     * }
                     * 
                     * 
                     * 
                     */
                   "postcss-loader"
                ]
            },
            {
                test: /.less$/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    // {
                    //     loader: "css-loader",
                    //     options: {
                    //         importLoaders:1
                    //     },
                    // },
                    // 将less文件编译成css文件
                    // 需要下载，less-loader和less
                    "postcss-loader",
                    "less-loader"
                ]
            },
            // 解析ts文件
            // 需要下载typescript 然后npx tsc --init生成tsconfig.json
            {
                test: /\.tsx?$/,
                use:"ts-loader"
            }
        ]
    },
    // plugin的配置
    plugins: [
        new HtmlWebpackPlugin({
            // html模板 的路径
            template: Path.resolve(__dirname, "./src/index.html"),
            // 打包后的文件名
            filename:"index.html"
        }),
        new MiniCssExtractPlugin({
            // 输出的文件名
            // contenthash:8 提取hash码的前8位
            filename:"css/[name]-[contenthash:8].css"
        })
    ],
    // 开发模式
    mode:"production"
}