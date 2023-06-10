let numeros, operador, n1;

let resultado = 0;


while (numeros != 'fim' || operador != 'fim') {
    numeros = prompt('Digite um número: ');
    operador = prompt('Digite um operador: ');

    n1 = parseInt(numeros);

    if (operador == 'a') {
        resultado = resultado + n1
        alert("Ultimo resultado da soma:" + ' ' + resultado)
    }else {
        if (operador == 's') {
            resultado = resultado - n1
            alert('Ultimo resultado da subtração:' + ' ' + resultado)
        }else {
            if (operador == 'm') {
                resultado = resultado * n1
                alert('Ultimo resultado da multiplicação:' + ' ' + resultado)
            }else {
                if (operador == 'd') {
                    resultado = resultado / n1
                    alert('Ultimo resultado da divisão:' + ' ' + resultado)
                }
            }
        }
    }
}

