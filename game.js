// GLOBALS
const gameState = {};
gameState.background = {};
gameState.text = {};

/********************************************
 * PRELOAD
 */
function preload() {
    // Sprite
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');

    // Music
    this.load.audio('theme', 'assets/music/start.mp3');
} // preload()

/********************************************
 * CREATE
 */
function create() {
    // BACKGROUND
    gameState.background.circle1 = this.add.circle(230, 220, 325, 0xBBBBBB)
    gameState.background.circle2 = this.add.circle(80, 200, 185, 0x7FaFd0)
    gameState.background.circle3 = this.add.circle(252, 120, 100, 0x33aFd0)

    // Author
    gameState.text.author = this.add.text(25, 100, "Divs4U & Bandit Games present...", { 
        font: "30px Helvetica",
        fill: "#000000"
    })

    // Title
    gameState.text.title = this.add.text(365, 250, "Sammy Seal", {
        font: "60px Monospace", 
        fill: "#FFFFFF"
    });
    gameState.text.subtitle = this.add.text(405, 325, "and his super slide", {
        font: "36px Helvetica",
        fill: "#000000"
    });
    
    // Eyes
    // Right
    gameState.rightEyeWhite = this.add.circle(675, 500, 35, 0xFFFFFF)
    gameState.rightEyePupil = this.add.circle(685, 510, 15, 0x000000)
    // Left
    gameState.leftEyeWhite = this.add.circle(590, 500, 35, 0xFFFFFF)
    gameState.leftEyePupil = this.add.circle(600, 510, 15, 0x000000)
    // Eyelids
    gameState.leftEyelid = this.add.circle(590, 500, 35, 0x000000)
    gameState.rightEyelid = this.add.circle(675, 500, 35, 0x000000)
    gameState.leftEyelid.visible = false;
    gameState.rightEyelid.visible = false;

    // Sprite
    gameState.codey = this.physics.add.sprite(300, -100, 'codey')

    // Keyboard
    this.input.keyboard.on('keydown-ENTER', function(){
        // BEGIN GAME
    })

    // Music
    gameState.music = this.sound.add('theme');
    gameState.music.play()

    // Instructions
    gameState.instructions = this.add.text(150, 560, "press ENTER to start", {
        font: "24px"
    })
    gameState.instructions.visible = false;
    
} // create()

/********************************************
 * UPDATE
 */
function update(){

    setTimeout(function(){
        
        // Eye movement
        if (gameState.rightEyePupil.x === 685) {
            setTimeout(function(){
                while (gameState.rightEyePupil.x > 665) gameState.rightEyePupil.x -= 1
            }, 1000)
        }
        if (gameState.leftEyePupil.x === 600) {
            setTimeout(function(){
                while (gameState.leftEyePupil.x > 580) gameState.leftEyePupil.x -= 1
            }, 1000)
        }
        
        if (gameState.rightEyePupil.x === 665) {
            setTimeout(function(){
                while (gameState.rightEyePupil.x < 685) gameState.rightEyePupil.x += 1
            }, 1000)
        }
        if (gameState.leftEyePupil.x === 580) {
            setTimeout(function(){
                while (gameState.leftEyePupil.x < 600) gameState.leftEyePupil.x += 1
            }, 1000)
        }   
    }, 1000)

    // Instructions
    setTimeout(function(){
        gameState.instructions.visible = true
    }, 3000)

} // update()
  
/********************************************
 * CONFIG
 */
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#5f409f",
    // added
    gameVersion: "0.1",
    inputMouse: true,
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 500 },
          enableBody: true,
          debug: true
        }
    },
    // Scenes
    scene: {
        preload,
        create,
        update
    }
} // config
  
const game = new Phaser.Game(config);

console.log("Sammy Seal and His Super Slide\nby Divs4U and Bandit Games\nversion " + config.gameVersion)


/**
 * THIS SECTION INTENTIONALLY LEFT BLANK
 * 
 *
 * 
 */