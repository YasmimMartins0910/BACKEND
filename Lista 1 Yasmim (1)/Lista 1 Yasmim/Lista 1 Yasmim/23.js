function api() {
  return new Promise((res, rej) => {
    Math.random() > 0.5 ? res('OK') : rej('Erro')
  })
}

async function teste() {
  try {
    let r = await api()
    console.log(r)
  } catch (e) {
    console.log('Tratado:', e)
  }
}
