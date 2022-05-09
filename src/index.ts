let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let btnEnviar = document.getElementById("enviar");

rotulo1.innerHTML = "Ingrese el numero a multiplicar";
rotulo2.innerHTML = "Ingrese hasta que numero multiplicar";

btnEnviar.addEventListener("click", () => {
  let numMultiplicar: number = Number(dato1.value);
  let hastaMultiplicar: number = Number(dato2.value);
  let resultado: number = 0;
  for (let contador: number = 1; contador <= hastaMultiplicar; contador++) {
    resultado = numMultiplicar * contador;
    console.log(numMultiplicar + "x" + contador + "=" + resultado);
  }
});
