// declaração das variáveis
let depth = 5;
var polaroidsFixed = 0;
var tableFirstLayer;
var tableSecondLayer;
var tableThirdLayer;
var polaroid1;
var polaroid2;
var polaroid3;
var polaroid4;
var polaroid5;
var polaroid6;
var polaroid7;
var polaroid8;
var biggerPolaroid1;
var biggerPolaroid2;
var biggerPolaroid3;
var biggerPolaroid4;
var biggerPolaroid5;
var biggerPolaroid6;
var biggerPolaroid7;
var biggerPolaroid8;
var zone1;
var zone2;
var zone3;
var zone4;
var zone5;
var zone6;
var zone7;
var zone8;
var graphics1;
var graphics2;
var graphics3;
var graphics4;
var graphics5;
var graphics6;
var graphics7;
var graphics8;
var layer;
var message;
var buttonStart;
var successfullMatch = [];
var zones = [zone1, zone2, zone3, zone4, zone5, zone6, zone7, zone8];
var polaroids = [
  polaroid1,
  polaroid2,
  polaroid3,
  polaroid4,
  polaroid5,
  polaroid6,
  polaroid7,
  polaroid8,
];
var biggerPolaroids = [
  biggerPolaroid1,
  biggerPolaroid2,
  biggerPolaroid3,
  biggerPolaroid4,
  biggerPolaroid5,
  biggerPolaroid6,
  biggerPolaroid7,
  biggerPolaroid8,
];
var graphics = [
  graphics1,
  graphics2,
  graphics3,
  graphics4,
  graphics5,
  graphics6,
  graphics7,
  graphics8,
];
var lastTime;
let blurBackground;
// abertura de classe para contrução da cena
class FirstTableScene extends Phaser.Scene {
  // Construtor da cena
  constructor() {
    super({
      key: "FirstTableScene",
    });
  }
  // Pré-carregamento de recursos
  preload() {
    this.load.image(
      "tableFirstLayer",
      "../../assets/FASE 1 IMAGENS/backgroundMesa-1.png"
    );
    this.load.image(
      "tableSecondLayer",
      "../../assets/FASE 1 IMAGENS/backgroundMesa-2.png"
    );
    this.load.image(
      "tableThirdLayer",
      "../../assets/FASE 1 IMAGENS/backgroundMesa-3.png"
    );
    this.load.image("polaroid1", "../../assets/FASE 1 IMAGENS/polaroid-1.png");
    this.load.image("polaroid2", "../../assets/FASE 1 IMAGENS/polaroid-2.png");
    this.load.image("polaroid3", "../../assets/FASE 1 IMAGENS/polaroid-3.png");
    this.load.image("polaroid4", "../../assets/FASE 1 IMAGENS/polaroid-4.png");
    this.load.image("polaroid5", "../../assets/FASE 1 IMAGENS/polaroid-5.png");
    this.load.image("polaroid6", "../../assets/FASE 1 IMAGENS/polaroid-6.png");
    this.load.image("polaroid7", "../../assets/FASE 1 IMAGENS/polaroid-7.png");
    this.load.image("polaroid8", "../../assets/FASE 1 IMAGENS/polaroid-8.png");
    this.load.image(
      "gpolaroid1",
      "../../assets/FASE 1 IMAGENS/GPolaroid-1.png"
    );
    this.load.image(
      "gpolaroid2",
      "../../assets/FASE 1 IMAGENS/GPolaroid-2.png"
    );
    this.load.image(
      "gpolaroid3",
      "../../assets/FASE 1 IMAGENS/GPolaroid-3.png"
    );
    this.load.image(
      "gpolaroid4",
      "../../assets/FASE 1 IMAGENS/GPolaroid-4.png"
    );
    this.load.image(
      "gpolaroid5",
      "../../assets/FASE 1 IMAGENS/GPolaroid-5.png"
    );
    this.load.image(
      "gpolaroid6",
      "../../assets/FASE 1 IMAGENS/GPolaroid-6.png"
    );
    this.load.image(
      "gpolaroid7",
      "../../assets/FASE 1 IMAGENS/GPolaroid-7.png"
    );
    this.load.image(
      "gpolaroid8",
      "../../assets/FASE 1 IMAGENS/GPolaroid-8.png"
    );
    this.load.image("number1", "../../assets/FASE 1 IMAGENS/1.png");
    this.load.image("number2", "../../assets/FASE 1 IMAGENS/2.png");
    this.load.image("number3", "../../assets/FASE 1 IMAGENS/3.png");
    this.load.image("number4", "../../assets/FASE 1 IMAGENS/4.png");
    this.load.image("number5", "../../assets/FASE 1 IMAGENS/5.png");
    this.load.image("number6", "../../assets/FASE 1 IMAGENS/6.png");
    this.load.image("number7", "../../assets/FASE 1 IMAGENS/7.png");
    this.load.image("number8", "../../assets/FASE 1 IMAGENS/8.png");
    this.load.image("layer", "../../assets/FASE 1 IMAGENS/camada.png");
    this.load.image("message", "../../assets/FASE 1 IMAGENS/mensagem.png");
    this.load.image(
      "startButton",
      "../../assets/FASE 1 IMAGENS/startButton.png"
    );
    this.load.image(
      "blurBackground",
      "../../assets/FASE 1 IMAGENS/preto-transparente.png"
    );
  }

  // Função chamada quando a cena é criada
  create() {
    this.cameras.main.fadeIn(400, 0, 0, 0);
    // Criação das DropZones
    // addDropzone(this);
    //Adicionando camadas da mesa
    // addTable(this);
    //Adicionando polaroids maiores
    addBiggerPolaroid(this);
    //Adicionando Polaroids
    addPolaroid(this);
    //Adiciona aba escura com instruções
    addInstructions(this);
    //Adicionando Inputs
    addInput(this);

    addBlurBackground(this, "blurBackground");
    blurBackground.setVisible(false);
    setupVolumeControls(this);
  }
  update() {}
}
//Criação das dropzones, incluíndo número no meio
function addDropzone(scene) {
  for (let i = 0; i < zones.length; i++) {
    let j = i + 1;
    if (i <= 3) {
      //Primeira linha de dropzones e números
      zones[i] = scene.add
        .zone(j * 270 - j * 80, 155, 111, 127)
        .setRectangleDropZone(111, 127);
      scene.add
        .image(j * 270 - j * 80, 155, `number${j}`)
        .setScale(0.2)
        .setDepth(2);
    } else {
      //Segunda linha de dropzones e números
      zones[i] = scene.add
        .zone((j / 1.4) * 270 - 780, 455, 111, 127)
        .setRectangleDropZone(111, 127);
      scene.add
        .image((j / 1.4) * 270 - 780, 455, `number${j}`)
        .setScale(0.2)
        .setDepth(2);
    }
    //desenho das zonas
    graphics[i] = scene.add.graphics();
    graphics[i].lineStyle(2, 0xffffff);
    graphics[i].strokeRect(
      zones[i].x - zones[i].input.hitArea.width / 2,
      zones[i].y - zones[i].input.hitArea.height / 2,
      zones[i].input.hitArea.width,
      zones[i].input.hitArea.height
    );
    graphics[i].setDepth(1);
  }
}
//Adiciona versão maior das polaroids
function addBiggerPolaroid(scene) {
  for (let i = 0; i < polaroids.length; i++) {
    biggerPolaroids[i] = scene.add
      .sprite(460, 285, `gpolaroid${i + 1}`)
      .setScale(0.4)
      .setInteractive({ cursor: "pointer" })
      .setDepth(depth + 1000)
      .setVisible(false);
  }
}
//Adiciona polaroid em posição aleatória, marca como interativa e arrastável
function addPolaroid(scene) {
  for (let i = 0; i < polaroids.length; i++) {
    let positionX = Phaser.Math.Between(100, 870);
    let positionY = Phaser.Math.Between(100, 480);
    polaroids[i] = scene.add
      .sprite(positionX, positionY, `polaroid${i + 1}`)
      .setInteractive({ cursor: "pointer" })
      .setVisible(false)
      .on("pointerdown", function () {
        let clickDelay = scene.time.now - lastTime;
        lastTime = scene.time.now;
        if (clickDelay < 350) {
          blurBackground.setVisible(true).setDepth(depth + 999);
          biggerPolaroids[i].setVisible(true).setDepth(depth + 1000);
        }
      });
    scene.input.setDraggable(polaroids[i]);
  }
}
//Adiciona tela de instruções
function addInstructions(scene) {
  addTable(scene, true);
  message = scene.add
    .image(-10, 0, "message")
    .setOrigin(0, 0)
    .setInteractive()
    .setVisible(true)
    .setDepth(4);
  buttonStart = scene.add
    .image(700, 500, "startButton")
    .setInteractive({ cursor: "pointer" })
    .setVisible(true)
    .setDepth(4)
    .on("pointerdown", () => {
      addDropzone(scene);
      scene.cameras.main.fadeOut(1000, 0, 0, 0)
      scene.cameras.main.fadeIn(1000, 0, 0, 0);
      for (const polaroid of polaroids) {
        polaroid.setVisible(true).setDepth(3);
      }
    
     message.setVisible(false);
      buttonStart.setVisible(false);
    });
}
//Adicionar inputs de drag e drop e de escondere tela de instruções
function addInput(scene) {
  scene.input.on("drag", (pointer, gameObject, dragX, dragY) => {
    gameObject.x = dragX;
    gameObject.y = dragY;
    gameObject.setDepth(depth);
    depth += 1;
    console.log(depth);
  });
  scene.input.on("drop", (pointer, gameObject, dropZone) => {
    for (let i = 0; i < zones.length; i++) {
      if (
        dropZone.y === zones[i].y &&
        dropZone.x === zones[i].x &&
        gameObject.texture.key === `polaroid${i + 1}`
      ) {
        gameObject.x = dropZone.x;
        gameObject.y = dropZone.y;
        scene.input.setDraggable(polaroids[i], false);
        successfullMatch.push(true);
        polaroidsFixed += 1;
        if (polaroidsFixed == 8) {
          nextButton(scene);
        }
        break;
      } else {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
    }
  });
}
//Adiciona camadas da mesa
function addTable(scene, visibility) {
  tableFirstLayer = scene.add
    .image(0, 0, "tableFirstLayer")
    .setScale(2)
    .setInteractive()
    .setVisible(visibility);
  tableSecondLayer = scene.add
    .image(0, 0, "tableSecondLayer")
    .setOrigin(0, 0)
    .setInteractive()
    .setVisible(visibility);
  tableThirdLayer = scene.add
    .image(0, 0, "tableThirdLayer")
    .setOrigin(0, 0)
    .setInteractive()
    .setVisible(visibility);
}
function nextButton(scene) {
  scene.add
    .image(460, 280, "startButton")
    .setInteractive({ cursor: "pointer" })
    .on("pointerdown", function () {
      scene.scene.start("SecondTableScene");
      scene.scene.stop("FirstTableScene");
    });
}
//Adiciona background de blur atrás da polaroid
function addBlurBackground(scene, key) {
  blurBackground = scene.add
    .image(0, 0, key)
    .setScale(10)
    .setAlpha(0.7)
    .setInteractive()
    .on("pointerdown", () => {
      for (const polaroid of biggerPolaroids) {
        polaroid.setVisible(false);
        blurBackground.setVisible(false);
      }
    });
  console.log(`depth${blurBackground.depth}`);
}
