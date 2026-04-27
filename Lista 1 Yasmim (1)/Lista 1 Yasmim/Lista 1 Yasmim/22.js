function buscarUsuario() {
  return new Promise((res) => setTimeout(() => res('Usuário'), 1000))
}

function buscarPosts() {
  return new Promise((res) => setTimeout(() => res('Posts'), 1000))
}

async function executar() {
  let user = await buscarUsuario()
  let posts = await buscarPosts()

  console.log(user, posts)
}
