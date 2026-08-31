const button = document.querySelector("button")
const inputCodigo = document.getElementById("codigo")
const inputQuantidade = document.getElementById("quantidade")
const paragrafoResultado = document.getElementById("resultado")

button.onclick = calcularValor

function calcularValor() {
    const codigo = inputCodigo.valueAsNumber
    const quantidade = inputQuantidade.valueAsNumber

    if (inputCodigo.value === "" || inputQuantidade.value === "") {
        alert("Digite um valor válido.")
        return
    }

    if (codigo === 1) {
        const total = quantidade * 5
        const produto1 = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `Valor a pagar:  ${produto1}`
    }

    else if (codigo === 2) {
        const total = quantidade * 3.50
        const produto2 = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `Valor a pagar:  ${produto2}`
    }

    else if (codigo === 3) {
        const total = quantidade * 4.80
        const produto3 = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `Valor a pagar:  ${produto3}`
    }

    else if (codigo === 4) {
        const total = quantidade * 8.90
        const produto4 = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `Valor a pagar:  ${produto4}`
    }

    else if (codigo === 5) {
        const total = quantidade * 7.32
        const produto5 = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `Valor a pagar:  ${produto5}`
    }
}