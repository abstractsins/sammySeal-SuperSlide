const gameState = {};
gameState.start = {};

class StartScene extends Phaser.Scene {
    constructor(){ super({key: 'StartScene'}) }
    
    /******************************************************
     * PRELOAD
     *****************************************************/
    preload() {
        // Sprite
        
        
        // Music
        this.load.audio('theme', 'assets/music/start.mp3');
        
    } // preload()
    
    /******************************************************
     * CREATE
     *****************************************************/

    create() {

        /************
         * BACKGROUND
         */        
        gameState.start.bg = {};
        gameState.start.bg.bg0 = this.add.circle(230, 220, 325, 0xBBBBBB)
        gameState.start.bg.bg1 = this.add.circle(80, 200, 185, 0x7FaFd0)
        gameState.start.bg.bg2 = this.add.circle(252, 120, 100, 0x33aFd0)
        
        /***************
         * TEXT / TITLES
         */
        gameState.start.text = {};
        // Author
        gameState.start.text.author = this.add.text(25, 100, "Divs4U & Bandit Games present...", { 
            font: "30px Helvetica",
            fill: "#000000"
        })
        // Title
        gameState.start.text.title = this.add.text(365, 250, "Sammy Seal", {
            font: "60px Monospace", 
            fill: "#FFFFFF"
        });
        gameState.start.text.subtitle = this.add.text(405, 325, "and his super slide", {
            font: "36px Helvetica",
            fill: "#000000"
        });
        // Instructions
        gameState.start.text.instructions = this.add.text(150, 560, "press ENTER to start", {
            font: "24px",
            fill: "#000"
        })
        gameState.start.text.instructions.visible = false;
        
        /******
         * EYES
         */        
        // Right
        gameState.start.eyes = {};
        gameState.start.eyes.rightWhite = this.add.circle(675, 500, 35, 0xFFFFFF)
        gameState.start.eyes.rightPupil = this.add.circle(685, 510, 15, 0x000000)
        // Left
        gameState.start.eyes.leftWhite = this.add.circle(590, 500, 35, 0xFFFFFF)
        gameState.start.eyes.leftPupil = this.add.circle(600, 510, 15, 0x000000)
        // Eyelids
        gameState.start.eyes.leftLid = this.add.circle(590, 500, 35, 0x000000)
        gameState.start.eyes.rightLid = this.add.circle(675, 500, 35, 0x000000)
        gameState.start.eyes.leftLid.visible = false;
        gameState.start.eyes.rightLid.visible = false;
        
        /**********
         * CONTROLS
         */
        gameState.keys =  {};
        // Enter button - CONTINUE
        gameState.keys.Enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        /*******
         * MUSIC
         */
        gameState.start.music = this.sound.add('theme');
        gameState.start.music.play()

    } // CREATE

    /******************************************************
     * UPDATE
     *****************************************************/

    update(){
        
        // ENTER PRESS
        if (Phaser.Input.Keyboard.JustDown(gameState.keys.Enter)) {
            this.scene.stop('StartScene');
            // gameState.start.music.stop();
            this.scene.start('GameScene');
        }

        // INSTRUCTIONS APPEAR
        setTimeout(function(){
            gameState.start.text.instructions.visible = true;
        }, 2500)


    } // UPDATE

} // StartScene class


/**
 * THIS SPACE INTENTIONALLY LEFT BLANK
 * 
 * 
 * 
 */