var secretNumber = parseInt(Math.random() * 11);
var tentativas = 3;

function chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(secretNumber);

  if (chute == secretNumber) {
    elementoResultado.innerHTML =
      "Parabéns! Você acertou, o número secreto é: " + secretNumber;
    document.getElementById("tentativas").innerHTML = " ";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um número de 0 á 10!";
  } else if (chute > secretNumber) {
    elementoResultado.innerHTML = "Incorreto! Tente um número menor";
    tentativas = tentativas - 1;
    document.getElementById(
      "tentativas"
    ).innerHTML = `Você tem mais ${tentativas} tentativas.`;
  } else if (chute < secretNumber) {
    elementoResultado.innerHTML = "Incorreto! Chute um número maior";
    tentativas = tentativas - 1;
    document.getElementById(
      "tentativas"
    ).innerHTML = `Você tem mais ${tentativas} tentativas.`;
  }

  if (tentativas < 1) {
    document.getElementById(
      "resultado"
    ).innerHTML = `Você Perdeu!O número secreto era:  ${secretNumber}`;
    document.getElementById("tentativas").innerHTML = " ";
  }
  document.getElementById("valor").value = "";
}