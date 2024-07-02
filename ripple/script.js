
const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    console.log(e);
    
    const x = e.clientX;
    const y = e.clientY;

    const containerTop = e.target.offsetTop;
    const containerLeft = e.target.offsetLeft;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.top = `${y - containerTop}px`;
    ripple.style.left = `${x - containerLeft}px`;
    this.append(ripple);
    setTimeout(() => {
        ripple.remove();
    }, 500);
})