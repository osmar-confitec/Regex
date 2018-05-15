const texto  = `1,2,3,4,5,6,7,8,9,0`
const peixe  = 'o cacão estava cocão'
const peixepequeno  = 'o cacão estava cocão'

// Ponto caracter coringa o ponto substitui o caractere entre a procura do match 
console.log(texto.match(/1.2/g))
console.log(peixe.match(/c.o/g))
console.log(peixepequeno.match(/c...o/g))