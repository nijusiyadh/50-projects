

const imageContiner = document.querySelector('.img-container');

const imgCard = document.querySelectorAll(".image-card");

const title = document.querySelectorAll(".title");

imgCard.forEach(card => {
    card.addEventListener("click", function() {
        imgCard.forEach(cd => {
            cd.classList.remove("active");
        });
        card.classList.add("active");

        title.forEach(title => {
            title.classList.remove("visible");
        });


        
        
    })
})