export default class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config: { elementVideo: HTMLMediaElement; plugins: Array<any>; }) {
        this.media = config.elementVideo;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        (this.media.paused) ? this.play() : this.pause();
    }
    
    toggleMute() {
        (this.media.muted) ? this.unmute() : this.mute();
    }
};