function calcular3(){
    let X = Number(document.getElementById('X').value)
    let Y = Number(document.getElementById('Y').value)
    
    if(X > 0 && Y > 0){
        document.getElementById('resultQuadrante').innerHTML = "Primeiro" 
    }else if(X < 0 && Y > 0){
        document.getElementById('resultQuadrante').innerHTML = "Segundo" 
    }else if(X < 0 && Y < 0){
        document.getElementById('resultQuadrante').innerHTML = "Terceiro" 
    }else if(X > 0 && Y < 0){
        document.getElementById('resultQuadrante').innerHTML = "Quarto" 
    }else if(X == 0 || Y == 0){
        document.getElementById('resultQuadrante').innerHTML = "Nao possui quadrante"
    }
}