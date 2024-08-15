function guardar(){

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const flor = document.getElementById('flores').value;
        const desc = document.getElementById('descripcion').value;
        if(nombre==="" || apellido===""){
            alert("Rellene los campos");
            document.getElementById('forma').reset();
        }
        else{
            const nuevoPedido = new pedido(nombre, apellido, flor ,desc);
            
            let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
            
            pedidos.push(nuevoPedido);
            
            localStorage.setItem('pedidos', JSON.stringify(pedidos));
            
            document.getElementById('forma').reset();
            
            alert('Pedido guardado con éxito.');
            console.log("pedido guardado");
            window.location.href = "/index.html";
        }
}

function limpiarPedidos(){
    localStorage.clear();
    const tabla = document.getElementById('tabla');
    tabla.innerHTML="";
    agregarPedidos();
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