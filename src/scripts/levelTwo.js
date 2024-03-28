//Definindo variaveis
let objectsLeft = 6;
//Verifica se pode cavar
let diggy;
//Verificação se está grande já
let beetleBig;
let crabBig;
let bottleBig;
let canBig1;
let canBig2;
let bookBig;
let workcaseBig;
let calendarBig;
let curriculumBig;
let resourcesBig;
let supportBig;
//Objetos
let beetle;
let crab;
let bottle;
let can1;
let can2;
let workcase;
let book;
let calendar;
let curriculum;
let resources;
let support;
//Instruções
let instructionsLevel2;
//Cursor
let cursorShovel = 'url(../../assets/FASE 2 IMAGENS/shovelCursor.png), pointer';
class LevelTwo extends Phaser.Scene {
  constructor() {
    super({ key: "LevelTwo" });
  }
  
  //Carregando assets
  preload() {
    //Fundo
    this.load.image("bgAreia", "../../assets/FASE 2 IMAGENS/bgAreia.png");
    //Objetos
    this.load.image("besouro", "../../assets/FASE 2 IMAGENS/besouro.png");
    this.load.image(
      "carangueijo",
      "../../assets/FASE 2 IMAGENS/carangueijo.png"
    );
    this.load.image("latinha1", "../../assets/FASE 2 IMAGENS/latinha1.png");
    this.load.image("latinha2", "../../assets/FASE 2 IMAGENS/latinha2.png");
    this.load.image("livro", "../../assets/FASE 2 IMAGENS/livro.png");
    this.load.image("maleta", "../../assets/FASE 2 IMAGENS/maleta.png");
    this.load.image("calendario", "../../assets/FASE 2 IMAGENS/calendario.png");
    this.load.image("curriculo", "../../assets/FASE 2 IMAGENS/curriculo.png");
    this.load.image("recursos", "../../assets/FASE 2 IMAGENS/recursos.png");
    this.load.image("suporte", "../../assets/FASE 2 IMAGENS/suporte.png");
    //Instruções
    this.load.image(
      "besouroInst",
      "../../assets/FASE 2 IMAGENS/besouroInst.png"
    );
    this.load.image(
      "carangueijoInst",
      "../../assets/FASE 2 IMAGENS/caranguejoInst.png"
    );
    this.load.image(
      "latinha1Inst",
      "../../assets/FASE 2 IMAGENS/latinha1Inst.png"
    );
    this.load.image(
      "latinha2Inst",
      "../../assets/FASE 2 IMAGENS/latinha2Inst.png"
    );
    this.load.image(
      "instructions",
      "../../assets/FASE 2 IMAGENS/instrucoesFase2.png"
    );
    this.load.image("livroInst", "../../assets/FASE 2 IMAGENS/livroInst.png");
    this.load.image("maletaInst", "../../assets/FASE 2 IMAGENS/maletaInst.png");
    this.load.image(
      "calendarioInst",
      "../../assets/FASE 2 IMAGENS/caledarioInst.png"
    );
    this.load.image(
      "curriculoInst",
      "../../assets/FASE 2 IMAGENS/curriculoInst.png"
    );
    this.load.image(
      "recursosInst",
      "../../assets/FASE 2 IMAGENS/recursosInst.png"
    );
    this.load.image(
      "suporteInst",
      "../../assets/FASE 2 IMAGENS/suporteInst.png"
    );

    //Botões
    this.load.image(
      "btnConfirma",
      "../../assets/FASE 2 IMAGENS/btnConfirma.png"
    );
    this.load.image("btnLixo", "../../assets/FASE 2 IMAGENS/btnLixo.png");
    this.load.image("nextButton", "../../assets/FASE 2 IMAGENS/nextButton.png");
    //cursor
  }
  create() {
    //Carregamento de assets
    var bgAreia = this.add.image(0, 0, "bgAreia").setOrigin(0, 0).setScale(1.3);
    //Cria objetos na tela
    createObject(this, "besouro", beetle, 460, 300, beetleBig, false);
    createObject(this, "carangueijo", crab, 100, 100, crabBig, false);
    createObject(this, "latinha1", can1, 800, 200, canBig1, false);
    createObject(this, "latinha2", can2, 700, 400, canBig2, false);
    createObject(this, "livro", book, 200, 400, bookBig, true);
    createObject(this, "maleta", workcase, 800, 500, workcaseBig, true);
    createObject(this, "calendario", calendar, 100, 280, calendarBig, true);
    createObject(this, "curriculo", curriculum, 250, 125, curriculumBig, true);
    createObject(this, "recursos", resources, 580, 100, resourcesBig, true);
    createObject(this, "suporte", support, 500, 480, supportBig, true);
    addInstructionsLevel2(this);
    setupVolumeControls(this);
  }
}

//Função de criar objetos na tela
function createObject(cena, nome, variavel, posX, posY, variavelCresceu, util) {
  variavel = cena.add
    .image(posX, posY, nome)
    .setScale(0.1)
    .setAlpha(0.2)
    .setDepth(3)
    .setInteractive({cursor: "pointer"})
    .on("pointerover", () => {
      //Verifica se o usuário acabou de entrar em contato com a imagem
      if (diggy) {
        diggy = false;
        //Diminui transparência
        variavel.setAlpha(variavel.alpha + 0.1);
        if (variavel.alpha >= 0.7 && !variavelCresceu) {
          //Cresce a imagem se chegar em certo valor
          variavel.setScale(variavel.scale + 0.1);
          variavelCresceu = true;
        }
      }
    })
    .on("pointerout", () => {
      //Permite que cave novamente depois de retirar o mouse do objeto
      diggy = true;
    })
    .on("pointerdown", () => {
      //Permite que clique no objeto uma vez que ele chega em certa visibilidade
      if (variavel.alpha >= 0.7) {
        variavel.setVisible(false);
        createObjectView(cena, util, nome);
      }
    });
}

function createObjectView(cena, util, nome) {
  let question = cena.add
    .image(0, 0, nome + "Inst")
    .setOrigin(0, 0)
    .setDepth(10);
  if (util) {
    let btnConfirm = cena.add
      .image(350, 495, "btnConfirma")
      .setScale(0.8)
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        question.setVisible(false);
        btnConfirm.setVisible(false);
        btnTrash.setVisible(false);
        objectsLeft -= 1;
        if (objectsLeft == 0) {
          createEndButton(cena);
        }
      })
      .setDepth(11);
    let btnTrash = cena.add
      .image(550, 495, "btnLixo")
      .setScale(0.8)
      .setDepth(11)
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        cena.cameras.main.shake(200, 0.01);
      });
  } else {
    let btnConfirm = cena.add
      .image(350, 490, "btnConfirma")
      .setScale(0.8)
      .setDepth(11)
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        cena.cameras.main.shake(200, 0.01);
      });
    let btnTrash = cena.add
      .image(550, 490, "btnLixo")
      .setScale(0.8)
      .setDepth(11)
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => {
        question.setVisible(false);
        btnConfirm.setVisible(false);
        btnTrash.setVisible(false);
      });
  }
}

function createEndButton(cena) {
  cena.add
    .image(700, 500, "nextButton")
    .setInteractive()
    .on("pointerdown", () => {
      CallLevelMenu(2);
      cena.scene.stop("LevelTwo");
      cena.scene.start("LevelMenu");
    });
}
function addInstructionsLevel2(scene) {
  scene.instructionsLevel2 = scene.add
    .image(0, 0, "instructions")
    .setInteractive()
    .setDepth(10)
    .setOrigin(0, 0)
    .on("pointerdown", () => {
      scene.instructionsLevel2.setVisible(false);
    });
}
