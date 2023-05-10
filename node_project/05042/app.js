const express = require('express');
const path = require('path');
const numjucks = require('nunjucks');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use('/', express.static(path.join(__dirname,'public')));

app.set('view engine', 'html');
numjucks.configure('views', {
    express : app,
    watch : true,
});

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req,res,next) => {
    res.status(404).send('Not Found');
});

app.listen(app.get('port'), ()=> {
    console.log(app.get('port'), '번 포트에서 대기중');
});