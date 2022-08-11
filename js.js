function calcular(){
    let qtde = Number(document.getElementById("qtde").value)
    let valor = Number( document.getElementById("valor").value)
    let id = Number( document.getElementById("id").value)
    let qtde2 = Number( document.getElementById("qtde2").value)
    let valor2 = Number( document.getElementById("valor2").value)
    let id2 = Number( document.getElementById("id2").value)

    let resultado =  qtde*valor+ qtde2*valor2
    document.getElementById('resultado').innerHTML = 'VALOR A PAGAR: R$ ' + resultado.toFixed(2)

    document.getElementById("qtde").value = ''
    document.getElementById("valor").value = ''
    document.getElementById("id").value = ''
    document.getElementById("id").value = ''
    document.getElementById("valor2").value = ''
    document.getElementById("id2").value = ''
}