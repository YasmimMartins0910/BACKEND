function transferir(a, b, valor) {
  try {
    if (a.saldo < valor) throw 'Saldo insuficiente'

    a.saldo -= valor
    b.saldo += valor
  } catch (e) {
    console.log(e)
  }
}
