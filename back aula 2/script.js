//const cpf = "041.828.500-41"
//let idade = 18

//console. log("A idade inicial é ", + idade)

//idade += 1

//console. log("A idade é ",+ idade)

//cpf = "1";

//let saldoA = 100;
//let saldoB = saldoA;

//saldoB = 200;

//console.log(saldoA);
//console.log(saldoB);

//let Aluno1 = {
  //  nome: "Victor", 
    //idade: 31
//}

//console.log(Aluno1)

//Aluno2 = Aluno1;

//console.log(Aluno2)

//console.log("Aluno1" + Aluno1)
//console.log("Aluno2" + Aluno2)

//let nome = "Yasmim";
//let idade = 31
//let matriculado = true;
//let n1 = 9;
//let n2 = 8;
//let n3 = 7;

//let media = (n1 + n2 + n3) / 3

//console.log("Nome e: " + nome);

//if (matriculado) {
  //  console.log("Nota1 e " + n1);
    //console.log("Nota1 e " + n2);
   // console.log("Nota1 e " + n3);
  //  console.log("Media e " + media);

    //let situacao = media >= 7 ? "Aprovado" : "Reprovado"

    //console.log(`Situacao: ${situacao}`)
//}else {
  //  console.log("Sem matricula!!!")
//}

//let numeroSorteado;

//do {
  //  numeroSorteado = Math.random();

    //console.log(`O numero sorteado e ${numeroSorteado}`)
//} while(numeroSorteado < 0.8)

  //  console.log("Sucesso !!!")

const dbConfi = {
    porta: 5344,
    user: "admin",
    AtributoExtra: "lelele"
}

for(const chave in dbConfi ) {
    const valorReal = dbConfi[chave];
    console.log(`${chave} -> ${valorReal} `)
}
