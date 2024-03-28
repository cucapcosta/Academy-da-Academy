//Nota para próximos desenvolvedores: alguns console.log ainda estão no código para testar por que certas partes não estão funcionando como planejado
//Recomendo analisar os dados e criar casos de teste
//Essa fase está acabando com a minha sanidade

//Configurando variaveis
//Zonas do servidor
var serverZone1;
var serverZone2;
//Peças do servidor
var pieceA1;
var pieceA2;
var pieceA3;
var pieceA4;
var pieceB1;
var pieceB2;
var pieceB3;
var pieceB4;
var piecesAConnected = 0;
var piecesBConnected = 0;
var piecesA = [];
var piecesB = [];
//Ambiente
var computer;
var backgroundLight;
var backgroundDone;
//Maleta
var caseClosed;
var caseOpen;
//Telas do computador
var computerScreen0;
var computerScreen1;
var computerScreen2;
var computerScreen3;
var computerScreen4;
var currentComputerScreen = 0;
//Servidores
var serverA1;
var serverA2;
var serverA3;
var serverA4;
var serverB1;
var serverB2;
var serverB3;
var serverB4;
var A;
var B;
var idServerA = 1;
var idServerB = 1;
var sidebarServerRed;
var sidebarServerBlue;
//Assets estágio 2 e 3
//CPUS
var cpuRed;
var cpuBlue;
//Monitores
var monitorRedOff;
var monitorRedOn;
var monitorRedBig;
var monitorBlueOff;
var monitorBlueOn;
var monitorBlueBig;
//Conectores de fio
var blueWireConnector;
var pinkWireConnector;
var yellowWireConnector;
var greenWireConnector;
//Mesa de trabalho
var workBox;
//Verificadores de estado
var hasEnteredSecondStage = false;
var hasEnteredThirdStage = false;
var correctWires = 0;
var blueWireConnected = false;
var blueWireStartConnection = false;
var greenWireConnected = false;
var greenWireStartConnection = false;
var yellowWireConnected = false;
var yellowWireStartConnection = false;
var pinkWireConnected = false;
var pinkWireStartConnection = false;
var isConnecting = false;
//Pontos da corda
var blueWirePoints = [];
var pinkWirePoints = [];
var yellowWirePoints = [];
var greenWirePoints = [];
//Cabos
var blueRope;
var greenRope;
var yellowRope;
var pinkRope;

class LevelThree extends Phaser.Scene {
  constructor() {
    super({ key: "LevelThree" });
    this.ropes = [];
  }
  preload() {
    //Pedaços de servidor
    this.load.image("pieceA1", "../../assets/FASE 3 IMAGENS/pieceA1.png");
    this.load.image("pieceA2", "../../assets/FASE 3 IMAGENS/pieceA2.png");
    this.load.image("pieceA3", "../../assets/FASE 3 IMAGENS/pieceA3.png");
    this.load.image("pieceA4", "../../assets/FASE 3 IMAGENS/pieceA4.png");
    this.load.image("pieceB1", "../../assets/FASE 3 IMAGENS/pieceB1.png");
    this.load.image("pieceB2", "../../assets/FASE 3 IMAGENS/pieceB2.png");
    this.load.image("pieceB3", "../../assets/FASE 3 IMAGENS/pieceB3.png");
    this.load.image("pieceB4", "../../assets/FASE 3 IMAGENS/pieceB4.png");
    //Letra do servidor
    this.load.image("A", "../../assets/FASE 3 IMAGENS/A.png");
    this.load.image("B", "../../assets/FASE 3 IMAGENS/B.png");
    //Computador
    this.load.image("computer", "../../assets/FASE 3 IMAGENS/computador.png");
    //Fundo
    this.load.image(
      "backgroundLight",
      "../../assets/FASE 3 IMAGENS/fundoClaro.png"
    );
    this.load.image(
      "backgroundDone",
      "../../assets/FASE 3 IMAGENS/fundoFinalizado.png"
    );
    this.load.image(
      "backgroundDark",
      "../../assets/FASE 3 IMAGENS/fundoEscuro.png"
    );
    this.load.image("caseOpen", "../../assets/FASE 3 IMAGENS/maletaAberta.png");
    //Maleta
    this.load.image(
      "caseClosed",
      "../../assets/FASE 3 IMAGENS/maletaFechada.png"
    );
    //Servidores
    this.load.image("serverA1", "../../assets/FASE 3 IMAGENS/ServidorA1.png");
    this.load.image("serverA2", "../../assets/FASE 3 IMAGENS/ServidorA2.png");
    this.load.image("serverA3", "../../assets/FASE 3 IMAGENS/ServidorA3.png");
    this.load.image("serverA4", "../../assets/FASE 3 IMAGENS/ServidorA4.png");
    this.load.image("serverB1", "../../assets/FASE 3 IMAGENS/ServidorB1.png");
    this.load.image("serverB2", "../../assets/FASE 3 IMAGENS/ServidorB2.png");
    this.load.image("serverB3", "../../assets/FASE 3 IMAGENS/ServidorB3.png");
    this.load.image("serverB4", "../../assets/FASE 3 IMAGENS/ServidorB4.png");
    //Telas do computador
    this.load.image(
      "computerScreen0",
      "../../assets/FASE 3 IMAGENS/telaComputador0_4.png"
    );
    this.load.image(
      "computerScreen1",
      "../../assets/FASE 3 IMAGENS/telaComputador1_4.png"
    );
    this.load.image(
      "computerScreen2",
      "../../assets/FASE 3 IMAGENS/telaComputador2_4.png"
    );
    this.load.image(
      "computerScreen3",
      "../../assets/FASE 3 IMAGENS/telaComputador3_4.png"
    );
    this.load.image(
      "computerScreen4",
      "../../assets/FASE 3 IMAGENS/telaComputador4_4.png"
    );
    //Botão de próximo
    this.load.image("nextButton", "../../assets/FASE 3 IMAGENS/nextButton.png");
    //Sidebars dos estágios 2 e 3
    this.load.image(
      "sidebarServerRed",
      "../../assets/FASE 3 IMAGENS/sidebarServerRed.png"
    );
    this.load.image(
      "sidebarServerBlue",
      "../../assets/FASE 3 IMAGENS/sidebarServerBlue.png"
    );
    //Assets Estágio 2 e 3
    //CPUS
    this.load.image("cpuBlue", "../../assets/FASE 3 IMAGENS/cpuBlue.png");
    this.load.image("cpuRed", "../../assets/FASE 3 IMAGENS/cpuRed.png");
    //Conectores de fios
    this.load.image(
      "yellowWireConnector",
      "../../assets/FASE 3 IMAGENS/fioAmarelo.png"
    );
    this.load.image(
      "blueWireConnector",
      "../../assets/FASE 3 IMAGENS/fioAzul.png"
    );
    this.load.image(
      "pinkWireConnector",
      "../../assets/FASE 3 IMAGENS/fioRosa.png"
    );
    this.load.image(
      "greenWireConnector",
      "../../assets/FASE 3 IMAGENS/fioVerde.png"
    );
    //Monitores
    this.load.image(
      "monitorRedOff",
      "../../assets/FASE 3 IMAGENS/monitorAOff.png"
    );
    this.load.image(
      "monitorRedOn",
      "../../assets/FASE 3 IMAGENS/monitorAOn.png"
    );
    this.load.image(
      "monitorRedBig",
      "../../assets/FASE 3 IMAGENS/monitorAAmpliado.png"
    );
    this.load.image(
      "monitorBlueOff",
      "../../assets/FASE 3 IMAGENS/monitorBOff.png"
    );
    this.load.image(
      "monitorBlueOn",
      "../../assets/FASE 3 IMAGENS/monitorBOn.png"
    );
    this.load.image(
      "monitorBlueBig",
      "../../assets/FASE 3 IMAGENS/monitorBAmpliado.png"
    );
    //WorkBox
    this.load.image("workBox", "../../assets/FASE 3 IMAGENS/workBox.png");
    //Debug
    this.load.image(
      "debugDot",
      "../../assets/FASE 3 IMAGENS/connectorTest.png"
    );
    //Cabo
    this.load.image("blueWire", "../../assets/FASE 3 IMAGENS/blueWire.png");
    this.load.image("pinkWire", "../../assets/FASE 3 IMAGENS/pinkWire.png");
    this.load.image("greenWire", "../../assets/FASE 3 IMAGENS/greenWire.png");
    this.load.image("yellowWire", "../../assets/FASE 3 IMAGENS/yellowWire.png");
  }
  create() {
    //Chama criação de itens interativos e visuais
    addScreenImages(this);
    addServer(this);
    addServerItem(this);
    addLevelThreeItems(this);
    addServerDropZone(this);
    dragServer(this);
    addSecondStageItems(this);
    addThirdStageItems(this);
    setupVolumeControls(this);
  }
  update() {
    //Verifica se está no segundo estágio da fase
    if (hasEnteredSecondStage) {
      //Verifica em qual conector o jogador está segurando
      this.input.on("pointerdown", (pointer) => {
        if (
          pointer.x > 765 &&
          pointer.x < 795 &&
          pointer.y > 435 &&
          pointer.y < 465 &&
          !blueWireStartConnection
        ) {
          blueWirePoints.push(new Phaser.Math.Vector2(780, 450));
          blueWireStartConnection = true;
          isConnecting = true;
        } else if (
          pointer.x > 765 && 
          pointer.x < 795 && 
          pointer.y > 355 && 
          pointer.y < 385 && 
          !pinkWireStartConnection
          ) {
          pinkWirePoints.push(new Phaser.Math.Vector2(780, 370));
          pinkWireStartConnection = true;
          isConnecting = true;
        } else if (
          pointer.x > 765 &&
          pointer.x < 795 &&
          pointer.y > 275 &&
          pointer.y < 295 &&
          !yellowWireStartConnection
        ) {
          yellowWirePoints.push(new Phaser.Math.Vector2(780, 290));
          yellowWireStartConnection = true;
          isConnecting = true;
        } else if (
          pointer.x > 765 &&
          pointer.x < 795 &&
          pointer.y > 195 &&
          pointer.y < 225 &&
          !greenWireStartConnection
        ) {
          greenWirePoints.push(new Phaser.Math.Vector2(780, 210));
          greenWireStartConnection = true;
          isConnecting = true;
        }
      });
      //Cria a linha quando o jogador solta o mouse
      //Lembrar: De vez em quando acontece um erro em que o final da corda é o seu começo, e ela vai ao infinito e além
      if (isConnecting) {
        this.input.on("pointerup", (pointer) => {
          if (
            pointer.x > 335 &&
            pointer.x < 355 &&
            pointer.y > 375 &&
            pointer.y < 395 &&
            !blueWireConnected &&
            blueWirePoints.length == 1
          ) {
            blueWirePoints.push(new Phaser.Math.Vector2(345, 385));
            blueRope = this.add
              .rope(0, 0, "blueWire", null, blueWirePoints)
              .setDepth(6);
            this.ropes.push(blueRope);
            correctWires++;
            blueWireConnected = true;
            isConnecting = false;
          } else if (
            pointer.x > 340 &&
            pointer.x < 360 &&
            pointer.y > 340 &&
            pointer.y < 360 &&
            !pinkWireConnected &&
            pinkWirePoints.length == 1
          ) {
            pinkWirePoints.push(new Phaser.Math.Vector2(350, 350));
            pinkRope = this.add
              .rope(0, 0, "pinkWire", null, pinkWirePoints)
              .setDepth(6);
            this.ropes.push(pinkRope);
            correctWires++;
            pinkWireConnected = true;
            isConnecting = false;
          } else if (
            pointer.x > 335 &&
            pointer.x < 355 &&
            pointer.y > 395 &&
            pointer.y < 415 &&
            !yellowWireConnected &&
            yellowWirePoints.length == 1
          ) {
            yellowWirePoints.push(new Phaser.Math.Vector2(345, 405));
            yellowRope = this.add
              .rope(0, 0, "yellowWire", null, yellowWirePoints)
              .setDepth(6);
            this.ropes.push(yellowRope);
            correctWires++;
            yellowWireConnected = true;
            isConnecting = false;
          } else if (
            pointer.x > 337 &&
            pointer.x < 357 &&
            pointer.y > 356 &&
            pointer.y < 376 &&
            !greenWireConnected &&
            greenWirePoints.length == 1
          ) {
            greenWirePoints.push(new Phaser.Math.Vector2(347, 366));
            greenRope = this.add
              .rope(0, 0, "greenWire", null, greenWirePoints)
              .setDepth(6);
            this.ropes.push(greenRope);
            correctWires++;
            greenWireConnected = true;
            isConnecting = false;
          } else {
            isConnecting = false;
          }
          //Verifica se todas as cordas estão corretas e liga o monitor
          if (correctWires == 4 && hasEnteredSecondStage) {
            turnOnMonitorA();
          }
        });
      }
    }
    //Verifica se jogador está na terceira etapa da fase
    if (hasEnteredThirdStage) {
      //Verifica em qual conector o jogador está segurando
      this.input.on("pointerdown", (pointer) => {
        if (
          pointer.x > 770 &&
          pointer.x < 790 &&
          pointer.y > 440 &&
          pointer.y < 460 &&
          !blueWireStartConnection
        ) {
          blueWirePoints.push(new Phaser.Math.Vector2(780, 450));
          blueWireStartConnection = true;
        } else if (
          pointer.x > 770 &&
          pointer.x < 790 &&
          pointer.y > 360 &&
          pointer.y < 380 &&
          !pinkWireStartConnection
        ) {
          pinkWirePoints.push(new Phaser.Math.Vector2(780, 370));
          pinkWireStartConnection = true;
        } else if (
          pointer.x > 770 &&
          pointer.x < 790 &&
          pointer.y > 280 &&
          pointer.y < 300 &&
          !yellowWireStartConnection
        ) {
          yellowWirePoints.push(new Phaser.Math.Vector2(780, 290));
          yellowWireStartConnection = true;
        } else if (
          pointer.x > 770 &&
          pointer.x < 790 &&
          pointer.y > 200 &&
          pointer.y < 220 &&
          !greenWireStartConnection
        ) {
          greenWirePoints.push(new Phaser.Math.Vector2(780, 210));
          greenWireStartConnection = true;
        }
      });
      //Verifica se ele consegue conectar
      //Olhar nota na linha 197 sobre erro aparentemente aleatório
      this.input.on("pointerup", (pointer) => {
        if (
          pointer.x > 335 &&
          pointer.x < 355 &&
          pointer.y > 375 &&
          pointer.y < 395 &&
          !blueWireConnected &&
          blueWirePoints.length == 1
        ) {
          blueWirePoints.push(new Phaser.Math.Vector2(345, 385));
          blueRope = this.add
            .rope(0, 0, "blueWire", null, blueWirePoints)
            .setDepth(6);
          this.ropes.push(blueRope);
          correctWires++;
          blueWireConnected = true;
        } else if (
          pointer.x > 340 &&
          pointer.x < 360 &&
          pointer.y > 340 &&
          pointer.y < 360 &&
          !pinkWireConnected &&
          pinkWirePoints.length == 1
        ) {
          pinkWirePoints.push(new Phaser.Math.Vector2(350, 350));
          pinkRope = this.add
            .rope(0, 0, "pinkWire", null, pinkWirePoints)
            .setDepth(6);
          this.ropes.push(pinkRope);
          correctWires++;
          pinkWireConnected = true;
        } else if (
          pointer.x > 335 &&
          pointer.x < 355 &&
          pointer.y > 395 &&
          pointer.y < 415 &&
          !yellowWireConnected &&
          yellowWirePoints.length == 1
        ) {
          yellowWirePoints.push(new Phaser.Math.Vector2(345, 405));
          yellowRope = this.add
            .rope(0, 0, "yellowWire", null, yellowWirePoints)
            .setDepth(6);
          this.ropes.push(yellowRope);
          correctWires++;
          yellowWireConnected = true;
        } else if (
          pointer.x > 337 &&
          pointer.x < 357 &&
          pointer.y > 356 &&
          pointer.y < 376 &&
          !greenWireConnected &&
          greenWirePoints.length == 1
        ) {
          greenWirePoints.push(new Phaser.Math.Vector2(347, 366));
          greenRope = this.add
            .rope(0, 0, "greenWire", null, greenWirePoints)
            .setDepth(6);
          this.ropes.push(greenRope);
          correctWires++;
          greenWireConnected = true;
          console.log(correctWires);
        }
        //Verifica se todos os cabos estão conectados
        if (correctWires == 4 && hasEnteredThirdStage) {
          console.log("Conectou todos os fios da parte 3");
          turnOnMonitorB();
        }
      });
    }
  }
}

//Adiciona telas do computador
function addScreenImages(scene) {
  //Primeira tela, sem nenhum ponto verde
  computerScreen0 = scene.add
    .image(0, 0, "computerScreen0")
    .setOrigin(0, 0)
    .setVisible(false)
    .setDepth(5)
    .setInteractive()
    .on("pointerdown", () => {
      computerScreen0.setVisible(false);
    });
  //Segunda tela, um ponto verde
  computerScreen1 = scene.add
    .image(0, 0, "computerScreen1")
    .setOrigin(0, 0)
    .setVisible(false)
    .setDepth(5)
    .setInteractive()
    .on("pointerdown", () => {
      computerScreen1.setVisible(false);
    });
  //Terceira tela, dois pontos verdes
  computerScreen2 = scene.add
    .image(0, 0, "computerScreen2")
    .setOrigin(0, 0)
    .setVisible(false)
    .setDepth(5)
    .setInteractive()
    .on("pointerdown", () => {
      computerScreen2.setVisible(false);
    });
  //Quarta tela, três pontos verdes
  computerScreen3 = scene.add
    .image(0, 0, "computerScreen3")
    .setOrigin(0, 0)
    .setVisible(false)
    .setDepth(5)
    .setInteractive()
    .on("pointerdown", () => {
      scene.cameras.main.fadeOut(2000, 0, 0, 0);
      setTimeout(() => {
        scene.scene.stop("LevelThree");
        CallLevelMenu(3);
        scene.scene.start("LevelMenu");
        currentComputerScreen = 0;
        piecesAConnected = 0;
        piecesBConnected = 0;
      }, 2000);
    });
  //Quinta tela, ainda não implementada, quatro pontos verdes
  computerScreen4 = scene.add
    .image(0, 0, "computerScreen4")
    .setOrigin(0, 0)
    .setVisible(false)
    .setDepth(5)
    .setInteractive()
    .on("pointerdown", () => {
      computerScreen4.setVisible(false);
    });
}
//Chama a tela baseada no id atual do computador. Cada caso contém um preset diferente baseado na etapa
function callScreen(caso) {
  switch (caso) {
    case 0:
      computerScreen0.setVisible(true);
      computer.setVisible(false);
      caseClosed.setVisible(true);
      A.setVisible(true);
      B.setVisible(true);
      break;
    case 1:
      computerScreen1.setVisible(true);
      sidebarServerRed.setVisible(true);
      computer.setVisible(false);
      break;
    case 2:
      computerScreen2.setVisible(true);
      sidebarServerBlue.setVisible(true);
      computer.setVisible(false);
      break;
    case 3:
      computerScreen3.setVisible(true);
      break;
    case 4:
      computerScreen4.setVisible(true);
      break;
  }
}
function addLevelThreeItems(scene) {
  //Background
  backgroundLight = scene.add.image(0, 0, "backgroundLight").setOrigin(0, 0);
  //Computador
  computer = scene.add
    .image(560, 380, "computer")
    .setInteractive({ cursor: "pointer" })
    .on("pointerdown", () => {
      callScreen(currentComputerScreen);
    });
  //Setup da maleta
  caseClosed = scene.add
    .image(460, 535, "caseClosed")
    .setInteractive({ cursor: "pointer" })
    .setVisible(false)
    .setDepth(3)
    .on("pointerdown", () => {
      //animação de abrir a maleta, bem gambiarra mas funciona muito bem
      caseOpen.x = 460;
      caseOpen.y = 470;
      caseClosed.x = 2000;
      caseClosed.y = 2000;
      callServerItem(scene);
      setTimeout(function () {
        caseOpen.x = 2000;
        caseOpen.y = 2000;
        caseClosed.x = 460;
        caseClosed.y = 535;
      }, 500);
    });
  caseOpen = scene.add.image(2000, 2000, "caseOpen").setDepth(3);
}
//Setup dos pedaços do servidor, que ficam escondidos até serem ativados com o clique da maleta
function addServer(scene) {
  serverA1 = scene.add
    .image(100, 300, "serverA1")
    .setVisible(false)
    .setDepth(2);
  serverA2 = scene.add
    .image(100, 300, "serverA2")
    .setVisible(false)
    .setDepth(2);
  serverA3 = scene.add
    .image(100, 300, "serverA3")
    .setVisible(false)
    .setDepth(2);
  serverA4 = scene.add
    .image(100, 300, "serverA4")
    .setVisible(false)
    .setDepth(2);
  serverB1 = scene.add
    .image(820, 300, "serverB1")
    .setVisible(false)
    .setDepth(2);
  serverB2 = scene.add
    .image(820, 300, "serverB2")
    .setVisible(false)
    .setDepth(2);
  serverB3 = scene.add
    .image(820, 300, "serverB3")
    .setVisible(false)
    .setDepth(2);
  serverB4 = scene.add
    .image(820, 300, "serverB4")
    .setVisible(false)
    .setDepth(2);
  //Setup das letras que mostram qual servidor é qual
  B = scene.add.image(820, 100, "B").setDepth(2).setVisible(false);
  A = scene.add.image(100, 100, "A").setDepth(2).setVisible(false);

  //Lista de peças
  piecesA = [pieceA1, pieceA2, pieceA3, pieceA4];
  piecesB = [pieceB1, pieceB2, pieceB3, pieceB4];
}
//Função que chama o item de servidor ao clicar na maleta
function callServerItem(scene) {
  let sorteador = Math.random();
  if (sorteador <= 0.5 && piecesAConnected < 4) {
    piecesA[piecesAConnected].setVisible(true);
    piecesAConnected += 1;
  } else if (sorteador <= 0.5 && piecesAConnected >= 4) {
    if (piecesBConnected < 4) {
      piecesB[piecesBConnected].setVisible(true);
      piecesBConnected += 1;
    }
  } else if (sorteador > 0.5 && piecesBConnected < 4) {
    piecesB[piecesBConnected].setVisible(true);
    piecesBConnected += 1;
  } else if (sorteador > 0.5 && piecesBConnected >= 4) {
    if (piecesAConnected < 4) {
      piecesA[piecesAConnected].setVisible(true);
      piecesAConnected += 1;
    }
  }
}
//Adiciona assets dos pedaços de servidor
function addServerItem(scene) {
  pieceA1 = scene.add
    .image(460, 400, "pieceA1")
    .setVisible(false)
    .setInteractive()
    .setDepth(4);
  pieceA2 = scene.add
    .image(460, 400, "pieceA2")
    .setInteractive()
    .setVisible(false)
    .setDepth(4);
  pieceA3 = scene.add
    .image(460, 400, "pieceA3")
    .setInteractive()
    .setVisible(false)
    .setDepth(4);
  pieceA4 = scene.add
    .image(460, 400, "pieceA4")
    .setInteractive()
    .setVisible(false)
    .setDepth(4);
  pieceB1 = scene.add
    .image(460, 400, "pieceB1")
    .setInteractive()
    .setVisible(false)
    .setDepth(4);
  pieceB2 = scene.add
    .image(460, 400, "pieceB2")
    .setInteractive()
    .setVisible(false)
    .setDepth(4);
  pieceB3 = scene.add
    .image(460, 400, "pieceB3")
    .setInteractive()
    .setVisible(false)
    .setDepth(4);
  pieceB4 = scene.add
    .image(460, 400, "pieceB4")
    .setInteractive()
    .setVisible(false)
    .setDepth(4);
  //garante que todos os pedaços são arrastáveis
  scene.input.setDraggable(pieceA1);
  scene.input.setDraggable(pieceA2);
  scene.input.setDraggable(pieceA3);
  scene.input.setDraggable(pieceA4);
  scene.input.setDraggable(pieceB1);
  scene.input.setDraggable(pieceB2);
  scene.input.setDraggable(pieceB3);
  scene.input.setDraggable(pieceB4);
  //Não lembro por que o setup das listas está duplicado, vale a pena testar se remover faz sentido
  piecesA = [pieceA1, pieceA2, pieceA3, pieceA4];
  piecesB = [pieceB1, pieceB2, pieceB3, pieceB4];
}

//Cria dropzones dos servidores
function addServerDropZone(scene) {
  serverZone1 = scene.add
    .zone(50, 560, 300, 1000)
    .setRectangleDropZone(300, 1000);
  serverZone2 = scene.add
    .zone(759, 560, 300, 1000)
    .setRectangleDropZone(300, 1000);
}

//Função de mudar o servidor dependendo de qual peça foi encaixada
function buildServer(scene, server, id) {
  if (server == "A") {
    switch (id) {
      case 1:
        serverA1.setVisible(true);
        break;
      case 2:
        serverA1.setVisible(false);
        serverA2.setVisible(true);
        break;
      case 3:
        serverA2.setVisible(false);
        serverA3.setVisible(true);
        break;
      case 4:
        serverA3.setVisible(false);
        serverA4.setVisible(true);
        break;
    }
  } else if (server == "B") {
    switch (id) {
      case 1:
        serverB1.setVisible(true);
        break;
      case 2:
        serverB1.setVisible(false);
        serverB2.setVisible(true);
        break;
      case 3:
        serverB2.setVisible(false);
        serverB3.setVisible(true);
        break;
      case 4:
        serverB3.setVisible(false);
        serverB4.setVisible(true);
        break;
    }
  }
}

//Permite que as peças de servidor sejam detectadas como arrastadas e se movam com o mouse
function dragServer(scene) {
  //Muda a posição do objeto para junto do mouse, sempre trazendo ele para cima de todos os objetos
  scene.input.on("drag", (pointer, gameObject, dragX, dragY) => {
    gameObject.x = dragX;
    gameObject.y = dragY;
    gameObject.setDepth(depth);
    depth += 1;
  });
  //Verifica se a peça foi depositada no lugar certo
  scene.input.on("drop", (pointer, gameObject, dropZone) => {
    for (var i = 1; i < 5; i++) {
      //verifica se a peça é do servidor A e está no lugar certo
      if (
        dropZone.x == serverZone1.x &&
        dropZone.y == serverZone1.y &&
        gameObject.texture.key == `pieceA${i}`
      ) {
        console.log("Botou na zona A corretamente");
        buildServer(scene, "A", idServerA);
        gameObject.setVisible(false);
        idServerA += 1;
        console.log('IdServerA: ' + idServerA + ' , idServerB: ' + idServerB);
        //Começa o segundo estágio se tudo está montado
        if (idServerB == 5 && idServerA == 5) {
          startSecondStage(scene);
        }
        //Verifica se a peça é do servidor B e está no lugar certo caso o teste anterior falhe
      } else if (
        dropZone.x == serverZone2.x &&
        dropZone.y == serverZone1.y &&
        gameObject.texture.key == `pieceB${i}`
      ) {
        buildServer(scene, "B", idServerB);
        idServerB += 1;
        console.log("Botou na zona B corretamente");
        gameObject.setVisible(false);
        console.log('IdServerA: ' + idServerA + ' , idServerB: ' + idServerB);
        //Começa segundo estágio se tudo está montado
        if (idServerA == 5 && idServerB == 5) {
          startSecondStage(scene);
        }
      }
    }
  });
}
//Começa segundo estágio com o botão de next
function startSecondStage(scene) {
  let nextButton = scene.add
    .image(460, 280, "nextButton")
    .setInteractive({ cursor: "pointer" })
    .setDepth(4)
    .on("pointerdown", () => {
      //Muda a tela do computador, faz um fadeIn, mostra o computador e apaga todos os assets da primeira etapa
      currentComputerScreen += 1;
      scene.cameras.main.fadeOut(3000, 0, 0, 0);
      scene.cameras.main.fadeIn(3000, 0, 0, 0);
      computer.setVisible(true);
      nextButton.setVisible(false);
      serverA4.setVisible(false);
      serverB4.setVisible(false);
      caseClosed.setVisible(false);
      A.setVisible(false);
      B.setVisible(false);
    });
}
//Adiciona os items da segunda etapa
function addSecondStageItems(scene) {
  //WorkBox
  workBox = scene.add
    .image(0, 0, "workBox")
    .setDepth(4)
    .setOrigin(0, 0)
    .setVisible(false);
  //Monitores
  monitorRedBig = scene.add
    .image(0, 0, "monitorRedBig")
    .setDepth(6)
    .setOrigin(0, 0)
    .setVisible(false)
    .setInteractive({ cursor: "pointer" })
    .on("pointerdown", () => {
      monitorRedBig.setVisible(false);
    });
  monitorRedOff = scene.add
    .image(250, 150, "monitorRedOff")
    .setDepth(5)
    .setVisible(false);
  monitorRedOn = scene.add
    .image(250, 150, "monitorRedOn")
    .setDepth(5)
    .setVisible(false)
    .setInteractive({ cursor: "pointer" })
    .on("pointerdown", () => {
      makeBigMonitorRed(scene);
    });
  //Conectores
  blueWireConnector = scene.add
    .image(780, 450, "blueWireConnector")
    .setDepth(5)
    .setVisible(false);
  pinkWireConnector = scene.add
    .image(780, 370, "pinkWireConnector")
    .setDepth(5)
    .setVisible(false);
  yellowWireConnector = scene.add
    .image(780, 290, "yellowWireConnector")
    .setDepth(5)
    .setVisible(false);
  greenWireConnector = scene.add
    .image(780, 210, "greenWireConnector")
    .setDepth(5)
    .setVisible(false);
  //CPU
  cpuRed = scene.add.image(300, 400, "cpuRed").setDepth(5).setVisible(false);
  //Sidebar
  sidebarServerRed = scene.add
    .image(0, 148, "sidebarServerRed")
    .setOrigin(0, 0)
    .setInteractive({ cursor: "pointer" })
    .setVisible(false)
    .on("pointerdown", () => {
      openSecondStageTerminal(scene);
    });

  //Segue lista código que usei para achar os pontos de conexão e a lista de pontos caso seja necessário futuramente
  //scene.add.image(350, 350, 'debugDot')
  //.setDepth(6);
  //Conector da cpu amarelo: 345, 405
  //Conector da cpu azul: 345, 385
  //Conector da cpu verde: 347, 366
  //Conector da cpu rosa: 350,350
}
//Adiciona itens da terceira etapa
function addThirdStageItems(scene) {
  //Monitores
  monitorBlueBig = scene.add
    .image(0, 0, "monitorBlueBig")
    .setDepth(6)
    .setOrigin(0, 0)
    .setVisible(false)
    .setInteractive({ cursor: "pointer" })
    .on("pointerdown", () => {
      monitorBlueBig.setVisible(false);
    });
  monitorBlueOff = scene.add
    .image(250, 150, "monitorBlueOff")
    .setDepth(5)
    .setVisible(false);
  monitorBlueOn = scene.add
    .image(250, 150, "monitorBlueOn")
    .setDepth(5)
    .setVisible(false)
    .setInteractive({ cursor: "pointer" })
    .on("pointerdown", () => {
      makeBigMonitorBlue(scene);
    });
  //Conectores
  blueWireConnector = scene.add
    .image(780, 450, "blueWireConnector")
    .setDepth(5)
    .setVisible(false);
  pinkWireConnector = scene.add
    .image(780, 370, "pinkWireConnector")
    .setDepth(5)
    .setVisible(false);
  yellowWireConnector = scene.add
    .image(780, 290, "yellowWireConnector")
    .setDepth(5)
    .setVisible(false);
  greenWireConnector = scene.add
    .image(780, 210, "greenWireConnector")
    .setDepth(5)
    .setVisible(false);
  //CPU
  cpuBlue = scene.add.image(300, 400, "cpuBlue").setDepth(5).setVisible(false);
  //Sidebar
  sidebarServerBlue = scene.add
    .image(664, 148, "sidebarServerBlue")
    .setOrigin(0, 0)
    .setInteractive({ cursor: "pointer" })
    .setVisible(false)
    .setDepth(5)
    .on("pointerdown", () => {
      openThirdStageTerminal(scene);
    });
}
//Abre o terminal de trabalho da segunda etapa
function openSecondStageTerminal() {
  workBox.setVisible(true);
  monitorRedOff.setVisible(true);
  blueWireConnector.setVisible(true);
  pinkWireConnector.setVisible(true);
  yellowWireConnector.setVisible(true);
  greenWireConnector.setVisible(true);
  cpuRed.setVisible(true);
  sidebarServerRed.setVisible(false);
  hasEnteredSecondStage = true;
}
//Abre o terminal de trabalho da terceira etapa
function openThirdStageTerminal() {
  workBox.setVisible(true);
  monitorBlueOff.setVisible(true);
  blueWireConnector.setVisible(true);
  pinkWireConnector.setVisible(true);
  yellowWireConnector.setVisible(true);
  greenWireConnector.setVisible(true);
  cpuBlue.setVisible(true);
  sidebarServerBlue.setVisible(false);
  hasEnteredThirdStage = true;
}
//Liga o monitor A (vermelho) quando se conecta todos os fios
function turnOnMonitorA() {
  monitorRedOff.setVisible(false);
  monitorRedOn.setVisible(true);
}
//Função para chamar a tela grande de explicação; De quebra, ainda tira todos os assets antigos da etapa e já chama o computador com a tela nova
function makeBigMonitorRed() {
  monitorRedBig.setVisible(true);
  blueRope.setVisible(false);
  greenRope.setVisible(false);
  yellowRope.setVisible(false);
  pinkRope.setVisible(false);
  workBox.setVisible(false);
  monitorRedOn.setVisible(false);
  cpuRed.setVisible(false);
  greenWireConnector.setVisible(false);
  blueWireConnector.setVisible(false);
  pinkWireConnector.setVisible(false);
  yellowWireConnector.setVisible(false);
  computer.setVisible(true);
  currentComputerScreen = 2;
  hasEnteredSecondStage = false;
  correctWires = 0;
  blueWireConnected = false;
  blueWireStartConnection = false;
  greenWireConnected = false;
  greenWireStartConnection = false;
  yellowWireConnected = false;
  yellowWireStartConnection = false;
  pinkWireConnected = false;
  pinkWireStartConnection = false;
  blueWirePoints = [];
  pinkWirePoints = [];
  yellowWirePoints = [];
  greenWirePoints = [];
}
//Mesma coisa da função anterior, mas chama a tela da terceira etapa.
//A currentComputerScreen já é chamada corretamente, mas não tem nenhuma funcionalidade implementada ainda
function makeBigMonitorBlue() {
  monitorBlueBig.setVisible(true);
  blueRope.setVisible(false);
  greenRope.setVisible(false);
  yellowRope.setVisible(false);
  pinkRope.setVisible(false);
  workBox.setVisible(false);
  monitorBlueOn.setVisible(false);
  cpuBlue.setVisible(false);
  greenWireConnector.setVisible(false);
  blueWireConnector.setVisible(false);
  pinkWireConnector.setVisible(false);
  yellowWireConnector.setVisible(false);
  computer.setVisible(true);
  currentComputerScreen = 3;
  hasEnteredThirdStage = false;
  correctWires = 0;
  blueWireConnected = false;
  blueWireStartConnection = false;
  greenWireConnected = false;
  greenWireStartConnection = false;
  yellowWireConnected = false;
  yellowWireStartConnection = false;
  pinkWireConnected = false;
  pinkWireStartConnection = false;
  blueWirePoints = [];
  pinkWirePoints = [];
  yellowWirePoints = [];
  greenWirePoints = [];
}
//Liga o monitor B (azul) quando termina de conectar os cabos
function turnOnMonitorB() {
  monitorBlueOff.setVisible(false);
  monitorBlueOn.setVisible(true);
}
