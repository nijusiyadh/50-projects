const header = document.querySelector('.header-main');
const banner = document.querySelector('.banner');

const changeView = function(entries) {
  
  const isVisible = entries[0].isIntersecting;
  console.log(isVisible);
  
  if(isVisible === false) {
    header.classList.add('active');
  }

  if(isVisible === true) {
    header.classList.remove('active');
  }
  

};

const observer = new IntersectionObserver(changeView, {
  root: null, 
  threshold: 0.75, 
});

observer.observe(banner);