document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todas las secciones de la página
    const sections = document.querySelectorAll('section');

    // Recorremos todas las secciones y añadimos un retraso a la animación
    sections.forEach((section, index) => {
        // Añadimos un retraso progresivo a cada sección
        section.style.animationDelay = `${index * 0.5}s`;  // 0.5s por cada sección
    });
});


// Transiciones suaves entre las páginas
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.style.opacity = 0;
        setTimeout(() => {
            window.location.href = btn.getAttribute('href');
        }, 500);
    });
});




// Función para mostrar un mensaje si el acceso no está disponible
function showUnavailableMessage(buttonId, message, redirectUrl = "") {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', (e) => {
        e.preventDefault();  // Evita que el enlace se siga
        alert(message);
        if (redirectUrl) {
            window.location.href = redirectUrl; // Redirige si ya es la hora
        }
    });
}


// Función para obtener la hora actual
function getCurrentHour() {
    let date = new Date();
    return date.getHours();
}
    const currentHour = getCurrentHour();

    // Horarios para cada acto
    const firstActTime = 16;  // 4:00 PM
    const secondActTime = 21; // 9:00 PM
    const cierre = 23; // 11:00 PM

    document.getElementById("firstActButton").addEventListener('click', function(event) {
        if (currentHour < firstActTime) { //si la hora es menor a la hora establecida no abre
            window.location.href = "index.html";
            event.preventDefault(); // Evita que se abra la página
            alert("Este acto estará habilitado a las 4:00 pm 💫");
        } 
    });
    
    document.getElementById("secondActButton").addEventListener('click', function(event) {
        if (currentHour < secondActTime) { //si la hora es menor a la hora establecida no abre
            window.location.href = "index.html";
            event.preventDefault(); // Evita que se abra la página
            alert("Aun no ha pasado el primer acto 😎");
        } 
    });
    

    document.getElementById("closingButton").addEventListener('click', function(event) {
        if (currentHour < cierre) { //si la hora es menor a la hora establecida no abre
            window.location.href = "index.html";
            event.preventDefault(); // Evita que se abra la página
            alert("Ya quieres saber como acaba? Tranquilaaa😅");
        } 
    });
