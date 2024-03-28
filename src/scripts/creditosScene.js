let membersSquare1;
let membersSquare2;
let membersSquare3;
let startSquare2;
let startSquare3;
let startRect1;
let startRect2;
let startRect3;
let publicTargetRect1;
let publicTargetSquare1;
let teacherSquare1;
let teacherSquare2;
let teacherRect1;
let background;

class CreditosScene extends Phaser.Scene {
  // Construtor da cena
  constructor() {
    super({ key: "CreditosScene" });
  }
  // carregamento das imagens
  preload() {
    this.load.image("background", "../../assets/tela_completa.png");
    this.load.image(
      "members",
      "../../assets/imagensTelaAbertura/integrantes-popup.png"
    );
    this.load.image(
      "publicTarget",
      "../../assets/imagensTelaAbertura/PublicoAlvo-popup.png"
    );
    this.load.image(
      "teacher",
      "../../assets/imagensTelaAbertura/orientador-popup.png"
    );
    this.load.image(
      "start",
      "../../assets/imagensTelaAbertura/startGame-popup.png"
    );
    this.load.image(
      "square",
      "../../assets/imagensTelaAbertura/quadrado_inv.png"
    );
    this.load.image(
      "rect",
      "../../assets/imagensTelaAbertura/retangulo_inv.png"
    );
    this.load.image(
      "rect-2",
      "../../assets/imagensTelaAbertura/retangulo_inv_2.png"
    );
  }
  create() {
    this.cameras.main.fadeIn(2000, 0, 0, 0);
    background = this.add
      .image(0, 0, "background")
      .setOrigin(0, 0)
      .setInteractive();
    const keys = {
      members: "members",
      publicTarget: "publicTarget",
      teacher: "teacher",
      start: "start",
    };
    let highlightImages = [];
    let keysArray = Object.keys(keys);

    for (let i = 0; i < keysArray.length; i++) {
      const highlightImage = createHighlightedImages(keysArray[i], this);
      highlightImages.push(highlightImage);
    }
    let members = highlightImages[0];
    let publicTarget = highlightImages[1];
    let teacher = highlightImages[2];
    let start = highlightImages[3];

    membersSquare1 = createForm(membersSquare1, 720, 360, "square", this, 1);
    createFormInteraction(membersSquare1, this, members);
    membersSquare2 = createForm(membersSquare2, 750, 290, "square", this, 0.5);
    createFormInteraction(membersSquare2, this, members);
    membersSquare3 = createForm(membersSquare3, 820, 290, "square", this, 0.5);
    createFormInteraction(membersSquare3, this, members);
    startSquare2 = createForm(startSquare2, 820, 190, "square", this, 0.4);
    createFormInteraction(startSquare2, this, start);
    startSquare3 = createForm(startSquare3, 680, 190, "square", this, 0.4);
    createFormInteraction(startSquare3, this, start);
    startRect1 = createForm(startRect1, 895, 186, "rect-2", this, 0.2);
    createFormInteraction(startRect1, this, start);
    startRect2 = createForm(startRect2, 590, 15, "rect", this, 0.9);
    createFormInteraction(startRect2, this, start);
    startRect3 = createForm(startRect3, 595, 190, "rect", this, 0.3);
    createFormInteraction(startRect3, this, start);
    publicTargetRect1 = createForm(
      publicTargetRect1,
      462,
      150,
      "rect-2",
      this,
      0.6
    );
    createFormInteraction(publicTargetRect1, this, publicTarget);
    publicTargetSquare1 = createForm(
      publicTargetSquare1,
      500,
      115,
      "square",
      this,
      0.3
    );
    createFormInteraction(publicTargetSquare1, this, publicTarget);
    teacherSquare1 = createForm(teacherSquare1, 75, 310, "square", this, 0.9);
    createFormInteraction(teacherSquare1, this, teacher);
    teacherSquare2 = createForm(teacherSquare2, 200, 250, "square", this, 0.5);
    createFormInteraction(teacherSquare2, this, teacher);
    teacherRect1 = createForm(teacherRect1, 75, 250, "square", this, 0.3);
    createFormInteraction(teacherRect1, this, teacher);
    // configuração do mouse quando em cima dos sprites
    startRect1.on(
      "pointerdown",
      function () {
        this.cameras.main.fadeOut(2000, 0, 0, 0);
        setTimeout(() => {
          CallLevelMenu(0);
          this.scene.stop("CreditosScene");
          this.scene.start("LevelMenu");
        }, "2000");
      },
      this
    );
    startRect2.on(
      "pointerdown",
      function () {
        this.cameras.main.fadeOut(2000, 0, 0, 0);
        setTimeout(() => {
          CallLevelMenu(0);
          this.scene.stop("CreditosScene");
          this.scene.start("LevelMenu");
        }, "2000");
      },
      this
    );
    startRect3.on(
      "pointerdown",
      function () {
        this.cameras.main.fadeOut(2000, 0, 0, 0);
        setTimeout(() => {
          CallLevelMenu(0);
          this.scene.stop("CreditosScene");
          this.scene.start("LevelMenu");
        }, "2000");
      },
      this
    );
    this.input.on("pointerdown", function () {}, this);
    setupVolumeControls(this);
  }
  update() {
    console.log(background.setInteractive());
  }
}
function createHighlightedImages(key, scene) {
  img = scene.add
    .sprite(0, 0, key)
    .setOrigin(0, 0)
    .setInteractive()
    .setVisible(false)
    .setDepth(2);
  return img;
}
function createForm(variable, positionX, positionY, form, scene, scale) {
  variable = scene.add
    .sprite(positionX, positionY, form)
    .setOrigin(0, 0)
    .setScale(scale)
    .setInteractive({ cursor: "pointer" })
    .setDepth(5)
    .setTint(0x0000);
  return variable;
}
function createFormInteraction(form, scene, object) {
  form.on(
    "pointerover",
    function () {
      object.setVisible(true);
    },
    scene
  );
  form.on(
    "pointerout",
    function () {
      object.setVisible(false);
    },
    scene
  );
}
