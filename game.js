
/******************************************************
 * CONFIG
 *****************************************************/
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "b9eaff", 
    gameVersion: "0.2",
    physics: {
        default: 'arcade',
        arcade: {
            enableBody: true,
            // debug: true,
        }
    },
    scene: [StartScene, GameScene],
} // config

const game = new Phaser.Game(config);

console.log("Sammy Seal and His Super Slide\nby Divs4U and Bandit Games\nversion " + config.gameVersion)


/**
 * THIS SECTION INTENTIONALLY LEFT BLANK
 * 
 *
 * 
 */