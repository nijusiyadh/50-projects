

const downfall = document.querySelector('.downfall');
const cinematic = document.querySelector('.cinematic');
const rain = document.querySelector('.rain');
const notification = document.querySelector('.notification');

const downfallAudio = document.querySelector('.downfall audio');
const cinematicAudio = document.querySelector('.cinematic audio');
const rainAudio = document.querySelector('.rain audio');
const notificationAudio = document.querySelector('.notification audio');


const pauseAll = function() {
    downfallAudio.pause();
    cinematicAudio.pause();
    notificationAudio.pause();
    rainAudio.pause();

    downfallAudio.currentTime = 0;
    cinematicAudio.currentTime = 0;
    notificationAudio.currentTime = 0;
    rainAudio.currentTime = 0;
}

downfall.addEventListener('click', function() {
    pauseAll();
    downfallAudio.play();
});

cinematic.addEventListener('click', function() {
    pauseAll();
    cinematicAudio.play();
});

rain.addEventListener('click', function() {
    pauseAll();
    rainAudio.play();
});

notification.addEventListener('click', function() {
    pauseAll();
    notificationAudio.play();
});

