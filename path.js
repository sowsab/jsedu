const path = require('path');
const string = __filename;

console.log('path.esp:', path.sep);
//console.log(process.env.PATH);
console.log('path.delimiter:', path.delimiter);
console.log(string);
console.log('path.dirname():', path.dirname(string));
console.log('path.parse():', path.parse(string));
console.log('path.normalize():', path.normalize('c://users\\\\zerocho\\\path.js'));
