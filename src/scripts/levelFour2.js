let teacher;
let students = [];
let cursors;
let cloud;
let popup2;
let popup3;
let popup4;
let popup5;
let popup6;
let popups = [];
let studentsGone = 0;
let i = 0;
let xButton1;
class LevelFour2 extends Phaser.Scene {
  // Construtor da cena
  constructor() {
    super({ key: "LevelFour2" });
  }
  // carregamento das imagens
  preload() {
    loadStudents(this);
    this.load.image("teacher", "../../assets/FASE 4 IMAGENS/professor.png");
    this.load.image(
      "background2",
      "../../assets/FASE 4 IMAGENS/background-fase-4.png"
    );
    this.load.image("cloud", "../../assets/FASE 4 IMAGENS/cloud-fase-4.png");
    this.load.image(
      "xButton",
      "../../assets/FASE 4 IMAGENS/x-fechar-pop-up.png"
    );
    loadPopups(this);
  }
  create() {
    this.cameras.main.fadeIn(2000, 0, 0, 0);
    this.physics.add.sprite(0, 0, "background2").setOrigin(0, 0);
    teacher = this.physics.add
      .sprite(100, 100, "teacher")
      .setCollideWorldBounds(true)
      .setScale(0.4)
      .setDepth(5);
    cloud = this.physics.add
      .sprite(20, 440, "cloud")
      .setScale(0.6)
      .setOrigin(0, 0);
    let popup1 = this.add
      .sprite(0, 0, "popup1")
      .setInteractive()
      .setVisible(true)
      .setOrigin(0, 0)
      .setDepth(7);
    xButton1 = this.add
      .sprite(710, 40, `xButton`)
      .setScale(0.5)
      .setInteractive({ cursor: "pointer" })
      .setVisible(true)
      .setOrigin(0, 0)
      .setDepth(8)
      .on("pointerdown", () => {
        console.log(i);
        popup1.setVisible(false);
        if (i > 0) {
          popups[i - 1].setVisible(false);
        }
        xButton1.setVisible(false);
        this.physics.resume();
      });
    popups.push(popup2, popup3, popup4, popup5, popup6);
    addPopups(this, popups);
    addStudents(this, teacher, cloud);
    collideStudentsLoop(this, students);
    cursors = this.input.keyboard.createCursorKeys();
    setupVolumeControls(this);
  }
  update() {
    if (cursors.down.isDown) {
      teacher.setVelocity(0, 200);
    }
    if (cursors.up.isDown) {
      teacher.setVelocity(0, -200);
    }
    if (cursors.right.isDown) {
      teacher.setVelocity(200, 0);
    }
    if (cursors.left.isDown) {
      teacher.setVelocity(-200, 0);
    }
    showPopup(this, popups);
  }
}
function loadStudents(scene) {
  for (let i = 1; i < 13; i++) {
    scene.load.image(`student${i}`, `../../assets/FASE 4 IMAGENS/${i}.png`);
  }
}
function loadPopups(scene) {
  for (let i = 1; i < 7; i++) {
    scene.load.image(
      `popup${i}`,
      `../../assets/FASE 4 IMAGENS/segunda-parte-popup-${i}.png`
    );
  }
}
function addStudents(scene, teacher, cloud) {
  for (let i = 0; i < 25; i++) {
    let positionX = Phaser.Math.Between(300, 870);
    let positionY = Phaser.Math.Between(100, 480);
    let studentAsset = Phaser.Math.Between(1, 12);
    const student = scene.physics.add
      .sprite(positionX, positionY, `student${studentAsset}`)
      .setInteractive()
      .setCollideWorldBounds(true)
      .setScale(0.3)
      .setBounce(1);
    students.push(student);
    scene.physics.add.collider(teacher, student, null, () => {});
    scene.physics.add.overlap(cloud, student, null, () => {
      student.setVisible(false);
      student.disableBody();
      studentsGone += 1;
    });
  }
}
function collideStudentsLoop(scene, students) {
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students.length; j++) {
      if (i !== j) {
        scene.physics.add.collider(students[j], students[i], null, () => {});
      }
    }
  }
}
function addPopups(scene, popups) {
  for (let i = 0; i < 5; i++) {
    popups[i] = scene.add
      .sprite(0, 0, `popup${i + 2}`)
      .setInteractive()
      .setVisible(false)
      .setOrigin(0, 0)
      .setDepth(7);
    console.log(popups[i].texture.key);
  }
}
function showPopup(scene, popups) {
  if (studentsGone === 5) {
    popups[i].setVisible(true);
    xButton1.setVisible(true);
    scene.physics.pause();
    studentsGone = 0;
    i++;
    console.log(i);
  }
}
