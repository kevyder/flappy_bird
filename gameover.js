var gameover = {
    preload: function(){
        game.stage.backgroundColor = '#FFF';
        game.load.image('btn', 'img/btn.png');
    },
    create: function(){
         var button = this.add.button(game.width/2, game.height/2, 'btn', this.startGame, this);
         game.input.enabled = true; // Activa los controles
         button.anchor.setTo(0.5);
         var text = game.add.text(game.world.centerX, game.world.centerY - 110, "Juego terminado");
         if (points.toString() == -1){
             var textpoints = game.add.text(game.world.centerX, game.world.centerY - 85, "Points: 0");
         }else{
             var textpoints = game.add.text(game.world.centerX, game.world.centerY - 85, "Puntos: "+ points.toString());
         }
         text.anchor.setTo(0.5);
         text.fontSize = 24;
         text.fill = '#333';
         textpoints.anchor.setTo(0.5);
         textpoints.fontSize = 18;
         textpoints.fill = '#333';
    },
    startGame: function(){
         this.state.start('theGame');
    }
};