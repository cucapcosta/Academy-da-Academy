//configuração do phaser
var config = {
  type: Phaser.AUTO,
  width: 920,
  height: 560,

  scene: [StartScene],
};

var game = new Phaser.Game(config);
