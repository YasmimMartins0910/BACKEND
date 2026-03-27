//const alunos = [
  //{ nome: "Ana", nota: 8.5 },
  //{ nome: "Bruno", nota: 7.2 },
  //{ nome: "Carla", nota: 9.1 },
  //{ nome: "Diego", nota: 6.8 },
  //{ nome: "Eduarda", nota: 8.9 },
  //{ nome: "Felipe", nota: 7.5 },
  //{ nome: "Gabriela", nota: 9.3 },
  //{ nome: "Henrique", nota: 6.7 },
  //{ nome: "Isabela", nota: 8.0 },
  //{ nome: "João", nota: 7.9 }
//];


//const filtro = alunos.filter(function(valor) {
   // return valor.nota > 8;


//});

//console.log(filtro)

//const listaAlunos = [
    
//];

//filtrar maior que 7 
//let alunosAprovados = filtrarAlunosAprovados(liataAlunos);
//console.log(alunosAprovados);

//let alunosAprovados2 = filtrarAlunosAprovados(listaAlunos2);
//console.log(`Alunos aprovados lista 2: ${JSON.stringify(alunosAprovados2)}`)

//function filtrarAlunosAprovados(Alunos) {
   // return alunos.filter(function (aluno) {
       // return aluno.nota > 7;
   // });
//}
   
   

//const nomeAlunos = alunos.map(function(lista) {
   // return lista.nome
//});

//console.log(nomeAlunos)


//const mediasNotas = alunos.reduce(function(acumulador, aluno) {
   // return acumulador + aluno.nota;

//}, 0);

//const media = mediasNotas / alunos.length;
//console.log(media)

//function somar (a, b) {
    //return c + d;
//}

//console.log(Somar(5, 10));

//const nomesAlunos = listaAlunos.map(function(aluno) {
  //  return {nome: aluno.nome, status: aluno.nota > 7 ? `Aprovado` : `Reprovado`}
//});

//console.log(nomesAlunos);

const listaAlunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 7.2 },
  { nome: "Carla", nota: 9.1 },
  { nome: "Diego", nota: 6.8 },
  { nome: "Eduarda", nota: 8.9 },
  { nome: "Felipe", nota: 7.5 },
  { nome: "Gabriela", nota: 9.3 },
  { nome: "Henrique", nota: 6.7 },
  { nome: "Isabela", nota: 8.0 },
  { nome: "João", nota: 7.9 }
];

let alunosAprovados = filtrarAlunosAprovados(listaAlunos);
console.log(alunosAprovados)

function filtrarAlunosAprovados(alunos){
return alunos.filter(function(valor) {
    return valor.nota > 8;


});

}

let nomesAlunos = listaNomes(listaAlunos);
console.log(nomesAlunos)

function listaNomes(nomes) {
 return nomes.map(function(lista) {
    return lista.nome
});

}