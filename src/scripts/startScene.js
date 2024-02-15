var fundo;
var cloud_gray;
var cloud_white;
var ett_logo;
var button;
var startGame;
class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

  preload() {
    this.load.spritesheet(
      "fundo",
      "../../assets/gameAssets/startMenu/backgrounds/background.png",
      { frameWidth: 920, frameHeight: 560 }
    );
    this.load.image(
      "cloud_gray",
      "../../assets/gameAssets/startMenu/nuvem_1.png"
    );
    this.load.image(
      "cloud_white",
      "../../assets/gameAssets/startMenu/nuvem_2.png"
    );
    this.load.image(
      "ett_logo",
      "../../assets/gameAssets/startMenu/ett_logo.png"
    );
    this.load.image("botao", "../../assets/gameAssets/Buttons/button.png");
  }
  create() {
    fundo = this.add.sprite(460, 280, "fundo");
    this.anims.create({
      key: "fundoMove",
      frames: this.anims.generateFrameNumbers("fundo", { start: 0, end: 2 }),
      frameRate: 2,
      repeat: -1,
    });
    fundo.anims.play("fundoMove", true);

    ett_logo = this.add.image(460, 300, "ett_logo").setScale(0.5);
    cloud_white = this.add.image(400, 300, "cloud_white").setScale(0.8);
    cloud_gray = this.add.image(600, 260, "cloud_gray").setScale(0.8);
    button = this.add
      .image(460, 500, "botao")
      .setScale(0.6)
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        startGame = true;
      ;
      });
  }
  update() {

    if(startGame === true){
      cloud_gray.x +=1;
      cloud_white.x -=1;
      button.x = 3000;
    }

  }
}
