function saudacao(nome, horario) {

    if (horario < 0 || horario > 23) {
        console.log("Horário inválido")
        return
    }

    if (horario < 12) {
        console.log("Bom Dia, " + nome)
    } else if (horario >= 12 && horario < 18) {
        console.log("Boa Tarde, " + nome)
    } else {
        console.log("Boa Noite, " + nome)
    }
}

saudacao("Yasmim", 10)
saudacao("Yasmim", 14)
saudacao("Yasmim", 22)
