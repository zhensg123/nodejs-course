var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// 日志鉴权等中间件应该放在前面
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  next()
  console.log(23333333)
})
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// 需要在正常请求之后 否则会拦截正常请求
// next如果不是路径再问问跳到错误处理中间件
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// 可以自定义这个方法 让提示更加科学
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
