function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

const item = new Produto("Teclado", 150);
console.log(item.preco);