const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: {
        index: path.resolve("./src/index.js"),
        another: path.resolve("./src/index.js"),
    },

    output: {
        filename:"[name]-[contenthash].js",
        path:path.resolve("./dist"),
        clean: true,// webpack5 设置clean=true与使用clearWebpackPlugin同等效果
    },

    mode:"none",

    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve("./src/index.html"),
            inject:"body",
            title:"webpack-split-chunks"
        })
   ],

   devServer:{
       open: true,
   },
   optimization: {
       splitChunks: {
          
            /**
            * async 将公共代码中的动态引入的部分分离出来
            * all 将公共代码部分抽离出来，不论是动态引入还是静态引入
            */
            chunks: "all",
          
       }
   }
}