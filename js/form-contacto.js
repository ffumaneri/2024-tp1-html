import plantas from "./plantas.js";

document
  .getElementById("formulario-contacto")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
    location.reload();
  });

let selectTipo = document.getElementById("select-tipo");

plantas.forEach((planta) => {
  let option = document.createElement("option");
  option.innerText = planta.nombre;
  option.value = planta.id;
  selectTipo.appendChild(option);
});
