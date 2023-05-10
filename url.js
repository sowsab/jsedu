const url = require('url');

const {URL} = url;

const myURL = new URL('https://search.daum.net/search?w=img&nil_search=btn&DA=NTB&enc=utf8&q=cat');

console.log('new URL():', myURL);

console.log('searchParams : ', myURL.searchParams);
console.log('searchParams.get():', myURL.searchParams.getAll('q'));
console.log('searchParams.keys():', myURL.searchParams.keys());
console.log('searchParams.values():', myURL.searchParams.values());

myURL.searchParams.append('color', 'red');
myURL.searchParams.append('color', 'yellow');
console.log('searchparams.getAll():', myURL.searchParams.getAll('color'));

console.log('searchParams : ', myURL.searchParams);
