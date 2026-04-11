let pedidos = [
  { valor: 100, pago: true },
  { valor: 50, pago: false },
]

let total = pedidos
  .filter((p) => p.pago)
  .map((p) => p.valor + 10)
  .reduce((acc, v) => acc + v, 0)

console.log(total)
