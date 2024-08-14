const plantas = [
  {
    id: 1,
    nombre: "Violetas africanas (Saintpaulia)",
    descripcion:
      "Son plantas de crecimiento más horizontal que vertical, suelen tener de 6 a 15 cm de alto y 6 a 30 cm de ancho, y si crecen en maceta, estas dimensiones pueden acortarse. Las hojas son redondas u ovaladas de 2,5 a 8,5 mm de largo con un pecíolo de entre 2 a 10 cm, finamente vellosas y con textura carnosa. Las flores tienen de 2 a 3 cm de diámetro, con una corola aterciopelada de cinco lóbulos («pétalos») y surgen agrupadas en número de 3 a 10 o más sobre tallos delgados (pedúnculos). No desarrollan demasiada raíz, pues estas llegan a medir de entre 7 a 12 cm de profundidad. El color de la flor en las especies silvestres puede ser violeta, púrpura, azul claro, azul índigo o blanco, aunque existen casos en los que estos colores pueden mezclarse.",
    imagen: "/2024-tp1-html/assets/saintpaulia.png",
  },
  {
    id: 2,
    nombre: "Cunas de Moisés (Spathiphyllum)",
    descripcion:
      "El Spathiphyllum es un género de plantas con flores de la familia Araceae. Es originario de México, América tropical, Malasia y oeste del Pacífico. Son plantas perennes herbáceas con hojas grandes de 12-65 cm de largo y 3,25 cm de ancho. Las flores se producen en una espádice, rodeado por una espata de 10-30 cm de largo, de color blanco, amarillo, o verdoso.</br>La planta requiere gran cantidad de agua para sobrevivir con riegos profusos en siembra in situ y media sombra o claridad pues la luz directa puede quemar las hojas.</br> Existen 36 tipos de Spathiphyllum en el mundo y solamente 3 se encuentran en el Viejo Mundo.",
    imagen: "/2024-tp1-html/assets/spathiphyllum.png",
  },
  {
    id: 3,
    nombre: "Dieffenbachia",
    descripcion:
      'Dieffenbachia es un género de plantas tropicales de la familia de las aráceas, notables por las características manchas claras en sus hojas. Se conocen cerca de 30 especies, algunas utilizadas como plantas de interior debido a su tolerancia a la sombra. La especie más cultivada es Dieffenbachia bowmanii.</br>Introducida en Europa a finales del siglo XIX, proviene fundamentalmente de las selvas vírgenes de América Central y América del Sur. El nombre fue puesto en honor al médico y naturalista alemán Ernst Dieffenbach. En Panamá se le conoce como "pita o pito" en las áreas interiores del país y llamada comúnmente lotería, en el resto de la nación.2​ y en México y Perú galatea.',
    imagen: "/2024-tp1-html/assets/dieffenbachia.png",
  },
];

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
