let cloudGray;
let cloudRed;
let ettLogo;
let button;
let startGame;

//Configurando como uma cena phaser
class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
    this.currentVolume = 1;
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
    this.load.image("debug", "../../assets/debug.png");
    this.load.audio(
      "music",
      "../../assets/gameAssets/Audio/sounds/soundTrack/cenaDeCreditos.mp3"
    );
  }
  create() {
    //Criando e animando fundo
    let background = this.add.sprite(460, 280, "fundo");
    this.anims.create({
      key: "fundoMove",
      frames: this.anims.generateFrameNumbers("fundo", { start: 0, end: 2 }),
      frameRate: 2,
      repeat: -1,
    });
    background.anims.play("fundoMove", true);

    if (!this.registry.get("music")) {
      music = this.sound.add("music", { loop: true, volume: 0 });
      this.registry.set("music", music);
      music.play();

      this.tweens.add({
        targets: music,
        volume: 1,
        ease: "Linear",
        duration: 8000,
        onStart: () => console.log("Fade-in começou"),
        onUptade: () => console.log("Volume atual:", music.volume),
        onComplete: () => console.log("Fade-in completo"),
      });
    }

    //adicionar logo e nuvens
    ettLogo = this.add.image(460, 300, "ettLogo").setScale(0.2);
    cloudRed = this.add.image(400, 300, "cloudRed").setScale(0.8);
    cloudGray = this.add.image(600, 260, "cloudGray").setScale(0.8);
    //Adicionar botão para inicio da animação
    button = this.add
      .sprite(600, 320, "botao")
      .setScale(0.6)
      .setInteractive({ cursor: "pointer" })
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        startGame = true;
        setTimeout(() => this.cameras.main.fadeOut(2000, 0, 0, 0), "3000");
      });
    this.add
      .image(900, 500, "debug")
      .setAlpha(0.01)
      .setInteractive()
      .on("pointerdown", () => {
        CallLevelMenu(3);
        this.scene.stop("CreditosScene");
        this.scene.start("LevelMenu");
      });

    setupVolumeControls(this);
  }
  update() {
    //Animação ao apertar o botão
    if (startGame === true) {
      moveClouds(cloudGray, cloudRed, button);
      //verificar tamanho da logo antes de crescer
      validateLogoSize(ettLogo, this, "CreditosScene");
    }
  }
}
function validateLogoSize(logo, scene, nextScene) {
  if (logo.scaleX < 0.7) {
    logo.scaleX += 0.002;
    logo.scaleY += 0.002;
  } else {
    scene.scene.start(nextScene, scene.game);
  }
}
function moveClouds(firstCloud, secondCloud, button) {
  firstCloud.x += 3;
  secondCloud.x -= 3;
  button.x = 3000;
}
function setupVolumeControls(scene) {
  scene.add.text(10, 10, "Volume", { fontSize: "16px", fill: "#fff" });
  scene.add
    .text(10, 30, "+", { fontSize: "16px", fill: "#0f0" })
    .setInteractive()
    .setDepth(1000)
    .on("pointerdown", () => adjustVolume(scene, 0.1));

  scene.volumeDownButton = scene.add
    .text(10, 50, "-", { fill: "#f00" })
    .setInteractive()
    .setDepth(1000)
    .on("pointerdown", () => adjustVolume(scene, -0.1));

  scene.muteButton = scene.add
    .text(10, 90, "Mute", { fontSize: "16px", fill: "#00f" })
    .setInteractive()
    .setDepth(1000)
    .on("pointerdown", () => toggleMute(scene));
}

function adjustVolume(scene, change) {
  if (typeof scene.currentVolume !== "number" || isNaN(scene.currentVolume)) {
    console.error("currentVolume não é um número:", scene.currentVolume);
    scene.currentVolume = 1;
  }

  if (typeof change !== "number" || isNaN(change)) {
    console.error("change não é um número:", change);
    return;
  }

  let newVolume = Phaser.Math.Clamp(scene.currentVolume + change, 0, 1);
  scene.registry.get("music").setVolume(newVolume);
  scene.currentVolume = newVolume;
}

function toggleMute(scene) {
  scene.isMuted = !scene.isMuted;
  scene.registry.get("music").setMute(scene.isMuted);
  scene.muteButton.setText(scene.isMuted ? "Unmute" : "Mute");
}
