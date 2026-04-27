function validarJSON(str) {
  try {
    return JSON.parse(str)
  } catch {
    return { erro: 'JSON inválido' }
  }
}
