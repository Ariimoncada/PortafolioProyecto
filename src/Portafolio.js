document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`¡Gracias por contactarme, ${name}! Recibiré tu mensaje pronto.`);
        document.getElementById('contact-form').reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
