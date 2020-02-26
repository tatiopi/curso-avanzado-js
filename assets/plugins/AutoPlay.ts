import MediaPlayer from '../MediaPlayer';

class AutoPlay {
    player: MediaPlayer;
    constructor() {}
    public run(player) {
        if (!player.media.muted) {
            player.media.muted == true;
        }
        player.play();
    }
}


export default AutoPlay;