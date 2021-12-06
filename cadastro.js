// DATA DO EVENTO

const date = "20/12/2021"


if (date <= "20/12/2101") {
    console.log("Data permitida para cadastro")
}

else {
    console.log("Data expirada para cadastro")
}


//  PERMISSÃO DE IDADE

const age = 18

if (age >= 18) {
    console.log("Idade permitida para cadastro")
}

else {
    console.log("Cadastro negado devido menor de idade")
}


// LIMITE MÁXIMO DE PARTICIPANTES

const participants = 100

if (participants <=100) {
    console.log("Cadastro permitido")
}

else {
    console.log("Cadastro negado devido número de participantes excedido")
}