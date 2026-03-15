const container = document.getElementById('buttonContainer');
const btn = document.getElementById('toggleBtn');

btn.addEventListener('click', function() {
    container.classList.toggle('expanded');
    
    if (container.classList.contains('expanded')) {
        btn.innerText = "Yashirish";
    } else {
        btn.innerText = "Barchasini ko'rsatish";
    }
});