var game = new Phaser.Game(400, 600, Phaser.CANVAS, 'container-game');

game.state.add('menu', Menu);
game.state.add('theGame', theGame);
//game.state.add('gameOver', gameOver);
game.state.start('menu');