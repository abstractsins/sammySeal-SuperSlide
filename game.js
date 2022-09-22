const gameState = {}

// config
const config = {
    type: Phaser.AUTO,
    height: 600,
    width: 800,
    backgroundColor: "b9eaff",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300, x: 500 },
            enableBody: true,
        }
    },
    scene: [StartScene, GameScene],
}

const game = new Phaser.Game(config);