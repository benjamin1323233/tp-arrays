/* Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
 luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:




Input:
lado A = 24
lado B = 5

Output: 58
*/
function perimetrorec (a,b){
  const p = 2*(a+b)
  document.writeln("el perimetro del rectangulo es de ", p)
}
const a = parseInt(prompt("ingresa el largo del rectangulo"))
const b = parseInt(prompt("ingresa el largo del rectangulo"))
perimetrorec (a,b)

