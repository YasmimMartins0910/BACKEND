function removerDuplicatas(numeros) {
  return [...new Set(numeros)]
}

let numeros = [1, 2, 2, 3, 4, 4, 5]

let resultado = removerDuplicatas(numeros)

console.log(resultado)
