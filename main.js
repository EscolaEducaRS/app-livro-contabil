'use strict'

const numeroRandon = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    return a
}

const valorRandon = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    return 'R$ ' + a
}

function gerandoAtivi() {
    'use strict'
    let enunciado = document.getElementById('enunciadoId')
    //${razonetes} ${balancete} ${resultado} ${demostrativo} ${balançoPatrimonial}  
    const razonetes = document.getElementById('razonetesId')
    const balancete = document.getElementById('balancetesId')
    const resultado = document.getElementById('resultadodoExeId')
    const demostrativo = document.getElementById('demostrativoId')
    const balançoPatrimonial = document.getElementById('balancoPatrimId')

    let checando = []
    if (razonetes.checked){
        checando += ', Razonetes'
    }
    if (balancete.checked) {
        checando += ', Balancete de Verificação'
    }
    if (resultado.checked) {
        checando += ', Resultado do Exercício'
    }
    if (demostrativo.checked) {
        checando += ', Demostrativo'
    }
    if (balançoPatrimonial.checked) {
        checando += ', Balanço Patrimonial'
    }

    let parteFim = {
        1: ' em dinheiro.',
        2: ' à vista.',
        3: ' à prazo.',
        4: ' em cheque.',
        5: ' pago em 30, 60 e 90 dias.',
        6: ' sendo, metade à vista e o restante à prazo.',
        7: ' sendo, 20% à vista e o restante à prazo.',
        8: ' sendo, 15% à vista e o restante em 30, 60 e 90 dias.',
    }
    let parte1 = 'Abriu uma empresa com um valor de ' + valorRandon(40000, 129999) + ',00' + parteFim[1]

    let parte2 = {
        1: function () {
            let a = `Venda de Mercadorias no valor de 
            ${valorRandon(1000, 10000)},00 ${parteFim[numeroRandon(1, 4)]}`
            return a;
        },

        2: function () {
            let a = `Recebimento de Receita no valor de 
            ${valorRandon(1000, 10000)},00 ${parteFim[numeroRandon(1, 4)]}`
            return a;
        },
        3: function () {
            let a = `Recebimento de Serviços no valor de 
            ${valorRandon(1000, 10000)},00 ${parteFim[numeroRandon(1, 4)]}`
            return a;
        },
        4: function () {
            let a = `Compra de Mercadorias no valor de 
            ${valorRandon(1000, 10000)},00 ${parteFim[numeroRandon(1, 4)]}`
            return a;
        },
        5: function () {
            let a = `Pagamento de Salário no valor de 
            ${valorRandon(1000, 10000)},00 ${parteFim[numeroRandon(1, 4)]}`
            return a;
        },
        6: function () {
            let a = `Compra de um Veículo de 
            ${valorRandon(15000, 30000)},00 ${parteFim[numeroRandon(1, 4)]}`
            return a;
        },
        7: function () {
            let a = `Pagamento de despesas com aluguel de 
            ${valorRandon(1000, 8000)},00 ${parteFim[numeroRandon(1, 4)]}`
            return a;
        },
        8: function () {
            let a = `Abertura de Conta Corrente no valor de 
            ${valorRandon(1000, 10000)},00 ${parteFim[numeroRandon(1, 2)]}`
            return a;
        },
        9: function () {
            let a = `Pagamento de despesas com estoque de material de expediente no valor de 
            ${valorRandon(500, 3000)},00 ${parteFim[numeroRandon(1, 4)]}`
            return a;
        },
        10: function () {
            let a = `Pagamento de despesas com impostos no valor de
            ${valorRandon(1000, 10000)},00 ${parteFim[numeroRandon(1, 4)]}`
            return a;
        },
        11: function () {
            let a = `Pagamento de água/esgoto no valor de
            ${valorRandon(100, 600)},00 ${parteFim[numeroRandon(1, 2)]}`
            return a;
        },
        12: function () {
            let a = `Venda de Mercadorias no valor de 
            ${valorRandon(5000, 16000)},00 ${parteFim[numeroRandon(5, 8)]}`
            return a;
        },
        13: function () {
            let a = `Compra de Mercadorias no valor de 
            ${valorRandon(5000, 16000)},00 ${parteFim[numeroRandon(5, 8)]}`
        return a;
        },
        14: function () {
            let a = `Compra de um Veículo de 
            ${valorRandon(10000, 30000)},00 ${parteFim[numeroRandon(5, 8)]}`
            return a;
        },
        15: function () {
            let a = `Recebimento de duplicata no valor de  
            ${valorRandon(50000, 10000)},00 ${parteFim[numeroRandon(1, 4)]}`
            return a;
        },
    }

    let nivelId = document.getElementById('niveisId').selectedIndex + 1
    let dificuldadeId = document.getElementById('dificuldadeId').selectedIndex +1
    let nivel // quantidade do nivel 1 - 9 / nivel 2 - 12 / nivel 3 - 18

    if (nivelId == 1 ) {
        nivel = 9
    }else if (nivelId == 2) {
        nivel = 13
    }else if (nivelId == 3) {
        nivel = 19
    }

    
    parte1 = '1) ' + parte1

    enunciado.innerHTML = `
    <br><b>Fazer o Livro Diário${checando} dos lançamentos a seguir.</b><br><br>
    ${parte1}<br> 
    `
    if (dificuldadeId == 1) {
        for (let a = 2; a < nivel; a++) {
            let b = a + ') ' + parte2[numeroRandon(1, 10)]()
            enunciado.innerHTML += `${b}<br>`
        }
    }
    if (dificuldadeId == 2) {
        for (let a = 2; a < nivel; a++) {
            let b = a + ') ' + parte2[numeroRandon(1, 15)]()
            enunciado.innerHTML += `${b}<br>`
        }
    }
    if (dificuldadeId == 3) {
        console.log('testeeeeeeeeeee');
    }


    function tratandoTexto(n) {
        let textoEmLinha2 = []
        let textoEmLinha =[]
        let recebeTexto = enunciado.innerText
        textoEmLinha2 = recebeTexto.split(/\n/g)
        textoEmLinha = textoEmLinha2.slice(3,-1)
        
        //console.log(textoEmLinha[1]);
        return textoEmLinha[n] // retorna um array de inicio 0 e vai até o valor do "nivel"
    }
    // console.log(tratandoTexto(0)); 
    

    //${razonetes} ${balancete} ${resultado} ${demostrativo} ${balançoPatrimonial}  
}


