//++++++usar para HTML ++++++
let nombreAlumno = document.getElementById("nombreAlumno");
let notaPractica = document.getElementById("notaPractica");
let notaProblemas = document.getElementById("notaProblemas");
let notaTeorica = document.getElementById("notaTeorica");
let btnCalcular = document.getElementById("btnCalcular");
// ++++++++++ usar para consola +++++
//let notaPractica: number = 0;
//let notaProblemas: number = 10;
//let notaTeorica: number = 10;

btnCalcular.addEventListener("click", () => {
let notaPracticaFinal: number = 10 * Number(notaPractica.value) / 100;
let notaProblemasFinal: number = 50 * Number(notaProblemas.value) / 100;
let notaTeoricaFinal: number = 40 * Number(notaTeorica.value) / 100;

if (notaPractica <= 10) {
  //notaPracticaFinal = (10 * notaPractica) / 100;
  console.log("Su nota practica es: ", notaPracticaFinal);
} if (notaProblemas <= 10) {
  //notaProblemasFinal = (50 * notaProblemas) / 100;
  console.log("Su nota de problemas es: ", notaProblemasFinal);
} if (notaTeorica <= 10) {
  //notaTeoricaFinal = (40 * notaTeorica) / 100;
  console.log("Su nota Teorica es: ", notaTeoricaFinal);
} else {
  console.log("Error");
}

let notaTotal: number =
  notaPracticaFinal + notaProblemasFinal + notaTeoricaFinal;
console.log("Su calificacion final es", notaTotal);
}