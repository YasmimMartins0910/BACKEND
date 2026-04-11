function login(user, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pass === '1234') resolve('Login ok')
      else reject('Senha errada')
    }, 2000)
  })
}
