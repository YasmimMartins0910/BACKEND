let aluno = {
    nome: "Yasmim",
    notas: [6, 7, 8]
}

let soma = aluno.notas.reduce((acc,n) => acc + n, 0)

let media = soma / aluno.notas.length

if (media >= 7){
    console.log("Aprovada")
} else {
    console.log("Reprovada")
}