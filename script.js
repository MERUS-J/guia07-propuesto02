let contactos = [
    { id: 1, nombre: 'Juan Pérez', telefono: '987654321', correo: 'juan@example.com' },
    { id: 2, nombre: 'Ana Gómez', telefono: '912345678', correo: 'ana@example.com' }
];

function renderContactos() {
    const lista = document.getElementById('lista-contactos');
    lista.innerHTML = '';
    contactos.forEach(c => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <h3>${c.nombre}</h3>
            <p>Tel: ${c.telefono}</p>
            <p>Email: ${c.correo}</p>
        `;
        lista.appendChild(div);
    });
}

function agregarContacto() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    
    if(!nombre || !telefono || !correo) {
        alert("Todos los campos son obligatorios.");
        return;
    }
    
    const nuevoId = contactos.length ? contactos[contactos.length-1].id + 1 : 1;
    contactos.push({ id: nuevoId, nombre, telefono, correo });
    
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('correo').value = '';
    
    renderContactos();
}

renderContactos();
