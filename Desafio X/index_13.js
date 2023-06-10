var meuPrimeiroArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var ordemCerta = "";
var ordemErrada = "";

for (var i = 0; i < 10; i++) {

    ordemCerta = ordemCerta + meuPrimeiroArray[i] + ", ";

}

var tamanho = ordemCerta.length;
console.log("Tamanho:", tamanho);

ordemCerta = ordemCerta.substring(0, ordemCerta.length - 2);


for (var i = 9; i >= 0; i--) {

    ordemErrada += meuPrimeiroArray[i] + ", ";

}
ordemErrada = ordemErrada.substring(0, ordemErrada.length - 2);

console.log(ordemCerta); // Sem virgula.
console.log(ordemErrada); // Sem virgula.

var meuSegundoArray = [1, 2, 3];

meuSegundoArray[3] = 4;
meuSegundoArray[4] = 5;

var ordem1 = '';

for (var i = 4; i >= 0; i--) {

    ordem1 = ordem1 + meuSegundoArray[i] + ', ';
};

ordem1 = ordem1.substring(0, ordem1.length - 2);
console.log(ordem1);