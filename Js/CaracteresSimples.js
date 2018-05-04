const texto = `1,2,3,4,5,6,a.b c!d?e`;
// encontra apenas a primeira referencia 
const regexVirgula = /,/
// somente numeros na string inteira
const numeros = /[0-9]/g
//
console.log(texto.split(regexVirgula))
console.log(texto.match(regexVirgula))
console.log(texto.match(numeros))
