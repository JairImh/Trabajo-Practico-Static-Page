document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });
});

flatpickr("#selector-turno", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    minTime: "08:00",
    maxTime: "20:00",
    minuteIncrement: 30,
    disable: [
        // Bloquea domingos (0) y lunes (1)
        function(date) {
            return (date.getDay() === 0 || date.getDay() === 1);
        },
        // Bloquea horario de descanso todos los días
        {
            from: "12:00",
            to: "13:00"
        }
    ]
});