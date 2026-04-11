function cofre() {
  let senha = '123'

  return {
    alterarSenha(velha, nova) {
      if (velha === senha) senha = nova
    },
    validar(tentativa) {
      return tentativa === senha
    },
  }
}
