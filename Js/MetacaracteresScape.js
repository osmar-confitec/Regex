const texto = '1,2,3,4,5,6,7,8,9,a,b,c!d?e'
const regexPonto = /\./g 
//   \ -> scape torna o metacaracter literal 
const regexSimbolo = /,|\.|\?|!| /g
// dara split em todos de forma global 
console.log(texto.split(regexSimbolo));

