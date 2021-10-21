const fs = require('fs')

const srcp = 'index.txt'
const dist = 'indexcopy.txt'

// 使用可读流和可写流拷贝文本数据 可以使用pipe  可以使用相对路径  
// 所以很多文件性操作可以用开发 可以用程序
const readstr = fs.createReadStream(srcp)

const writeStr = fs.createWriteStream(dist)

readstr.pipe(writeStr)