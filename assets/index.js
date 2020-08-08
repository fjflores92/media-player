import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const togglePlayButton = document.querySelector("#toggle-play");
const toggleMuteButton = document.querySelector("#toggle-mute");
const player = new MediaPlayer({
    elementVideo: video,
    plugins: [new AutoPlay()]
});
togglePlayButton.onclick = () => player.togglePlay();
toggleMuteButton.onclick = () => player.toggleMute();