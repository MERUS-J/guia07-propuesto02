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

renderContactos();
