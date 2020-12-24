// const Path = require("path")
// const HtmlWepackPlugin = require("html-webpack-plugin")
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// module.exports = {
//     mode:"development",
//     entry:"./src/index.ts",
//     output: {
//         filename: "built.js",
//         path: Path.resolve(__dirname, "./build"),
//         publicPath:"./"
//     },
//     resolve: {
//       extensions:[".ts",".tsx",".js",".jsx"]  
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use:"ts-loader"
//             },
//             {
//                 // 排除css/js/html以外的资源
//                 exclude: /\.(html|css|js|less)$/,
//                 loader: "file-loader",
//                 options: {
//                     name: "[hash:8].[ext]",
                   
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     "css-loader"
//                 ]
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWepackPlugin({
//             template: Path.resolve(__dirname, './src/index.html'),
//             filename:"index.html"
//         }),
//         new MiniCssExtractPlugin({
//             filename: "css/[name].[hash:8].css",
//         })
//     ]
// }

const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: Path.resolve(__dirname, 'build'),
    },
    resolve: {
      extensions:[".tsx",".ts",".jsx",".js"]
  },
  module: {
      rules: [
        // {
        //       test: /\.tsx?$/,
        //       use: "ts-loader",
        //       enforce:"post"
        // },
        {
            test: /\.css$/,
            use: [
               "style-loader",
                "css-loader"
            ]
        },
        // 打包其他资源(除了html/js/css资源以外的资源)
        {
            // 排除css/js/html资源
            exclude:/\.(less|html|css|js)/,
            loader: 'file-loader',
 
            options: {
            name: '[hash:10].[ext]'
            }
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename:"[name]-[hash:8].css"
    }),
    // 如果
    //   new CopyWebpackPlugin({
    //       patterns: [
    //           {
    //               from: Path.resolve(__dirname, "./src/assets"),
    //               to: Path.resolve(__dirname,"./build/assets" )
    //         }
    //     ]
    // })
  ],
  mode: 'development'
};
