var Menu = {
     preload: function(){
       game.stage.backgroundColor = '#FFF';
       game.load.image('btn', 'img/btn.png');
    },
     create: function(){
         var button = this.add.button(game.width/2, game.height/2, 'btn', this.startGame, this);
         button.anchor.setTo(0.5);
         var text = game.add.text(game.world.centerX, game.world.centerY - 85, "☺ Iniciar Juego ☺");
         text.anchor.setTo(0.5);
         text.fontSize = 24;
         text.fill = '#333';

    },
    
     startGame: function(){
         this.state.start('theGame');
    }
}