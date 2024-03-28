//configuração do phaser
const gameWidth = 920;
const gameHeight = 560;

var music;
var isMuted = false;
var currentVolume = 1;

var config = {
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: gameWidth,
    height: gameHeight,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },

  type: Phaser.AUTO,

  scene: [
    StartScene,
    CreditosScene,
    FirstTableScene,
    SecondTableScene,
    LevelMenu,
    LevelTwo,
    LevelThree,
    LevelFour1,
    LevelFour2,
  ],

  callbacks: {
    preBoot: function (game) {

      game.registry.set('music', null);
      game.registry.set('isMuted', isMuted);
      game.registry.set('currentVolume', currentVolume);
    }
  }
};
var game = new Phaser.Game(config);
