// Meu objetivo é entrar com números quaisquer e classifica-los em maior ou menor.
var primeiroN1 = prompt('Digite o primeiro número: ');

var n1, n2;

while (num != 'fim') {
    
    var num = prompt('Digite um número: ');

    n1 = parseInt(primeiroN1);
    n2 = parseInt(num);

    if (n1 > n2) { 
        alert("O maior número até agora é" + ' ' + n1 + ' ' + "e o menor número é" + ' ' + n2);
    }else {
        if (n1 < n2) {  
            alert("O maior número até agora é " + ' ' + n2 + ' ' + "e o menor número é" + ' ' + n1);
        }
    }

    primeiroN1 = n2;
}


