const result = document.querySelector('.result'); // aparece o resultado no html
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const inputValue = document.querySelector('#input-display').value;
    const cpfLimpo = inputValue.replace(/\D+/g, '');
    const arrCpf = Array.from(cpfLimpo);
    const cpfParcial = arrCpf.slice(0, 9);

    
    const contaRes = (cpf) => {
        let inicial = cpf.length + 1;
        let res = cpf.reduce((acc, item) => {
            acc += (Number(item) * inicial);
            inicial--;
            return acc;
        }, 0)
        return res;
    }

    const geraDigito = (contaRes) => {
        const restoDiv = contaRes % 11;
        let digito = 11 - restoDiv;
        if (digito > 9) {
            digito = 0;
        }

        return String(digito);
    }

    const arrCpfDigUm = cpfParcial;
    arrCpfDigUm.push(geraDigito(contaRes(cpfParcial)));

    const arrCpfDigDois = arrCpfDigUm;
    arrCpfDigDois.push(geraDigito(contaRes(arrCpfDigUm)));

    if(arrCpfDigDois[9] === arrCpf[9] && arrCpfDigDois[10] === arrCpf[10]) {
        result.innerHTML = 'CPF Válido!'
    } else {
        result.innerHTML = 'CPF Inválido!'   
    }
});