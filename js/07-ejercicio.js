/*Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 
1 al 10 del número elegido por el usuario.*/
function tablamultiplicar(numero){
  document.writeln(`<table><tbody>`);
  for(let multiplicacion= 1; multiplicacion <= 10;multiplicacion++){
  document.writeln(` <tr> `);
  document.writeln("<td>",numero,"x",multiplicacion,"</td>","<td>",numero*multiplicacion,"</td>");
  document.writeln(` </tr>  `);
  }
document.writeln(`</tbody></table>`);
}
const numero = parseInt(prompt("ingresa un numero para hacer la tabla de multiplicar"))
tablamultiplicar(numero)