var imc = prompt('Digite um IMC: ');

if (imc >= 40) {
    alert('Obesidade III')
}else {
    if (imc >= 35) {
        alert('Obesidade II')
    }else {
        if (imc >= 30) {
            alert('Obesidade I')
        }else {
            if (imc >= 25) {
                alert('Acima do peso')
            }else {
                if (imc >= 18.5) {
                    alert('Peso normal')
                }else {
                    if (imc >= 17) {
                        alert('Abaixo do peso')
                    }else {
                        if (imc < 17) {
                            alert('Muito abaixo do peso')
                        }
                    }
                }
            }
        }
    }
}