const button = document.querySelector("button")
const codigo = document.getElementById("codigo")
const quantidade = document.getElementById("quantidade")
const paragrafoResultado = document.getElementById("resultado")

button.onclick = calcularValor

function calcularValor() {
    const ValorProduto = codigo.valueAsNumber
    const quantidadeComprada = quantidade.valueAsNumber

    if (codigo.value === "") {
        alert("Digite um valor válido.")
        return
    }

    if(codigo.value === 1){
        const produto1 = codigo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `
            Valor a pagar:  ${produto1}
        `

    }

    else if(codigo.value === 2){

        const produto2 = codigo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `
            Valor a pagar:  ${produto2}
        `
    }

    else if(codigo.value === 3){

        const produto3 = codigo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `
            Valor a pagar:  ${produto3}
        `
    }

    else if(codigo.value === 4){

        const produto4 = codigo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `
            Valor a pagar:  ${produto4}
        `
    }

    else if(codigo.value === 5){

        const produto5 = codigo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `
            Valor a pagar:  ${produto5}
        `
    }




    if (dinheiroRecebido >= calculo) {
        const troco = dinheiroRecebido -  calculo
        const trocoConvertido = troco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        paragrafoResultado.textContent = `
            TROCO = ${trocoConvertido}
        `
    } else {
        const faltando = calculo - dinheiroRecebido

        const faltandoConvertido = faltando.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `
            DINHEIRO INSUFICIENTE, FALTAM ${faltandoConvertido}
        `
    }

    preço.value = ""
    quantidade.value = ""
    valor.value = ""
}