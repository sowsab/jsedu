const http=require('http');

const server = http.createServer((req, res) => {
    // 처리해줄 내용
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<h1>안녕 노드</h1>');
    res.end('<p>Hello Server!</p>');
});

server.listen(8080);

server.on('listening', ()=> {
    console.log('8080번 포트에서 서버 대기 중 입니다.');
});

server.on('error', ()=> {
    console.error(error);
});
