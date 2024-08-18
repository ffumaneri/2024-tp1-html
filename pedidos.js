window.addEventListener('load', function() {

    function displayPedidos() {
        const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        const pedidoBody = document.getElementById('pedido-body');

        pedidoBody.innerHTML = ''; 

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

    displayPedidos();

    document.getElementById('clear-pedidos').addEventListener('click', function() {
        const confirmacion = window.confirm("¿Estás seguro de que deseas limpiar todos los pedidos?");

        if (confirmacion) {
            localStorage.removeItem('pedidos');
            localStorage.removeItem('currentId');

            displayPedidos();
        }
    });
});
