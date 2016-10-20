var game = new Phaser.Game(400, 600, Phaser.CANVAS, 'container-game');
var backgroundGame;
var flappy;
var mainstate = {
    preload: function(){
        game.load.image('background', '../img/bg.jpeg');
        game.load.spritesheet('birds', '../img/pajaro.png', 43, 30);
    },
    create: function(){
        backgroundGame = game.add.tileSprite(0, 0, 400, 600, 'background');
        flappy = game.add.sprite(0, 200, 'birds');
        flappy.frame = 1;
        flappy.animations.add('fly', [0, 1, 3], 7, true);
    },
    
    update: function(){
        backgroundGame.tilePosition.x -= 1;
        flappy.animations.play('fly');
    }
};

game.state.add('main', mainstate);
game.state.start('main');