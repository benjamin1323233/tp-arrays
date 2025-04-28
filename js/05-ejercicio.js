/*Definir una función que muestre información sobre una cadena de
 texto que se le pasa como argumento. A partir de la cadena que se le
  pasa, la función determina si esa cadena está formada sólo por mayúsculas,
   sólo por minúsculas o por una mezcla de ambas.*/
   
   function mayusominus(frase) {
    if (frase.trim() === "") {
        document.writeln("No se ha ingresado texto");
    } else {
        if (frase === frase.toUpperCase()) {
            document.writeln("La frase está escrita en mayúsculas");
        } else if (frase === frase.toLowerCase()) {
            document.writeln("La frase está escrita en minúsculas");
        } else {
            document.writeln("La frase está escrita con mayúsculas y minúsculas");
        }
    }
}

const frase = prompt("Ingrese texto:");
mayusominus(frase)
