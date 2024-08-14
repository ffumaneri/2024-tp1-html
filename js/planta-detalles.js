import plantas from "./plantas.js";

const parametrosUrl = new URLSearchParams(window.location.search);
const idPlanta = parseInt(parametrosUrl.get("id"));

const plantaSeleccionada = plantas.find((planta) => planta.id === idPlanta);
if (plantaSeleccionada) {
  document.getElementById("nombre-planta").innerText =
    plantaSeleccionada.nombre;
  document.getElementById("descripcion-planta").innerText =
    plantaSeleccionada.descripcion;
  document.getElementById("imagen-planta").src = plantaSeleccionada.imagen;
} else {
  document.getElementById("planta-detalles").innerHTML =
    "<p>Planta no encontrada.</p>";
}
