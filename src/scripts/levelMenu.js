var idLevelNow = 0;
var level1;
var level2;
var level3;
var level4;
var level5;
var levels = [];
var buttonLevel1;
var buttonLevel2;
var buttonLevel3;
var buttonLevel4;
var buttonLevel5;
var menuButtons;
var isCallingLevelMenu = false;

//Configurando como uma cena phaser
class LevelMenu extends Phaser.Scene {
  constructor() {
    super({ key: "LevelMenu" });
  }

  //carregando arquivos
  preload() {
    //carregando background
    this.load.image("fase1-background", "../../assets/menudeFases/1dois.png");
    this.load.image("fase2-background", "../../assets/menudeFases/2dois.png");
    this.load.image("fase3-background", "../../assets/menudeFases/3tres.png");
    this.load.image("fase4-background", "../../assets/menudeFases/4quatro.png");
    this.load.image("fase5-background", "../../assets/menudeFases/5cinco.png");
    this.load.image("button", "../../assets/menudeFases/nuvemInvisivel.png");
  }

  create() {
    this.cameras.main.fadeIn(2000, 0, 0, 0);
    // Adiciona a imagem e ajusta sua escala para preencher a tela inteira
    this.level1 = this.add
      .image(0, 0, "fase1-background")
      .setOrigin(0, 0)
      .setVisible(false);
    this.level2 = this.add
      .image(0, 0, "fase2-background")
      .setOrigin(0, 0)
      .setVisible(false);
    this.level3 = this.add
      .image(0, 0, "fase3-background")
      .setOrigin(0, 0)
      .setVisible(false);
    this.level4 = this.add
      .image(0, 0, "fase4-background")
      .setOrigin(0, 0)
      .setVisible(false);
    this.level5 = this.add
      .image(0, 0, "fase5-background")
      .setOrigin(0, 0)
      .setVisible(false);
    //Cria uma lista com todas as versões do menu de levels
    this.levels = [
      this.level1,
      this.level2,
      this.level3,
      this.level4,
      this.level5,
    ];
    //Adiciona botões invisíveis das levels
    this.buttonLevel1 = this.add
      .image(115, 150, "button")
      .setInteractive({ cursor: "pointer" })
      .on(
        "pointerdown",
        function () {
          LoadLevel(this, "FirstTableScene");
        },
        this
      );
    this.buttonLevel2 = this.add
      .image(510, 230, "button")
      .setInteractive({ cursor: "pointer" })
      .on(
        "pointerdown",
        function () {
          LoadLevel(this, "LevelTwo");
        },
        this
      );
    this.buttonLevel3 = this.add
      .image(500, 120, "button")
      .setInteractive({ cursor: "pointer" })
      .on(
        "pointerdown",
        function () {
          LoadLevel(this, "LevelThree");
        },
        this
      );
    this.buttonLevel4 = this.add
      .image(750, 315, "button")
      .setInteractive({ cursor: "pointer" })
      .on(
        "pointerdown",
        function () {
          LoadLevel(this, "LevelFour1");
        },
        this
      );
    this.buttonLevel5 = this.add
      .image(275, 365, "button")
      .setInteractive({ cursor: "pointer" })
      .on(
        "pointerdown",
        function () {
          LoadLevel(this, "FirstTableScene");
        },
        this
      );
    //Cria lista de botões
    this.menuButtons = [
      this.buttonLevel1,
      this.buttonLevel2,
      this.buttonLevel3,
      this.buttonLevel4,
      this.buttonLevel5,
    ];

    //Chama função de carregar menu de levels
    if (isCallingLevelMenu) {
      LoadLevelMenu(this);
      isCallingLevelMenu = false;
    }
    setupVolumeControls(this);
  }
}

//Carrega fase selecionada
function LoadLevel(scene, fase) {
  scene.cameras.main.fadeOut(2000, 0, 0, 0);
  scene.scene.stop("LevelMenu");
  scene.scene.start(fase);
}

//Chama menu de levels; Chamado por outras levels
function CallLevelMenu(id) {
  if (id > idLevelNow) {
    idLevelNow = id;
  }
  isCallingLevelMenu = true;
}
//Carrega assets necessários dependendo do nível atual do jogador
function LoadLevelMenu(scene) {
  if (idLevelNow == 0) {
    scene.levels[0].setVisible(true);
  } else {
    scene.levels[idLevelNow - 1].setVisible(false);
    scene.levels[idLevelNow].setVisible(true);
  }
  for (let i = 0; i < scene.menuButtons.length; i++) {
    scene.menuButtons[i].setVisible(false);
  }
  for (let i = 0; i <= idLevelNow; i++) {
    scene.menuButtons[i].setVisible(true);
  }
}
