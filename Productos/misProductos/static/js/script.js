document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/zapatillas/')
        .then(response => response.json())
        .then(data => displayZapatillas(data))
        .catch(error => console.error('Error:', error));
});

function displayZapatillas(zapatillas) {
    const container = document.querySelector('.container');
    zapatillas.forEach(zapatilla => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${zapatilla.imagen}" class="card-img-top" alt="${zapatilla.nombre}">
            <div class="card-body">
                <h5 class="card-title">${zapatilla.nombre} - ${zapatilla.modelo}</h5>
                <p class="card-text">
                    Talla: ${zapatilla.talla}<br>
                    Precio: $${zapatilla.precio.toFixed(2)}<br>
                    Stock: ${zapatilla.stock}
                </p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>
        `;
        container.appendChild(card);
    });
}
