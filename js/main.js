var game = new Phaser.Game(400, 600, Phaser.CANVAS, 'container-game');
var backgroundGame;
var mainstate = {
    preload: function(){
        // recursos del juego.
        game.load.image('background', '../img/bg.jpeg');
    },
    create: function(){
        // Inicia el juego.
        backgroundGame = game.add.tileSprite(0, 0, 400, 600, 'background');
    },
    
    update: function(){
        // Animaciones y movimientos del juego.
        backgroundGame.tilePosition.x -= 1;
    }
};

game.state.add('main', mainstate);
game.state.start('main');