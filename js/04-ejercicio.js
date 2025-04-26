/*Escribir el código de una función a la que se pasa como parámetro un número entero y
 devuelve como resultado una cadena de texto que indica si el número es par o impar.
 Mostrar por pantalla el resultado devuelto por la función.*/
 function paroimpar(){
    const numero = parseInt(prompt("escribe un numero para saber si es par o impar"))
    let texto = "" 
if (numero % 2 == 0){
  document.writeln("tu numero es par")
}else{
  document.writeln("tu numero es impar")
}
 }
 paroimpar()