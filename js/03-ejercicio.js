/*Escribir un script que simule el lanzamiento de dos dados.
 Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 
 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados 
 y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/

const resultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let repeticiones = 1; repeticiones < 51; repeticiones++) {
  let dadouno = Math.floor(Math.random() * (6 - 1) + 1);
  let dadodos =Math.floor(Math.random() * (6 - 1) + 1);
  suma = dadouno+dadodos-2
  resultados[suma]+= 1
}
document.writeln(`<table><tbody>`);
document.writeln(` <tr> `);
document.writeln("<td>resultados</td><td>apariciones</td>");
document.writeln(` </tr>  `);
for (let resu = 2; resu <= 12; resu++){ document.writeln(` <tr> `)
document.writeln("<td>", resu, "</td>", "<td>", resultados[resu - 2], "</td>");
document.writeln(` </tr>  `);}
document.writeln(`</tbody></table>`);
