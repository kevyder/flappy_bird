var backgroundGame;
var flappy;
var tubes;
var spaceBar;
var timer;
var points;
var txtPoints;
var pointSound;
var hitSound;
var theGame = {
    preload: function(){
        game.load.image('background', 'img/bg.jpeg');
        game.load.image('tube', 'img/tube.png');
        game.load.spritesheet('birds', 'img/pajaro.png', 43, 30);
        game.forceSingleUpdate = true;
        game.load.audio('pointSound', 'sounds/sfx_point.ogg');
        game.load.audio('hitSound', 'sounds/sfx_hit.ogg');
    },
    create: function(){
        backgroundGame = game.add.tileSprite(0, 0, 370, 550, 'background');
        flappy = game.add.sprite(100, 250, 'birds');
        tubes = game.add.group();
        tubes.enableBody = true;
        tubes.createMultiple('20', 'tube');
        flappy.animations.add('fly', [1, 0, 2], 4, true);
        game.physics.startSystem(Phaser.Physics.ARCADE); // Fisicas
        game.physics.arcade.enable(flappy);
        flappy.body.gravity.y = 1200;
        flappy.anchor.setTo(0, 0.5);
        spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceBar.onDown.add(this.jump, this);
        timer = game.time.events.loop(1500, this.tubesWorld, this);
        points = -1;
        txtPoints = game.add.text(20, 20, "0", {fill : "#FFF"});
        pointSound = game.add.audio('pointSound');
        hitSound = game.add.audio('hitSound');
    },
    
    update: function(){
        if (flappy.inWorld == false || flappy.position.y > 450){
            flappy.alive = false;
            tubes.forEachAlive(function(t){
                t.body.velocity.x = 0;
            }, this);
            this.state.start('gameover');
        }else{
            if(flappy.alive != false){
              backgroundGame.tilePosition.x -= 1;
              flappy.animations.play('fly');  
            }
        }
        
        if (flappy.angle < 20){
            flappy.angle += 1;
        }
        
        game.physics.arcade.overlap(tubes, flappy, this.touchTube, null, this);
    },
    
    jump: function(){
        flappy.body.velocity.y = -350;
        game.add.tween(flappy).to({angle: -20}, 100).start();
    },
    
    tubesWorld: function(){
        var spaceRange = Math.floor(Math.random()*5) + 1;
        for (var i = 0; i < 8 ; i++){
            if (i != spaceRange && i != spaceRange + 1){
                this.createTube(370, i * 55 + 20);
            }
        }
        points += 1;
        if (points > 0){
            pointSound.play();
        }
        txtPoints.text = points;
    },
    
    createTube: function(x, y){
        var tube = tubes.getFirstDead();
        tube.reset(x, y);
        tube.body.velocity.x = -180;
        tube.checkWorldBounds = true;
        tube.outOfBoundsKill = true;
    },
    
    touchTube: function(){
        if (flappy.alive == false){
            return;
        }
        flappy.alive = false;
        hitSound.play();
        game.time.events.remove(timer);
        tubes.forEachAlive(function(t){
            t.body.velocity.x = 0;
        }, this);
        game.input.enabled = false; // Desactiva los controles
        flappy.angle -= 269;
        flappy.body.gravity.y = 700;
    }
};