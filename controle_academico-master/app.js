const PORTA = 3000

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var alunosRouter = require('./routes/alunos');
var administradoresRouter = require('./routes/administradores');
var professoresRouter = require('./routes/professores');
var notasRouter = require('./routes/notas');
var turmasRouter = require('./routes/turmas');
var cursosRouter = require('./routes/cursos');
var disciplinasRouter = require('./routes/disciplinas');
var login = require('./routes/login')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: 'http://localhost:4200'}));

app.use('/', indexRouter);
app.use('/alunos', alunosRouter);
app.use('/administradores', administradoresRouter);
app.use('/professores', professoresRouter);
app.use('/notas', notasRouter);
app.use('/turmas', turmasRouter);
app.use('/cursos', cursosRouter);
app.use('/disciplinas', disciplinasRouter);
app.use('/', login)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(PORTA, function(){
  console.info(`Server running in the port ${PORTA}`);
});

module.exports = app;