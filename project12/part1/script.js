
const content = document.querySelectorAll('.content');

const btn = document.querySelectorAll('.content-btn');


btn.forEach(b => {
    b.addEventListener('click', function(e) {
        // content.forEach(con => {
        //     con.classList.remove('active');
        // })
       b.parentNode.classList.toggle('active');
       ;
    })
})