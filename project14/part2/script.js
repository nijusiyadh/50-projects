
const toggle = document.getElementById('toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', function() {
    nav.classList.toggle('active');
})