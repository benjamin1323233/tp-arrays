/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
const ciudades = ["paris"]
do{
    let anadidas = prompt("ingresa el nombre de una ciudad")
    ciudades.unshift(anadidas);
}while(confirm ("desea realizar otra operacion"));
    document.writeln("<ul>")
    for(let lista=0;lista <=ciudades.length-1;lista++){
        document.writeln("<li>",ciudades[lista],"</li>")
    }
