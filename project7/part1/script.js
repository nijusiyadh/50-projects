

const playstation = document.querySelector('.playstation');

const xbox = document.querySelector('.xbox');






playstation.addEventListener("mouseenter", function() {
    playstation.classList.add('active');

});

playstation.addEventListener("mouseleave", function() {
  
    playstation.classList.remove('active');

});

xbox.addEventListener("mouseenter", function() {
   
    xbox.classList.add('active');
});

xbox.addEventListener("mouseleave", function() {
    xbox.classList.remove('active');
});