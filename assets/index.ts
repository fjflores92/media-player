import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video: HTMLMediaElement = document.querySelector("video");
const togglePlayButton: HTMLElement = document.querySelector("#toggle-play");
const toggleMuteButton: HTMLElement = document.querySelector("#toggle-mute");
const player = new MediaPlayer({
    elementVideo: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ]
});
togglePlayButton.onclick = () => player.togglePlay();
toggleMuteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorker.js').catch(error => {
        console.log(error, error.message);
    });
}