

const emailinput = document.querySelector('.email-input');

const pasInput = document.querySelector('.pas-input');

const email = document.getElementById('email');

const password = document.getElementById('password');


email.addEventListener('focus', function() {
    emailinput.classList.add('active');
});

email.addEventListener('blur', function() {
    emailinput.classList.remove('active');
});

password.addEventListener('focus', function() {
    pasInput.classList.add('active');
});

password.addEventListener('blur', function() {
    pasInput.classList.remove('active');
});
