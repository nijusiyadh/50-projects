
const btn = document.querySelector('.btn');

const keyDis = document.querySelector('.key-dis');

const event_key = document.querySelector('.event-key-output');
const event_keyCode = document.querySelector('.event-keycode-output');
const event_code = document.querySelector('.event-code-output');

window.addEventListener('keydown', function(e) {
    btn.classList.add('hidden');
    keyDis.classList.remove('hidden');
    event_key.innerHTML = e.key === ' '? 'Space' : e.key;
    event_keyCode.innerHTML = e.keyCode;
    event_code.innerHTML = e.code;
    
})