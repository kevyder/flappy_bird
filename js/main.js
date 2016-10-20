var game = new Phaser.Game(400, 600, Phaser.CANVAS, 'container-game');
var backgroundGame;
var flappy;
var keys;
var mainstate = {
    preload: function(){
        game.load.image('background', '../img/bg.jpeg');
        game.load.spritesheet('birds', '../img/pajaro.png', 43, 30);
    },
    create: function(){
        backgroundGame = game.add.tileSprite(0, 0, 400, 600, 'background');
        flappy = game.add.sprite(0, 200, 'birds');
        flappy.animations.add('fly', [1, 0, 2], 4, true);
        keys = game.input.keyboard.createCursorKeys();
        game.physics.startSystem(Phaser.Physics.ARCADE); // Fisicas
        game.physics.arcade.enable(flappy);
        flappy.body.collideWorldBounds = true;
    },
    
    update: function(){
        backgroundGame.tilePosition.x -= 1;
        flappy.animations.play('fly');
        if (keys.right.isDown){
            flappy.position.x += 1;
        }
        if (keys.left.isDown){
            flappy.position.x -= 1;
        }
        if (keys.up.isDown){
            flappy.position.y -= 1;
        }
        if (keys.down.isDown){
            flappy.position.y += 1;
        }
    }
};

game.state.add('main', mainstate);
game.state.start('main');