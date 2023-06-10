while (numeros != 'fim') {

    var numeros = prompt("Digite um número fatorial: ");
    
    var contador = numeros;    
    
    var fatorial = numeros;

    while (contador > 1) {

        contador = contador - 1;

        fatorial = fatorial * contador;

    }

    if (numeros == 0) {
        alert(numeros + '! =' + ' ' + 1);
    }else {
        if (numeros > 0) {
            alert(numeros + '! =' + ' ' + fatorial);
        }   
    }
    
}


