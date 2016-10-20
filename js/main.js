var game = new Phaser.Game(200, 300, Phaser.AUTO, 'container-game');
var mainstate = {
    preload: function(){
        // recursos del juego.
        game.stage.backgroundColor = '#000';
    },
    create: function(){
        // Inicia el juego.
    },
    
    update: function(){
        // Animaciones y movimientos del juego.
    }
};

game.state.add('main', mainstate);
game.state.start('main');