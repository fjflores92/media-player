export default class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config: { elementVideo: HTMLMediaElement; plugins: Array<any>; }) {
        this.media = config.elementVideo;
        this.plugins = config.plugins || [];
        this.initPlugins();
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