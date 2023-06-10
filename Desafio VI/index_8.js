var numeros = prompt('Digite um número: ');

var contador = numeros;

var fatorial = numeros

while (contador > 1) {

    contador = contador - 1; // fatorial 
    
    fatorial = fatorial * contador;

}

if (numeros == 0) {
    alert(numeros + '! =' + ' ' + 1);
}else {
    alert(numeros + '! =' + ' ' + fatorial);
}
    