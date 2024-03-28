let j = 0;
let activePopup = false;
let popups1 = [];
let boxes = [];
let squares = [];
let closePopupsButtons = [];
let bigLayer;
let k = 0;
class LevelFour1 extends Phaser.Scene {
  // Construtor da cena
  constructor() {
    super({ key: "LevelFour1" });
  }
  // carregamento das imagens
  preload() {
    this.load.image(
      "background",
      "../../assets/FASE 4 IMAGENS/mapa-texturizado.png"
    );
    this.load.spritesheet(
      "box",
      "../../assets/FASE 4 IMAGENS/spritesheet-bau-tesouro.png",
      {
        frameWidth: 100,
        frameHeight: 100,
      }
    );
    loadPopups1(this);
    this.load.image("layer", "../../assets/imagensTelaAbertura/quadrado.png");
    this.load.image(
      "bigLayer",
      "../../assets/imagensTelaAbertura/quadrado.png"
    );
    this.load.image(
      "closePopupX",
      "../../assets/FASE 4 IMAGENS/x-fechar-pop-up.png"
    );
  }
  create() {
    let background = this.add
      .image(0, 0, "background")
      .setOrigin(0, 0)
      .setInteractive();
    this.cameras.main.setBounds(0, 0, gameWidth, gameHeight).centerOn(0, 0);
    addLayer(this);
    addPopups1(this, popups1);
    addClosePopupsButtons(this);
    addBoxes(this, boxes);
    addSquares(this, squares);

    this.anims.create({
      key: "xToBox",
      frames: this.anims.generateFrameNumbers("box", { start: 0, end: 1 }),
      frameRate: 3,
      repeat: 0,
    });
    this.anims.create({
      key: "closedToOpen",
      frames: this.anims.generateFrameNumbers("box", { start: 1, end: 2 }),
      frameRate: 3,
      repeat: 0,
    });
    setupVolumeControls(this);
    background.on("pointerdown", () => {
      moveCamera(this);
    });
  }
  update() {}
}
function loadPopups1(scene) {
  for (let i = 1; i < 12; i++) {
    scene.load.image(
      `popup1.${i}`,
      `../../assets/FASE 4 IMAGENS/conta-na-cloud-docente-${i}.png`
    );
  }
}
function moveCamera(scene) {
  console.log(j);
  if (j === 0) {
    scene.cameras.main.pan(scene.input.x, scene.input.y, 1200);
    scene.cameras.main.zoomTo(3, 1200);
    j++;
  } else {
    scene.cameras.main.zoomTo(1, 1200);
    j--;
  }
}
function addLayer(scene) {
  bigLayer = scene.add
    .sprite(0, 0, "bigLayer")
    .setOrigin(0, 0)
    .setInteractive()
    .setVisible(true)
    .setDepth(4)
    .setDisplaySize(920, 560)
    .on("pointerdown", () => {
      moveCamera(scene);
    });
}
function addPopups1(scene) {
  for (let i = 1; i < 12; i++) {
    let popup = scene.add
      .sprite(
        scene.cameras.main.midPoint.x,
        scene.cameras.main.midPoint.y,
        `popup1.${i}`
      )
      .setInteractive()
      .setVisible(false)
      .setDepth(6)
      .setScale(0.3)
      .on("pointerdown", () => {});
    popups1.push(popup);
  }
}
function addClosePopupsButtons(scene) {
  for (let i = 1; i < 12; i++) {
    let closeButton = scene.add
      .sprite(
        scene.cameras.main.midPoint.x,
        scene.cameras.main.midPoint.y,
        "closePopupX"
      )
      .setScale(0.15)
      .setInteractive({ cursor: "pointer" })
      .setVisible(false)
      .setDepth(7)
      .on("pointerdown", () => {
        moveCamera(scene);
        popups1[k - 1].setVisible(false);
        closeButton.setVisible(false);
        bigLayer.setVisible(true);
        if (i === 11) {
          scene.cameras.main.fadeOut(2000, 0, 0, 0);
          scene.scene.stop("LevelFour1");
          scene.scene.start("LevelFour2");
        }
      });
    closePopupsButtons.push(closeButton);
  }
}
function addBoxes(scene, boxes) {
  function createBox(scene, boxes, box) {
    box
      .setDepth(3)
      .setScale(0.5)
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        if (j === 0) {
          moveCamera(scene);
          box.anims.play("closedToOpen", true);
          activePopup = true;
          setTimeout(() => {
            popups1[k].x = scene.cameras.main.midPoint.x;
            popups1[k].y = scene.cameras.main.midPoint.y;
            closePopupsButtons[k].x = scene.cameras.main.midPoint.x + 86;
            closePopupsButtons[k].y = scene.cameras.main.midPoint.y - 65;
            popups1[k].setVisible(true);
            closePopupsButtons[k].setVisible(true);
            box.setVisible(false);
            k++;
          }, "1200");
        } else {
          box.anims.play("closedToOpen", true);
          activePopup = true;
          popups1[k].x = scene.cameras.main.midPoint.x;
          popups1[k].y = scene.cameras.main.midPoint.y;
          closePopupsButtons[k].x = scene.cameras.main.midPoint.x + 86;
          closePopupsButtons[k].y = scene.cameras.main.midPoint.y - 65;
          setTimeout(() => {
            popups1[k].setVisible(true);
            closePopupsButtons[k].setVisible(true);
            box.setVisible(false);
            k++;
          }, "450");
        }
      });
    boxes.push(box);
  }
  let positions = [
    { x: 100, y: 100 },
    { x: 300, y: 300 },
    { x: 400, y: 400 },
    { x: 500, y: 500 },
    { x: 600, y: 200 },
    { x: 700, y: 400 },
    { x: 800, y: 230 },
    { x: 900, y: 50 },
    { x: 350, y: 250 },
    { x: 750, y: 475 },
    { x: 820, y: 290 },
    { x: 550, y: 100 },
  ];
  for (let i = 1; i < 12; i++) {
    let box = scene.add.sprite(positions[i - 1].x, positions[i - 1].y, "box");
    createBox(scene, boxes, box);
  }
}

function addSquares(scene, squares) {
  for (let i = 1; i < 12; i++) {
    let squareBox = scene.add
      .sprite(boxes[i - 1].x, boxes[i - 1].y, "layer")
      .setDepth(5)
      .setScale(0.4)
      .setInteractive()
      .setVisible(true)
      .on("pointerdown", () => {
        boxes[i - 1].anims.play("xToBox", true);
        squareBox.setVisible(false);
        bigLayer.setVisible(false);
        if (j === 0) {
          moveCamera(scene);
        }
      });
    squares.push(squareBox);
  }
}
