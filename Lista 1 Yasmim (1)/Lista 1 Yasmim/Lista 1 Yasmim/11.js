let produtos = [
  { nome: "camisa", estoque: 0 },
  { nome: "calça", estoque: 5 }
]

let semEstoque = produtos.filter(p => p.estoque === 0)

console.log(semEstoque)