var num1;
var num2;
var operacion;
function calcular() {
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var divicion = document.getElementById("divicion");
    var multiplicacion = document.getElementById("multiplicacion");
    var raiz = document.getElementById("raiz");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var resta = document.getElementById("resta");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var suma = document.getElementById("suma");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var igual = document.getElementById("igual");
    var cero = document.getElementById("cero");
    var punto = document.getElementById("punto");

    //eventos
    punto.onclick = function(e){
        resultado.textContent = resultado.textContent + ".";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        num1 = resultado.textContent;
        operacion = "+";
        limpiar();

    }
    resta.onclick = function(e){
        num1 = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        num1 = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    divicion.onclick = function(e){
        num1 = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    raiz.onclick = function(e){
         
        num1 = resultado.textContent;
        operacion = "√";
        limpiar();

    }
    igual.onclick = function(e){
        num2 = resultado.textContent;
        resolver();
    }
}
function limpiar(){
    resultado.textContent = "";
}
function resetear (){
    resultado.textContent = "";
    num1 = 0;
    num2 = 0;
    operacion = "";
}
function resolver(){
    var res = 0;
    switch (operacion){
        case "+":
        res = parseFloat(num1) + parseFloat(num2);
        break;
        case "-":
        res = parseFloat(num1) - parseFloat(num2);
        break;
        case "*":
        res = parseFloat(num1) * parseFloat(num2);
        break;
        case "/":
        res = parseFloat(num1) / parseFloat(num2);
        break;
        case "√":
        res = parseFloat(Math.sqrt(num2)); 
        break;
    }
    resetear();
    resultado.textContent = res;
}