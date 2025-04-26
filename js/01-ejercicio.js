//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
document.writeln("<h1>Lista de meses</h1>");
const meses = [
  "enero",
  "febrero",
  "marzo",
  "Abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
document.writeln("<ul>");
for (let mes = 0; mes < 12; mes++) {
  document.writeln("<li>", meses[mes], "</li>");
}
document.writeln("</ul>");