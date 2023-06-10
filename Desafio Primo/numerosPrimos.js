// Entre com um número para saber se ele é primo e retorne uma mensagem validando. 
// Crie uma função e use console.log.
function numPrimo() {
    
    var numero = 0
    
    while (numero < 100) {
            
    numero = numero + 1;

    if ((numero == 1) || ((numero != 2) && (numero % 2 == 0)) || ((numero != 3) && (numero % 3 == 0))) {
        console.log(numero +' '+ "Não é primo.");
    }else {
        if ((numero > 1) || (numero == 5) || (numero == 7)) {
            console.log(numero +' '+ "Primo.");
        }
    }
}

        
}

numPrimo();


    





    