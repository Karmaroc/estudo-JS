/*
var x = 10;

var y = 5; 

if ((x > 6) || (y > 6)) {

    console.log('x ou y, ou dos dois, são maiores que 6');
}

if ((x > 3) || (y > 3)) {

    console.log('x ou y, ou os dois, são maiores 3');
}
*/

var novaEntradaString = '0';

var resultadoSomas = 0;

var n1;


while (novaEntradaString != "fim") {
    

    novaEntradaString = prompt('Entre com um número para somar, ou digite "fim" para encerrar:');
    
    if (novaEntradaString == "fim") {
        
        alert('Você escreveu fim!')
    }else {
        
        n1 = parseInt(novaEntradaString);
    
        resultadoSomas = resultadoSomas + n1;
    
        alert('O resultado até o momento é:'+ " " + resultadoSomas);
    }
   
}




    

