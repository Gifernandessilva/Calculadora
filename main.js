function insert(num) {
  var numero = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = numero + num
}
// botão de limpar //
function clean() {
  document.getElementById('resultado').innerHTML = ''
}
// botao de apagar //
function back() {
  var resultado = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = resultado.substring(
    'resultado'
  ).innerHTML = resultado.substring(0, resultado.length - 1)
}
// botao resultado //
function calcular() {
  var resultado = document.getElementById('resultado').innerHTML
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado)
  }
}
