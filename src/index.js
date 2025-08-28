import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#222',
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

function preload() {
  // Example asset
  this.load.image('logo', 'https://labs.phaser.io/assets/sprites/phaser3-logo.png');
}

function create() {
  const logo = this.add.image(400, 300, 'logo');
  this.tweens.add({
    targets: logo,
    angle: 360,
    duration: 2000,
    repeat: -1
  });
}

function update() {}