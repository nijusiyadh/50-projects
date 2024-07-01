
const tagsEl = document.getElementById('tags');

const textarea = document.getElementById('textarea')

textarea.focus();

textarea.addEventListener('keyup', function(e) {
    createTag(e.target.value);

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10);
        randomSelect();
    }
})

function createTag(input) {
     const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
     
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerHTML = tag;
        tagsEl.appendChild(tagEl)
    });
    
}


function randomSelect() {
    const times = 30;

    const intervel = setInterval(() => {
        const randomTag = pickRAndomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(intervel);
        setTimeout(() => {
            const randomTag = pickRAndomTag();
            highlightTag(randomTag)
        }, 100);
    }, times * 100);
}

function pickRAndomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}


function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}
/**key up event
 * what can 
 * 
 * 
 */