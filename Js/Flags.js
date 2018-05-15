const texto  = `carlos está pessoalmente com dor de cabeça`;
//regex que busca as palavras entre // com as flags i-> case sensitive ou g-> global 
// match retorna um array do texto e graças a flag g de global procura até a última ocorrência
console.log(texto.match(/c|çõa/gi))