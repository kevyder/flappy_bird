var game = new Phaser.Game(400, 600, Phaser.CANVAS, 'container-game');
var backgroundGame;
var button;
var mainstate = {
    preload: function(){
        // recursos del juego.
        game.load.image('background', '../img/bg.jpeg');
        game.load.image('bird', '../img/pajaro1.png');
        game.load.image('btn', '../img/btn.png');
    },
    create: function(){
        // Inicia el juego.
        backgroundGame = game.add.tileSprite(0, 0, 400, 600, 'background');
        game.add.sprite(0, 200, 'bird');
        button = game.add.sprite(game.width/2, game.height/2, 'btn');
        button.anchor.setTo(0.5, 0.5);
    },
    
    update: function(){
        // Animaciones y movimientos del juego.
        backgroundGame.tilePosition.x -= 1;
    }
};

game.state.add('main', mainstate);
game.state.start('main');