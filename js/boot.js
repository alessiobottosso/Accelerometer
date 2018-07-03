var Boot = function(game){

};

Boot.prototype = {

    preload: function(){

    },

    create: function(){
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.scale.setScreenSize(true);
        this.game.state.start("Preload");
    }
}