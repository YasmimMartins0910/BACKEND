let carrinho = [
  { nome: 'camisa', preco: 50, quantidade: 2 },
  { nome: 'calça', preco: 100, quantidade: 1 },
]

let total = carrinho.reduce(
  (acc, item) => acc + item.preco * item.quantidade,
  0,
)

console.log(total)
