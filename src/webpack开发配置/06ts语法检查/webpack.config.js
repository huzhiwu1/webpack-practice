//安装ESLint解析Typescript的依赖
//eslint，js代码检测工具，使用expree解析器
// @typescript-eslint/parser 将TypeScript转化位ESTree，使eslint可以识别
// @typescript-eslint/eslint-plugin 只是一个可以打开或关闭的规则列表


/**
 * 配置eslint
 * npx ESLint --init
 * 会问你一系列问题，你按照自己的需要选择即可
 * 我的配置是
 * 
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb
√ What format do you want your config file to be in? · JavaScript
 * 
 */

/**
 * 安装prettier依赖，用来代码格式化
 * 
 * yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
 * 
 */
/**
 * vscode中安装prettier和eslint插件
 * 在settting.json中设置
 {
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ]
}
 */
const Path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: Path.resolve(__dirname, "./src/index.tsx"),
    module: {},
    plugins: [

    ]
}