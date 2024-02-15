var fundo;
class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

 
  preload() {
    this.load.spritesheet('fundo', '../../assets/gameAssets/startMenu/backgrounds/background.png', {frameWidth: 920, frameHeight: 560})
  }
  create() {
    fundo = this.add.sprite(460, 280, 'fundo')
    this.anims.create({
      key: "fundoMove",
      frames: this.anims.generateFrameNumbers('fundo', {start:0, end: 2}),
      frameRate: 2,
      repeat: -1
    })
    fundo.anims.play('fundoMove', true);
  }
  update() {}
}
