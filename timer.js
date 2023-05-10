/* const timeout = setTimeout(()=>{
    console.log('1.5초후 실행');
},1500);

const interval = setInterval(()=>{
    console.log('1초 마다 실행');
},1000);

const timeout2 = setTimeout(()=>{
    console.log('실행되지 않습니다.');
},3000);

setTimeout(()=>{
    clearTimeout(timeout2);
    clearInterval(interval);
},2500); */

const immediate = setImmediate(()=>{
    console.log('즉시실행');
});

const immediate2 = setImmediate(()=>{
    console.log('실행되지 않습니다.');
});

clearImmediate(immediate2);

process.nextTick(()=>{
    console.log('nextTick');
});

setTimeout(()=>{
    console.log('timeout');
},0);

Promise.resolve().then(()=>{
    console.log('promise');
});