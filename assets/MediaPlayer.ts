class MediaPlayer {
    media : HTMLVideoElement;
    plugins : Array<any>;
    container : HTMLElement;
    constructor(config) {
        // config.el es la etiqueta video que hemos recogido 
        // usando querySelector
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container,this.media);
        this.container.appendChild(this.media);
    }
    
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }
    toggleMute() {
        this.media.muted = !this.media.muted;
    }
}









export default MediaPlayer;