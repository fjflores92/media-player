export default class AutoPlay {
    constructor() { }
    run(player) {
        if (!player.muted)
            player.muted = true;
        player.play();
    }
};