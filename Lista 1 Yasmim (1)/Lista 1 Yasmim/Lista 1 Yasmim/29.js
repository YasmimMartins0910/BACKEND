function agendar(msg, tempo) {
  return new Promise((res) => {
    setTimeout(() => res(msg), tempo)
  })
}
