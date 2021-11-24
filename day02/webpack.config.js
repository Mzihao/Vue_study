const path = require('path')

module.exports = {
    mode: 'development',  // production

    // 指定打包的入口
    entry: path.join(__dirname, './src/index.js'),
    // 指定打包出口
    output: {
        // 表示输出文件的存放路径
        path: path.join(__dirname, './dist'),
        // 表示输出文件的名称
        filename: 'martin.js',
    },
}