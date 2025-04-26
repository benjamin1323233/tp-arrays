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
document.writeln("el arreglo tiene ", ciudades.length , " elementos")
document.writeln("<ul><li>el primer elemento es ",ciudades[0], "</li>")
document.writeln("<li>el segundo elemento es ",ciudades[1], "</li>")
document.writeln("<li>el tercer elemento es ",ciudades[2], "</li>")
document.writeln("<li>el ultimo elemento agregado por el usuario es ",ciudades[ciudades.length-2], "</li>")
document.writeln("<li>el ultimo elemento es ",ciudades[ciudades.length-1], "</li>")
//agregar el cambio de el elemento 3
ciudades.splice(1,0,"barcelona")
document.writeln("<h1>Arreglo de ciudades</h1>")
    document.writeln("<ul>")
    for(let lista=0;lista <=ciudades.length-1;lista++){
        document.writeln("<li> Elemento: ",ciudades[lista],"</li>")
    }
