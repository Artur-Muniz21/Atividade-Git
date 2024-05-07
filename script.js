const valorA = document.getElementById("valorA");
const valorB = document.getElementById("valorB");

const formulario = document.getElementById("formulario");

const soma = document.getElementById("somar");
const subtracao = document.getElementById("subtracao");

function somar(){
    const resultado = parseFloat(valorA.value) + parseFloat(valorB.value)
    return resultado.toFixed(2);
};

function subtrair(){
    const resultado = parseFloat(valorA.value) - parseFloat(valorB.value)
    return resultado.toFixed(2);
};

formulario.onsubmit = (e) => {

    e.preventDefault();

    soma.value = somar();
    subtracao.value = subtrair();
};