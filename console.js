const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside:{
        inside:{
            key:'value',
        },
    },
};
console.log(string, '평범한 로그입니다');
console.time('시간측정');
for(let i=0; i < 100000; i++) {}
console.timeEnd('시간측정');
console.log(obj);
console.error('에러 메시지');
console.table([1,2,3]);
console.table([{name:'내이름', birth:1994},{name:'너냐?',birth:2002}]);
console.dir(obj, {colors:true, depth:2});
console.dir(obj, {colors:true, depth:1});

function b(){
    console.trace('에러 위치 추적');
}
function a(){
    b();
}
a();
