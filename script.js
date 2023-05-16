// Modularizando

let result = document.querySelector('.result'); // aparece o resultado no html
let button = document.querySelector('button');

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo == 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    
    let cpfParcial = this.cpfLimpo.slice(0, -2);
    let dig1 = this.criaDigito(cpfParcial);
    let dig2 = this.criaDigito(cpfParcial + dig1);
    let cpfGerado = cpfParcial + dig1 + dig2;

    console.log(cpfGerado);

    return cpfGerado === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    let cpfArr = Array.from(cpfParcial);
    let inicial = cpfArr.length + 1;
    let soma = cpfArr.reduce((acc, valor) => {
        acc += (Number(valor) * inicial);
        inicial--;
        return acc;
    },0);
    let digito = 11 - (soma % 11);
    if(digito > 9 ) {
        digito = 0;
    }
    return String(digito);
}


button.addEventListener('click', () => {
    let inputValue = document.querySelector('#input-display').value;
    let cpf = new ValidaCPF(inputValue);

    if (cpf.valida()) {
        result.innerHTML = 'CPF Válido!';
    } else {
        result.innerHTML = 'CPF Inválido!';
    }
});