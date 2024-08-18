document.getElementById('pedido-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const tipoFlor = document.getElementById('tipo-flor').value;
    const descripcion = document.getElementById('descripcion').value;

    let currentId = parseInt(localStorage.getItem('currentId')) || 1;

    const nuevoPedido = {
        id: currentId,
        nombre: nombre,
        apellido: apellido,
        email: email,
        tipoFlor: tipoFlor,
        descripcion: descripcion
    };

    localStorage.setItem('currentId', currentId + 1);

    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    pedidos.push(nuevoPedido);

    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    document.getElementById('pedido-form').reset();

    window.location.href = 'pedidos.html';
});
