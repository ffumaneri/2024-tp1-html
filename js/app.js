function guardar(){
    document.getElementById('forma').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const id = document.getElementById('nombre').value;
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const flor = document.getElementById('flores').value;
        const desc = document.getElementById('descripcion').value;
        
        const pedido = {
            nombre: nombre,
            apellido: apellido,
            flor: flor,
            id: id,
            desc: desc
        };
        
        let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        
        pedidos.push(pedido);
        
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
        
        document.getElementById('forma').reset();
        
        alert('Pedido guardado con éxito.');
    });
}

function agregarPedidos(){
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    const tabla = document.getElementById('tabla');

    const titulo = document.createElement('tr');
        titulo.innerHTML = `
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Flor</th>
            <th>Descripcion</th>
        `;
        tabla.appendChild(titulo);

    pedidos.forEach(pedido => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${pedido.id}</td>
            <td>${pedido.nombre}</td>
            <td>${pedido.apellido}</td>
            <td>${pedido.flor}</td>
            <td>${pedido.desc}</td>
        `;
        tabla.appendChild(fila);
    })
}