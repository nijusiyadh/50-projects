

const sounds =['downfall','rain','cinematic','notification'];

sounds.forEach(sound => {
    const btn = document.createElement('button');

    btn.classList.add('btn');

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });

    btn.innerHTML = sound;
    document.getElementById('buttons').appendChild(btn);
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();

        song.currentTime = 0;
    })
}