var numero = "";

var array = [];

while (numero != 'fim') {

    numero = prompt("Digite um número ou 'fim' para encerrar:");

    if (numero != 'fim') {
        array.push(numero);
        alert(array)
    }
}

var inverso = "";

for (var i = array.length - 1; i >= 0; i--) {

    inverso += array[i] + ", ";
}

inverso = inverso.substring(0, inverso.length - 2);

alert(inverso);





