const catalogo = [
  { id: 1, nome: "Camiseta", preco: 50, estoque: 10 },
  { id: 2, nome: "Calça Jeans", preco: 120, estoque: 5 },
  { id: 3, nome: "Tênis", preco: 200, estoque: 3 },
  { id: 4, nome: "Boné", preco: 30, estoque: 8 }
];

let carrinho = [];

function adicionarAoCarrinho(idProduto, quantidadeDesejada) {
  const produto = catalogo.find(item => item.id === idProduto);

  if (!produto) {
    console.log("Produto não encontrado");
    return;
  }

  if (produto.estoque < quantidadeDesejada) {
    console.log("Estoque insuficiente");
    return;
  }

  const itemCarrinho = carrinho.find(item => item.nome === produto.nome);

  if (itemCarrinho) {
    itemCarrinho.quantidade += quantidadeDesejada;
  } else {
    carrinho.push({
      nome: produto.nome,
      preco: produto.preco,
      quantidade: quantidadeDesejada
    });
  }

  produto.estoque -= quantidadeDesejada;

  console.log(`${produto.nome} adicionado(a) ao carrinho!`);
}

function calcularTotal() {
  return carrinho.reduce((total, item) => {
    return total + (item.preco * item.quantidade);
  }, 0);
}

function finalizarCompra() {
  const total = calcularTotal();
  let desconto = 0;

  if (total > 200) {
    desconto = total * 0.10;
  }

  const totalFinal = total - desconto;

  console.log("RESUMO DA COMPRA:");
  console.log(carrinho);

  console.log(`Total: R$ ${total.toFixed(2)}`);
  console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
  console.log(`Total a pagar: R$ ${totalFinal.toFixed(2)}`);

  carrinho = [];
}

adicionarAoCarrinho(1, 2);
adicionarAoCarrinho(3, 1);
adicionarAoCarrinho(2, 1);

console.log("\nCarrinho atual:");
console.log(carrinho);

console.log("\nTotal sem desconto:");
console.log("R$", calcularTotal());

finalizarCompra();

console.log("\nCarrinho após finalizar compra:");
console.log(carrinho);