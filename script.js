// Praticando com prototypes


const result = document.querySelector('.result'); // aparece o resultado no html
const button = document.querySelector('button');


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
    if(this.isSequencia()) return false;
    
}

ValidaCPF.prototype.isSequencia = function() {
    
}

button.addEventListener('click', () => {
    const inputValue = document.querySelector('#input-display').value;
    const cpf = new ValidaCPF(inputValue);

    if (cpf.valida()) {
        result.innerHTML = 'CPF Válido!';
    } else {
        result.innerHTML = 'CPF Inválido!';
    }
});