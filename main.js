'use strict'

const numeroRandon = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const valorRandon = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    return 'R$ ' + a
}


function gerandoAtivi() {
    let enunciado = document.getElementById('enunciadoId')
    let parte1 = 'Abriu uma empresa ' + valorRandon(40000,69999) + ',00'
    let parte2_1 = {
        2: 'Venda de Mercadorias  no valor de ',
        3: 'Recebimento de Receita no valor de ',
        1: 'Recebimento de serviços no valor de '
    }
    let parte2_2 = {
        3: 'Compra de Mercadorias no valor de ',
        4: 'Pagamento de salário no valor de ',
        5: 'Compra de um Veículo de ',
        6: 'Pagamento de despesas com aluguel de ',
        7: 'Abertura de conta corrente no valor de ',
        2: 'Pagamento de despesas com estoque de material de expediente no valor de ',
        1: 'Pagamento de despesas com impostos no valor de '
    }
    let parte2_3 = {
        1: ' em dinheiro.',
        2: ' à vista.',
        3: ' à prazo.',
        4: ' em cheque.'
    }

    let parte3 = ''
    let nivel = 9

    
    parte1 = '1) ' + parte1


    enunciado.innerHTML = `
    <br>Fazer o Livro Diário dos lançamentos a seguir. <br><br>
    ${parte1} <br> ${parte3}         `


    for (let a = 2; a < nivel; a++) {
        if (a % 2 == 0) {

            let b = a + ') ' + parte2_1[numeroRandon(1,3)]

            enunciado.innerHTML += `${b}${valorRandon(1000,9000)},00 ${parte2_3[numeroRandon(1,4)]}<br>`

            // console.log(b);
        }

        if (a % 2 != 0) {
            let c = a + ') ' + parte2_2[numeroRandon(1,7)]
            enunciado.innerHTML += `${c}${valorRandon(1000,9000)},00 ${parte2_3[numeroRandon(1,4)]}<br>`
            // console.log(c);
        }



    }


    //${razonetes} ${balancete} ${resultado} ${demostrativo} ${balançoPatrimonial}

}


