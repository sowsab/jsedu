const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req,res,next) => {
    res.status(404).send('Not Found');
});

app.listen(app.get('port'), ()=> {
    console.log(app.get('port'), '번 포트에서 대기중');
});