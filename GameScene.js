class GameScene extends Phaser.Scene {
    constructor(){
        super({key: 'GameScene'})
    }

    // preload()
    preload(){

    }

    // create()
    create(){
        // BG
        let bg0 = this.add.circle(230, 220, 325, 0xBBBBBB)
        let bg1 = this.add.circle(80, 200, 185, 0x7FaFd0)
        let bg2 = this.add.circle(252, 120, 100, 0x33aFd0)
    }

    // update()
    update(){

    }

}
