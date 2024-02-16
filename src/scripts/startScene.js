var fundo;
var cloudGray;
var cloudRed;
var ettLogo;
var button;
var startGame;
//Configurando como uma cena phaser
class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

  //carregando arquivos
  preload() {
    //carregando spritesheet do fundo
    this.load.spritesheet(
      "fundo",
      "../../assets/gameAssets/startMenu/backgrounds/background.png",
      { frameWidth: 920, frameHeight: 560 }
    );
    this.load.image(
      "cloudGray",
      "../../assets/gameAssets/startMenu/nuvem_1.png"
    );
    this.load.image(
      "cloudRed",
      "../../assets/gameAssets/startMenu/nuvem_2.png"
    );
    this.load.image(
      "ettLogo",
      "../../assets/gameAssets/startMenu/ett_logo.png"
    );
    this.load.image("botao", "../../assets/gameAssets/Buttons/button.png");
  }
  create() {
    //Criando e animando fundo
    fundo = this.add.sprite(460, 280, "fundo");
    this.anims.create({
      key: "fundoMove",
      frames: this.anims.generateFrameNumbers("fundo", { start: 0, end: 2 }),
      frameRate: 2,
      repeat: -1,
    });
    fundo.anims.play("fundoMove", true);

    //adicionar logo e nuvens
    ettLogo = this.add.image(460, 300, "ettLogo").setScale(0.2);
    cloudRed = this.add.image(400, 300, "cloudRed").setScale(0.8);
    cloudGray = this.add.image(600, 260, "cloudGray").setScale(0.8);
    //Adicionar botão para inicio da animação
    button = this.add
      .image(600, 320, "botao")
      .setScale(0.6)
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        startGame = true;
      });
  }
  
  update() {
    //Animação ao apertar o botão
    if (startGame === true) {
      cloudGray.x += 3; //nuvem cinza vai para a direita
      cloudRed.x -= 3;
      button.x = 3000;
      //verificar tamanho da logo antes de crescer
      if (ettLogo.scaleX < 0.7) {
        ettLogo.scaleX += 0.002;
        ettLogo.scaleY += 0.002;
      }
    }
  }
}
