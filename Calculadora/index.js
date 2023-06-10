var x;

var n1;

var n2;

x = prompt('Entre com uma letra para escolher a operação matemática: (s)ubtração, (m)ultiplicação ou (d)ivisão.')

n1 = prompt('Entre com o primeiro número:');
n2 = prompt('Entre com o segundo número:');

alert('O resultado é...');

if (x == 's') alert(n1 - n2);
if (x == 'm') alert(n1 * n2);
if (x == 'd') alert(n1 / n2);

alert('Olá Mundo, eu venci ele!')



