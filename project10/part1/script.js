
const jokes = document.querySelector('.jokes');
const btn = document.querySelector('.jokeBtn');

const addJoke = function(joke) {
    jokes.textContent = joke;
};

const getJokes = async function() {
    try {
        const res = await fetch('https://icanhazdadjoke.com/slack');

        const data = await res.json();
        
        const joke = data.attachments[0].text;

        addJoke(joke);
        
    } catch (error) {
        console.log(error);
        
    }
}

getJokes();

btn.addEventListener('click', getJokes)