const fs = require('fs')
// fs.stat为异步的方法
fs.stat('test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stats, 'stats')
  //可以访问 `stats` 中的文件属性
})

// fs.statSync为同步的方法 同步的方法会阻塞程序
const stats = fs.statSync('test.txt')
