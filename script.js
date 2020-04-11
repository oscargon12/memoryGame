// var texto = "Que haceee";
// console.log(texto);

function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2019 - fecha;
  var bienvenida = document.querySelector("#bienvenida");
  var mensajeEdad;
  var mensaje;

  if (edad > 30) {
    mensajeEdad = "Abuelo!";
  } else if (edad < 30) {
    mensajeEdad = "Jovenzuelo!";
  } else {
    mensajeEdad = "No me lo creo";
  }

  var mensaje =
    "<p>Hola, " + nombre + ", tienes " + edad + " años " + mensajeEdad + "</p>";
  bienvenida.innerHTML = mensaje;
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
