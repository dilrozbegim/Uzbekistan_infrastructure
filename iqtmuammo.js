document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".neu-button");
    const cards = document.querySelectorAll(".news-card");

    // --- 1. SIZNING ESKI FILTRLASH KODINGIZ ---
    function runFilter(filterValue) {
        buttons.forEach(btn => {
            btn.style.boxShadow = "inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff";
            if(btn.textContent.trim() === filterValue) {
                btn.style.boxShadow = "inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff";
            }
        });

        cards.forEach((card) => {
            const cardTags = Array.from(card.querySelectorAll(".tags span"))
                                  .map(tag => tag.textContent.trim());

            if (cardTags.includes(filterValue)) {
                card.style.display = "block";
                card.style.animation = "fadeIn 0.5s ease";
            } else {
                card.style.display = "none";
            }
        });
    }

    // --- 2. TUGMALAR BOSILGANDA ISHLASHI ---
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            runFilter(button.textContent.trim());
        });
    });

    // --- 3. YANGI QISM: SAHIFA OCHILGANDA URL-NI TEKSHIRISH ---
    // Bu qism boshqa sahifadan kelgan filtrni ishlatib beradi
    const urlParams = new URLSearchParams(window.location.search);
    const filterFromUrl = urlParams.get('filter');

    if (filterFromUrl) {
        // Agar URL-da filtr bo'lsa (masalan: ?filter=Inflyatsiya)
        // O'sha filtrni ishga tushiramiz
        runFilter(filterFromUrl);
    }
});