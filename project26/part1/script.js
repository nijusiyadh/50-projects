
const btnUp = document.querySelector('.arrow-up');
const btnDown = document.querySelector('.arrow-down');

const contents = document.querySelectorAll('.content-container');
const images = document.querySelectorAll('.img');


const imageSection = document.querySelector('.image-section');
const contentSection = document.querySelector('.content-section');

let curr = 0;

leadImage();

function leadImage() {

    console.log(contents.length);
    
    contents.forEach(con => {
        con.classList.remove('active');
    })

    images.forEach(img => img.classList.remove('active'));

    contents[(contents.length-1) - curr].classList.add('active');
    images[curr].classList.add('active');
}

btnUp.addEventListener('click',function(){
    curr += 1;
    if(curr > contents.length-1) {
        curr = contents.length - 1;
    }
    leadImage()
})

btnDown.addEventListener('click',function(){
    curr -= 1;
    if(curr < 0) {
        curr = 0;
    }
    leadImage()
})