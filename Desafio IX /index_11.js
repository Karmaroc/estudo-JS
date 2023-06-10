
function validaPrimo(numero) {

    console.log("Entrando na função validaPrimo para testar se" + numero + "é primo");

    var contador = 2;

    while (contador < (numero + 1) / 2) {

        console.log("Testando se " + numero + "é divisível por" + contador);

        if (numero % contador == 0) {

            console.log("Descobrimos que " + numero + "é divisível por" + contador + "e portando não é primo.")
        
            return false;
        }
        contador ++;
    }
    console.log("Fizemos todos os testes" + numero + "é primo");

    return true;
}

var contadorPrimos = 0;

var numeroAtual = 2;

while (contadorPrimos < 10) {
    console.log("-----------------------")

    console.log("Vamos validar se" + numeroAtual + "é primo chamando a função validaPrimo");

    if (validaPrimo(numeroAtual)) {
        console.log(numeroAtual);
        contadorPrimos++;
        console.log("Este é nosso número primo de número " + contadorPrimos);

    }
    numeroAtual++;
}


/*
var pessoa = {nome: "Vitor", idade: 22, cpf: "149.135.046-65"};
alert(pessoa.nome);

pessoa.idade += 1;

alert("A idade agora é" + pessoa.idade);
alert(typeof pessoa);

*/
/*
var ponto3d = {x:0, y:10, z:10};

ponto3d.x += 30;

console.log(ponto3d.x)

*/

/*
var pessoa = {
    nome: "João",
    sobrenome: "da Silva",
    nomeCompleto: function() {
        return this.nome + " " + this.sobrenome;


    }
}

alert(pessoa.nomeCompleto());

*/