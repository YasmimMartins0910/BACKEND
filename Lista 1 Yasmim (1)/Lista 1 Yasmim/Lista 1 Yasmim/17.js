function sortearNome(nomes) {
  let indice = Math.floor(Math.random() * nomes.length)
  return nomes[indice]
}

let lista = ['Yasmim', 'João', 'Maria', 'Pedro']

let resultado = sortearNome(lista)

console.log(resultado)
