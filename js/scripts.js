document.addEventListener("DOMContentLoaded", function () {
    const welcomeSection = document.getElementById("welcome-section");
    
    // Cuando el mouse entre en la sección de bienvenida
    welcomeSection.addEventListener("mouseenter", function () {
        welcomeSection.classList.add("fade-out"); // Agregar clase para desvanecer
    });

    // Cuando la transición termine, ocultar la sección
    welcomeSection.addEventListener("transitionend", function () {
        welcomeSection.style.display = "none"; // Ocultar la sección completamente
    });
});
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}
