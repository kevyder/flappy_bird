var backgroundGame;
var flappy;
var tubes;
var spaceBar;
var theGame = {
    preload: function(){
        game.load.image('background', 'img/bg.jpeg');
        game.load.image('tube', 'img/tubo.png');
        game.load.spritesheet('birds', 'img/pajaro.png', 43, 30);
    },
    create: function(){
        backgroundGame = game.add.tileSprite(0, 0, 400, 600, 'background');
        flappy = game.add.sprite(100, 250, 'birds');
        tubes = game.add.group();
        tubes.enableBody = true;
        tubes.createMultiple('20', 'tube');
        flappy.animations.add('fly', [1, 0, 2], 4, true);
        game.physics.startSystem(Phaser.Physics.ARCADE); // Fisicas
        game.physics.arcade.enable(flappy);
        flappy.body.collideWorldBounds = true
        flappy.body.gravity.y = 1200;
        flappy.anchor.setTo(0, 0.5);
        spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceBar.onDown.add(this.jump, this);
    },
    
    update: function(){
        backgroundGame.tilePosition.x -= 1;
        flappy.animations.play('fly');
        if (flappy.angle < 20){
            flappy.angle += 1;
        }
    },
    
    jump: function(){
        flappy.body.velocity.y = -350;
        game.add.tween(flappy).to({angle: -20}, 100).start();
    }
};