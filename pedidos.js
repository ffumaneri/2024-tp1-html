window.addEventListener('load', function() {
    // Obtén la lista de pedidos del localStorage
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    // Obtén el cuerpo de la tabla
    const pedidoBody = document.getElementById('pedido-body');

    // Llena la tabla con los pedidos
    pedidos.forEach(pedido => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${pedido.id}</td>
            <td>${pedido.nombre}</td>
            <td>${pedido.apellido}</td>
            <td>${pedido.tipoFlor}</td>
            <td>${pedido.descripcion}</td>
        `;
        pedidoBody.appendChild(tr);
    });
});

window.addEventListener('load', function() {
    // Función para mostrar los pedidos
    function displayPedidos() {
        const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        const pedidoBody = document.getElementById('pedido-body');

        pedidoBody.innerHTML = ''; // Limpia el contenido actual de la tabla

        pedidos.forEach(pedido => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${pedido.id}</td>
                <td>${pedido.nombre}</td>
                <td>${pedido.apellido}</td>
                <td>${pedido.tipoFlor}</td>
                <td>${pedido.descripcion}</td>
            `;
            pedidoBody.appendChild(tr);
        });
    }

    // Muestra los pedidos cuando se carga la página
    displayPedidos();

    // Añade el evento click al botón de limpiar
    document.getElementById('clear-pedidos').addEventListener('click', function() {
        // Limpia el localStorage
        localStorage.removeItem('pedidos');
        localStorage.removeItem('currentId');

        // Vuelve a cargar la página para reflejar los cambios
        displayPedidos();
    });
});
