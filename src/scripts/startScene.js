var fundo;
var button;
class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

 
  preload() {
    this.load.spritesheet('fundo', '../../assets/gameAssets/startMenu/backgrounds/background.png', {frameWidth: 920, frameHeight: 560})
    this.load.image('botao', '../../assets/gameAssets/Buttons/button.png');
  }
  create() {
    fundo = this.add.sprite(460, 280, 'fundo')
    button = this.add.image(460, 500, 'botao').setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
      console.log('Deu Certo');
      });
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
