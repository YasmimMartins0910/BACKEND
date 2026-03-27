const resposta = {nome: "Joao", dev: true}


for (const i in resposta) {
    
    const j = resposta[i];
    console.log(`${i} -> ${j}`)
}