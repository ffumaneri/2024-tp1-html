document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("formResponse").innerText = "Por favor, completa todos los campos.";
        return;
    }

    document.getElementById("formResponse").innerText = `Gracias, ${name}. Hemos recibido tu mensaje: "${message}". Te contactaremos pronto en ${email}.`;

    document.getElementById("contactForm").reset();
});
