import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video :HTMLElement = document.querySelector("video");
const play :HTMLElement = document.getElementById("playButton");
const mute :HTMLElement = document.getElementById("muteButton");


// creamos una instancia de nuesrta clase
// y le pasamos como parametro el elemento
// video de nuesrto HTML
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ]
});

play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}