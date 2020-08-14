export default class MediaPlayer {
    constructor(config) {
        this.media = config.elementVideo;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };

        this.plugins.forEach(plugin => {
            console.log(plugin);
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