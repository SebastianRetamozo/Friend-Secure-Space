function mostrarMensaje() {
    const mensajes = [
        "Eres una persona increíble y valiosa 💖",
        "Nunca olvides lo mucho que significas para mí 😊",
        "El mundo es mejor contigo en él 🌍✨",
        "Eres más fuerte de lo que crees 💪💗",
        "Aquí estoy siempre para ti, sin importar qué pase 💞",
        "Eres la persona más especial en mi vida. Tu luz ilumina hasta mis días más oscuros. 🌟💖",
        "Cuando sientas que el mundo pesa, recuerda que aquí tienes un refugio donde siempre serás amada. 💕",
        "Eres más fuerte de lo que crees, más valiosa de lo que imaginas y más querida de lo que jamás sabrás. 💗✨",
        "Tu sonrisa tiene el poder de hacer brillar el día más gris. Nunca dejes de sonreír. 😊🌸",
        "No importa lo difícil que sea el camino, estaré aquí para apoyarte siempre. 💞",
        "Cada día contigo es un regalo, un pedacito de felicidad que guardo en mi corazón. 🎁💖",
        "No importa cuántas veces caigas, lo importante es que siempre te levantes. ¡Yo creo en ti! 🌷",
        "Eres un milagro, una obra de arte única y preciosa. No dejes que nadie te haga sentir lo contrario. 🎨✨",
        "No necesitas ser perfecta para ser increíble. Ya eres suficiente, ya eres maravillosa. 💕",
        "Si alguna vez sientes que todo está oscuro, recuerda que la luna brilla en la noche más profunda. 🌙✨"
    ];
    document.getElementById("motivation").innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
}

function mostrarPoema() {
    const poemas = [
        "🌸 En cada estrella hay un deseo, en cada flor, un suspiro, y en cada latido de mi corazón, un pensamiento para ti. 🌸",
        "💕 Si la luna brillara con la mitad de tu luz, el mundo entero estaría iluminado. 💕",
        "💖 Mi refugio eres tú, mi alegría tu sonrisa, y mi mundo tu existencia. 💖",
        "En la tormenta, eres mi calma, en la sombra, mi luz del alma",
        "Donde vayas, allí estaré, tomando tu mano, sin retroceder."
    ];
    document.getElementById("poema").innerText = poemas[Math.floor(Math.random() * poemas.length)];
}

function abrirFlor3D() {
    window.open("flor3D.html", "_blank", "width=400,height=400");
}

document.addEventListener("DOMContentLoaded", function () {
    const images = ["imagen1.png", "imagen2.png", "imagen3.png", "imagen4.png", "imagen5.png"]; // Tus imágenes PNG

    function createHeartImage() {
        const img = document.createElement("img");
        img.src = images[Math.floor(Math.random() * images.length)];
        img.classList.add("heart-image");

        img.style.left = Math.random() * window.innerWidth + "px";
        img.style.top = "-100px";

        document.getElementById("rain-container").appendChild(img);

        setTimeout(() => {
            img.remove(); // Elimina la imagen cuando llega al fondo
        }, 5000);
    }

    setInterval(createHeartImage, 500);
});

