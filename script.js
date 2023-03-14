let display = document.getElementsByClassName("display");
let number = document.getElementsByClassName("number");
let plus = document.getElementsByClassName("plus");

//função para mostrar o value de um botão no display
function showDisplay(value) {
  display.value = this.value;
}