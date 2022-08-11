function calcular(){
    let text = document.getElementById("text").value
    let salario = Number( document.getElementById("salario").value)
    let vendas = Number( document.getElementById("vendas").value)

    let resultado = salario + vendas *0.15
    document.getElementById('resultado').innerHTML = 'TOTAL = R$ ' + resultado.toFixed(2)

    document.getElementById("text").value = ''
    document.getElementById("salario").value = ''
    document.getElementById("vendas").value = ''
}