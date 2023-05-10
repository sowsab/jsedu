const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const multer = require('multer');
const fs = require('fs');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));   //static 미들웨어
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// 폴더 만들기
try{
    fs.readdirSync('uploads');
}catch(error){
    console.error('uploads 폴더가 없어서 생성');
    fs.mkdirSync('uploads');
}
const upload = multer({
    storage: multer.diskStorage({
        destination(req,res,done) {
            done(null, 'uploads/');
        },
        filename(req,file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() +ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024},
});

app.use((req, res, next)=> {
    console.log('모든 요청에 다 실행됩니다.');
    next();
});
/*
app.get('/', (req,res,next)=>{
    console.log('GET / 요청에서만 실행됩니다.');
    next();
}, (req, res)=>{
    throw new Error('에러는 에러처리 미들웨어로 갑니다.');
});
*/
app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).send(err.messge);
});

app.post('/upload', upload.array('image'), (req,res) => {
    console.log(req.file,req.body);
    res.send('ok')
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트에서 대기중!');
});

app.get('/', (req, res)=>{
    //res.send('hello, express!');
    res.sendFile(path.join(__dirname, './multipart.html'));
});
