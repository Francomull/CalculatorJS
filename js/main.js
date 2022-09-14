//Variables de los elementos

const txtOp1 = document.getElementById("op1")
const txtOp = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResult = document.getElementById("resultado")


function calcular (){
    const operador = txtOp.value
    const Op1 = parseFloat (txtOp1.value)
    const Op2 = parseFloat (txtOp2.value)

    if((operador == "+" || operador == "-" || operador == "/" || operador == "*") && !isNaN (Op1) 
    && !isNaN (Op2) ) {

        let resultado
        switch (operador){
            case "+": 
                resultado = Op1 + Op2
                break
            case "-":
                resultado = Op1 - Op2
                break
            case "/":
                resultado = Op1 / Op2
                break
            case "*":
                resultado = Op1 * Op2
                break
        }
        pResult.style = "color: black"
        pResult.innerText = "= " + resultado } 
        else{
            pResult.style = "color: red"
            pResult.innerText = "Caclulo imposible" }
    
} 