document.getElementById('pedido-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const tipoFlor = document.getElementById('tipo-flor').value;
    const descripcion = document.getElementById('descripcion').value;

    // Obtén el ID actual desde el localStorage o inicialízalo en 1
    let currentId = parseInt(localStorage.getItem('currentId')) || 1;

    // Crea un objeto para el nuevo pedido
    const nuevoPedido = {
        id: currentId,
        nombre: nombre,
        apellido: apellido,
        email: email,
        tipoFlor: tipoFlor,
        descripcion: descripcion
    };

    // Incrementa el ID para el siguiente pedido
    localStorage.setItem('currentId', currentId + 1);

    // Obtén los pedidos existentes del localStorage
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    // Agrega el nuevo pedido a la lista de pedidos
    pedidos.push(nuevoPedido);

    // Guarda la lista actualizada de pedidos en el localStorage
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    // Limpia el formulario
    document.getElementById('pedido-form').reset();

    // Redirige al listado de pedidos
    window.location.href = 'pedidos.html';
});
