var game = new Phaser.Game(370, 550, Phaser.CANVAS, 'container-game');

game.state.add('menu', Menu);
game.state.add('theGame', theGame);
game.state.add('gameover', gameover);
game.state.start('menu');