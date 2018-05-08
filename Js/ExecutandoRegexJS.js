const texto gerando conflito  = `0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f`
const expre = /[a-c]/g;

const regexNove = RegExp(`9`); // Outra forma de procurar a regex 
console.log('testando a expressão regular')
console.log(regexNove.test(texto));
console.log(regexNove.exec(texto));

console.log('testando a expressão regular por string')
console.log(texto.match(expre));
console.log(texto.search(expre));
console.log(texto.replace(expre,`achei`));
console.log(texto.split(expre));


