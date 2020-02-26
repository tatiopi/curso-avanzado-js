import MediaPlayer from "../MediaPlayer";

class AutoPause {
    private threshold : number ;
    player : MediaPlayer;
    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    
    public run(player) {
        this.player = player;
        // Recibe dos argumentos uno es una funcion 
        const observer = new IntersectionObserver(this.handleIntersection, {
            // cuando % te interesa que se tenga en cuenta
            threshold: this.threshold
        });

        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }

    private  handleIntersection(entries : IntersectionObserverEntry[])   {
        const entry = entries[0];
        console.log(entry);

        const isVIsible = entry.intersectionRatio >= this.threshold

        isVIsible === true ? this.player.play() : this.player.pause();
    }

    private handleVisibilityChange() {
        const isVIsible = document.visibilityState === "visible";
        if (isVIsible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;