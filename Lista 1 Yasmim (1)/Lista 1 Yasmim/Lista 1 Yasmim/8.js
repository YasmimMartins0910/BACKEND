function contagemA(texto) {
    let contador = 0
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            contador++
        }
    }
    console.log(contador)
}

contagemA("banana")