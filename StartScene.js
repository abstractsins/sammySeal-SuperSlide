class StartScene extends Phaser.Scene {
    constructor(){
        super({key: 'StartScene'})
    }
    
    preload() {
        // Sprite
        this.load.image('codey', 'assets/codey.png')
    }
    
    create() {
        // BG
        let bg0 = this.add.circle(230, 220, 325, 0xBBBBBB)
        let bg1 = this.add.circle(80, 200, 185, 0x7FaFd0)
        let bg2 = this.add.circle(252, 120, 100, 0x33aFd0)
        
        // Author
        let author = this.add.text(25, 100, "Divs4U & Bandit Games present...", { 
            font: "30px Helvetica",
            fill: "#000000"
        })
        
        // Title
        let title = this.add.text(365, 250, "Sammy Seal", {
            font: "60px Monospace", 
            fill: "#FFFFFF"
        });
        let subtitle = this.add.text(405, 325, "and his super slide", {
            font: "36px Helvetica",
            fill: "#000000"
        });
        
        
        // Eyes
        // Right
        let rightEyeWhite = this.add.circle(675, 500, 35, 0xFFFFFF)
        let rightEyePupil = this.add.circle(685, 510, 15, 0x000000)
        // Left
        let leftEyeWhite = this.add.circle(590, 500, 35, 0xFFFFFF)
        let leftEyePupil = this.add.circle(600, 510, 15, 0x000000)
        
        // Sprite
        
        console.log(author)


        // Creates keyboard keys
        gameState.keys =  {};
  
        //* Enter button - CONTINUE
        gameState.keys.Enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(gameState.keys.Enter)) {
            this.scene.stop('StartScene');
            this.scene.start('GameScene');
        }
    }
}





/**
 * THIS SPACE INTENTIONALLY LEFT BLANK
 * 
 * 
 * 
 */