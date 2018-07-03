var Boot = function(game){

};

Boot.prototype = {

    preload: function(){

    },

    create: function(){
        this.game.scale.scaleMode = Phaser.ScaleManager.CANVAS;
        //this.scale.setScreenSize(true);
        this.game.state.start("Preload");
    }
}