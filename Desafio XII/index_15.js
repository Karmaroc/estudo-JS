var array = [10, 25, 30, 45, 50, 65];

function inversao() {

var inverso = " ";

    for (var i = 5; i >= 0; i--) {

        inverso = inverso + array[i] + ", ";
        
    }
    inverso = inverso.substring(0, inverso.length - 2)
    return console.log(inverso);
}

inversao();