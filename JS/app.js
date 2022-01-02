var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function adicionar() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function remover() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}