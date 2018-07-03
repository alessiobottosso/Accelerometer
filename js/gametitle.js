var GameTitle = function(game){};

GameTitle.prototype = {

    create: function(){
		this.game.state.start("Main");
    },

    startGame: function(){
        //this.game.state.start("Main");
    }

}