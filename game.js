function preload() {
    // Sprite
    this.load.image('codey', 'assets/codey.png')
}

function create() {
    // BG
    let bg0 = this.add.circle(230, 220, 325, 0xBBBBBB)
    let bg1 = this.add.circle(80, 200, 185, 0x7FaFd0)
    let bg2 = this.add.circle(252, 120, 100, 0x33aFd0)

    // Author
    this.add.text(25, 100, "Divs4U & Bandit Games present...", { 
        font: "30px Helvetica", 
        fill: "#000000"
    });

    // Title
    this.add.text(365, 250, "Sammy Seal", {
        font: "60px Monospace", 
        fill: "#FFFFFF"
    });
    this.add.text(405, 325, "and his super slide", {
        font: "36px Helvetica",
        fill: "#000000"
    })


    // Eyes
    let circle2 = this.add.circle(625, 500, 35, 0xFFFFFF)
    let circle1 = this.add.circle(635, 510, 15, 0x000000)

    let circle3 = this.add.circle(525, 500, 35, 0xFFFFFF)
    let circle4 = this.add.circle(535, 510, 15, 0x000000)

    // Sprite

  }
  
  const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: "#5f409f",
      scene: {create}
  };
  
  const game = new Phaser.Game(config);