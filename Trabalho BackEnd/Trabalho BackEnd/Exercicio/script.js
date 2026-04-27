/* const cpf = "041.828.500-41"
let idade = 18

console.log("A idade inicial é ", + idade)

idade += 1

console.log("A idade é ", + idade)

cpf = "1";  
*/

/*
let config1 = { porta: 80};
let config2 = config1;

config2.porta = 443;

console.log("É ", config1) */

/*
let nome = "João"
let idade = 18
let matriculado = true
let nota1 = 10
let nota2 = 10
let nota3 = 10

let  media = (nota1 + nota2 + nota3) / 3

console.log("Nome aluno:",nome, "\nMedia: ", media)

if (media >= 7)
    console.log("Aprovado")
else
    console.log("Reprovado")
    */

/*
let numeroSorteado;

do {
    numeroSorteado = Math.random();
    console.log(`O numero sorteado é ${numeroSorteado}`);

    
}while (numeroSorteado < 0.8)   

console.log("encontrado") */

/*
let contador = 0;

while (contador <= 100) {
console.log("Carregando")
console.log(contador)

contador += 20;

}
console.log(contador)
console.log("Logado") */

const dbConfig = { porta: 5433, user: "Julia"}

for(const chave in dbConfig) {
    const valorReal = dbConfig[chave];
    console.log(`${chave} é ${valorReal}`)
}







