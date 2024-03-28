var biggerPolaroid1;
var biggerPolaroid2;
var biggerPolaroid3;
var biggerPolaroid4;
var biggerPolaroid5;
var biggerPolaroid6;
var biggerPolaroid7;
var biggerPolaroid8;
var biggerPolaroids2 = [
  biggerPolaroid1,
  biggerPolaroid2,
  biggerPolaroid3,
  biggerPolaroid4,
  biggerPolaroid5,
  biggerPolaroid6,
  biggerPolaroid7,
  biggerPolaroid8,
];
class SecondTableScene extends Phaser.Scene {
  // Construtor da cena
  constructor() {
    super({
      key: "SecondTableScene",
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
    this.load.image("polaroid9", "../../assets/FASE 1 IMAGENS/polaroid-9.png");
    this.load.image(
      "polaroid10",
      "../../assets/FASE 1 IMAGENS/polaroid-10.png"
    );
    this.load.image(
      "polaroid11",
      "../../assets/FASE 1 IMAGENS/polaroid-11.png"
    );
    this.load.image(
      "polaroid12",
      "../../assets/FASE 1 IMAGENS/polaroid-12.png"
    );
    this.load.image(
      "polaroid13",
      "../../assets/FASE 1 IMAGENS/polaroid-13.png"
    );
    this.load.image(
      "polaroid14",
      "../../assets/FASE 1 IMAGENS/polaroid-14.png"
    );
    this.load.image(
      "polaroid15",
      "../../assets/FASE 1 IMAGENS/polaroid-15.png"
    );
    this.load.image(
      "polaroid16",
      "../../assets/FASE 1 IMAGENS/polaroid-16.png"
    );
    this.load.image(
      "gpolaroid9",
      "../../assets/FASE 1 IMAGENS/GPolaroid-9.png"
    );
    this.load.image(
      "gpolaroid10",
      "../../assets/FASE 1 IMAGENS/GPolaroid-10.png"
    );
    this.load.image(
      "gpolaroid11",
      "../../assets/FASE 1 IMAGENS/GPolaroid-11.png"
    );
    this.load.image(
      "gpolaroid12",
      "../../assets/FASE 1 IMAGENS/GPolaroid-12.png"
    );
    this.load.image(
      "gpolaroid13",
      "../../assets/FASE 1 IMAGENS/GPolaroid-13.png"
    );
    this.load.image(
      "gpolaroid14",
      "../../assets/FASE 1 IMAGENS/GPolaroid-14.png"
    );
    this.load.image(
      "gpolaroid15",
      "../../assets/FASE 1 IMAGENS/GPolaroid-15.png"
    );
    this.load.image(
      "gpolaroid16",
      "../../assets/FASE 1 IMAGENS/GPolaroid-16.png"
    );
    this.load.image("number9", "../../assets/FASE 1 IMAGENS/9.png");
    this.load.image("number10", "../../assets/FASE 1 IMAGENS/10.png");
    this.load.image("number11", "../../assets/FASE 1 IMAGENS/11.png");
    this.load.image("number12", "../../assets/FASE 1 IMAGENS/12.png");
    this.load.image("number13", "../../assets/FASE 1 IMAGENS/13.png");
    this.load.image("number14", "../../assets/FASE 1 IMAGENS/14.png");
    this.load.image("number15", "../../assets/FASE 1 IMAGENS/15.png");
    this.load.image("number16", "../../assets/FASE 1 IMAGENS/16.png");
    this.load.image("layer", "../../assets/FASE 1 IMAGENS/camada.png");
    this.load.image("message", "../../assets/FASE 1 IMAGENS/mensagem.png");
    this.load.image(
      "startButton",
      "../../assets/FASE 1 IMAGENS/startButton.png"
    );
    this.load.image(
      "blurBackground2",
      "../../assets/FASE 1 IMAGENS/preto-transparente.png"
    );
  }

  // Função chamada quando a cena é criada
  create() {
    polaroidsFixed = 0;
    this.cameras.main.fadeIn(400, 0, 0, 0);
    // Criação das DropZones
    addDropzone2(this);
    //Adicionando camadas da mesa
    addTable2(this);
    //Adicionando polaroids maiores
    addBiggerPolaroid2(this);
    //Adicionando Polaroids
    addPolaroid2(this);
    //Adiciona aba escura com instruções
    //Adicionando Inputs
    addInput2(this);
    addBlurBackground2(this, "blurBackground2");
    blurBackground.setVisible(false);
    setupVolumeControls(this);
  }
  update() {}
}

//Adiciona versão maior das polaroids
function addBiggerPolaroid2(scene) {
  for (let i = 0; i < polaroids.length; i++) {
    biggerPolaroids2[i] = scene.add
      .sprite(460, 285, `gpolaroid${i + 9}`)
      .setScale(0.4)
      .setInteractive({ cursor: "pointer" })
      .setDepth(depth + 11)
      .setVisible(false);
  }
}
//Adiciona polaroid em posição aleatória, marca como interativa e arrastável
function addPolaroid2(scene) {
  for (let i = 0; i < polaroids.length; i++) {
    let positionX = Phaser.Math.Between(100, 870);
    let positionY = Phaser.Math.Between(100, 480);
    polaroids[i] = scene.add
      .sprite(positionX, positionY, `polaroid${i + 9}`)
      .setDepth(3)
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", function () {
        let clickDelay = scene.time.now - lastTime;
        lastTime = scene.time.now;
        if (clickDelay < 350) {
          biggerPolaroids2[i].setVisible(true).setDepth(depth + 1000);
          blurBackground.setVisible(true).setDepth(depth + 999);
        }
      });
    scene.input.setDraggable(polaroids[i]);
  }
}
//Adicionar inputs de drag e drop e de escondere tela de instruções
function addInput2(scene) {
  scene.input.on("drag", (pointer, gameObject, dragX, dragY) => {
    gameObject.x = dragX;
    gameObject.y = dragY;
    gameObject.setDepth(depth);
    depth += 1;
  });
  scene.input.on("drop", (pointer, gameObject, dropZone) => {
    for (let i = 0; i < zones.length; i++) {
      if (
        dropZone.y === zones[i].y &&
        dropZone.x === zones[i].x &&
        gameObject.texture.key === `polaroid${i + 9}`
      ) {
        gameObject.x = dropZone.x;
        gameObject.y = dropZone.y;
        scene.input.setDraggable(polaroids[i], false);
        gameObject.setDepth(5);
        successfullMatch.push(true);
        polaroidsFixed += 1;
        if (polaroidsFixed == 8) {
          nextButton2(scene);
        }
        break;
      } else {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
    }
  });
  scene.input.on(
    "pointerdown",
    function () {
      if (message.visible === true) {
        scene.cameras.main.fadeIn(200, 0, 0, 0);
        tableFirstLayer.setVisible(true);
        tableSecondLayer.setVisible(true);
        tableThirdLayer.setVisible(true);
        for (const polaroid of polaroids) {
          polaroid.setVisible(true).setDepth(3);
        }
      }
      message.setVisible(false);
      buttonStart.setVisible(false);
    },
    scene
  );
}
//Adiciona camadas da mesa
function addTable2(scene) {
  tableFirstLayer = scene.add
    .image(0, 0, "tableFirstLayer")
    .setScale(2)
    .setInteractive();
  tableSecondLayer = scene.add
    .image(0, 0, "tableSecondLayer")
    .setOrigin(0, 0)
    .setInteractive();
  tableThirdLayer = scene.add
    .image(0, 0, "tableThirdLayer")
    .setOrigin(0, 0)
    .setInteractive();
}
function nextButton2(scene) {
  scene.add
    .image(460, 280, "startButton")
    .setInteractive({ cursor: "pointer" })
    .on("pointerdown", function () {
      CallLevelMenu(1);
      scene.scene.stop("SecondTableScene");
      scene.scene.start("LevelMenu");
    });
}
function addDropzone2(scene) {
  for (let i = 0; i < zones.length; i++) {
    let j = i + 1;
    if (i <= 3) {
      //Primeira linha de dropzones e números
      zones[i] = scene.add
        .zone(j * 270 - j * 80, 155, 111, 127)
        .setRectangleDropZone(111, 127);
      scene.add
        .image(j * 270 - j * 80, 155, `number${j + 8}`)
        .setScale(0.2)
        .setDepth(2);
    } else {
      //Segunda linha de dropzones e números
      zones[i] = scene.add
        .zone((j / 1.4) * 270 - 780, 455, 111, 127)
        .setRectangleDropZone(111, 127);
      scene.add
        .image((j / 1.4) * 270 - 780, 455, `number${j + 8}`)
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
function addBlurBackground2(scene, key) {
  blurBackground = scene.add
    .image(0, 0, key)
    .setScale(10)
    .setAlpha(0.7)
    .setInteractive()
    .setVisible(false)
    .on("pointerdown", () => {
      for (const polaroid2 of biggerPolaroids2) {
        polaroid2.setVisible(false);
        blurBackground.setVisible(false);
      }
    });
}
