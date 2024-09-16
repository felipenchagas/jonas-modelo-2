document.addEventListener("DOMContentLoaded", function() {
    const cityButtons = document.querySelectorAll(".city-button");
    const areas = document.querySelectorAll(".area");

    cityButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove active class from all buttons
            cityButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            button.classList.add("active");

            // Hide all areas
            areas.forEach(area => area.classList.remove("active"));
            // Show the corresponding area
            const targetId = button.getAttribute('data-target');
            const targetArea = document.getElementById(targetId);
            if (targetArea) {
                targetArea.classList.add("active");
            } else {
                console.error("Área não encontrada: " + targetId);
            }
        });

        // Suporte para navegação via teclado
        button.addEventListener("keydown", function(e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault(); // Evita o comportamento padrão do espaço de rolar a página
                button.click();
            }
        });
    });
});
