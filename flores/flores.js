document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const florSeleccionada = urlParams.get('flor'); 

    fetch('flores.json')
        .then(response => response.json()) 
        .then(data => 
        {
            const flor = data.flores.find(f => f.nombre.toLowerCase() === florSeleccionada.toLowerCase());

            if (flor) {
                // Actualizar la imagen y la descripción en el HTML
                document.querySelector('.flower-image').src = flor.imagen;
                document.querySelector('.flower-image').alt = flor.nombre;
                document.querySelector('.description').textContent = flor.descripcion;
            } else {
                // Manejar el caso donde no se encuentra la flor
                document.querySelector('.content').innerHTML = '<p>Flor no encontrada.</p>';
            }
        })
        .catch(error => console.error('Error al cargar los datos de las flores:', error));
});