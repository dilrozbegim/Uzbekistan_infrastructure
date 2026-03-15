document.addEventListener("DOMContentLoaded", function () {
    // Sahifadagi barcha mavzu tugmalarini topamiz
    const buttons = document.querySelectorAll(".neu-button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Bosilgan tugmaning matnini olamiz (masalan: "Inflyatsiya")
            const filterValue = button.textContent.trim();
            
            // Diqqat: Bu yerda asosiy sahifangiz nomi iqtmuammo.html bo'lishi shart
            // Agar fayl nomi boshqacha bo'lsa, pastdagi nomni o'zgartiring
            const mainPage = "ijtmuammo.html"; 

            // Asosiy sahifaga filtr parametri bilan o'tamiz
            window.location.href = mainPage + "?filter=" + encodeURIComponent(filterValue);
        });
    });
});