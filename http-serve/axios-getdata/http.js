const express = require('express')
const app = express()

// express.urlencoded 解析 URL-encoded 格式的请求体数据
// app.use(
//     express.urlencoded({
//         extended: true
//     })
// )
// express.json 解析 JSON 格式的请求体数据
app.use(express.json())
// 允许跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("X-Powered-By", ' 3.2.1')
    next()
});
app.post('/todos', (req, res) => {
    console.log(req.body.todo)
    res.send({
        data: 'test'
    })
})
//设置端口号
const server = app.listen(3000, function () {
    console.log('端口号', server.address().port);
});