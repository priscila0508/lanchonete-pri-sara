const button = document.querySelector("button")
const inputSalario = document.getElementById("salario")
const paragrafoResultado = document.getElementById("resultado")

button.onclick = calcularValor

function calcularValor() {
    const salario = inputSalario.valueAsNumber

    if (inputSalario.value === "") {
        alert("Digite um valor válido.")
        return
    }

    if (salario <= 1000) {
        const salarioFinal = salario * 1.2 
        const salarioConvertido = salarioFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `Novo salario:  ${salarioConvertido}`

        paragrafoResultado.textContent = `Porcentagem =  20%`
    }

    else if (salario > 1000 && salario <= 3000) {
        const salarioFinal = salario * 1.15
        const salarioConvertido = salarioFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `Novo salario:  ${salarioConvertido}`

        paragrafoResultado.textContent = `Porcentagem =  20%`
    }

    else if (salario > 3000 && salario <= 8000) {
        const salarioFinal = salario * 1.1
        const salarioConvertido = salarioFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `Novo salario:  ${salarioConvertido}`

        paragrafoResultado.textContent = `Porcentagem =  20%`
    }

    else if (salario > 8000) {
        const salarioFinal = salario * 1.05 
        const salarioConvertido = salarioFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `Novo salario:  ${salarioConvertido}`

        paragrafoResultado.textContent = `Porcentagem =  20%`
    }
}