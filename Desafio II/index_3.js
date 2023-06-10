var imc, peso, altura;

peso = prompt('Digite seu peso: ');
altura = prompt('Digite sua altura: ');

imc = peso / (altura * altura);

alert('Seu IMC é:' + ' ' + imc);

if (imc < 17) {
    alert('Muito abaixo do peso');
}
if (imc >= 17 && imc < 18.5) {
    alert('Abaixo do peso');
}
if (imc >= 18.5 && imc < 25) {
    alert('Peso normal');
}
if (imc >= 25 && imc < 30) {
    alert('Acima do peso');
}
if (imc >= 30 && imc < 35) {
    alert('Obesidade I');
}
if (imc >= 35 && imc < 40) {
    alert('Obesidade II (Severa)');
}
if (imc >= 40) {
    alert('Obesidade III (Mórbida)');
}