
const image = document.querySelector('.image');

image.addEventListener('click', function(e) {

    console.log(e);
    
    
    const like = `<div class="heart like" style="top: ${e.target.offsetHeight - e.clientY}px; left: ${e.target.offsetWidth - e.clientY};"><i class="fa-solid fa-heart"></i></div>`;

    image.insertAdjacentHTML('afterbegin',like);
    
})