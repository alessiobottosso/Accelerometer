var Main = function(game){
	var availableText;
};

Main.prototype = {

    create: function() {

            var gn;

            gn = new GyroNorm();

            gn.init().then(function() 
            {
                var isAvailable = gn.isAvailable();
                
                if (isAvailable.accelerationAvailable)
                {
                    availableText = game.add.text(16, 16, 'Accelerometer IS available :)', { fontSize: '32px', fill: '#ffff' });

                    gn.start(gnCallback);
                }
                else
                {
                    availableText = game.add.text(16, 16, 'Accelerometer IS NOT available :(', { fontSize: '32px', fill: '#ffff' });

                    gn.start(gnCallback);
                }
            })
    },

    update: function() {

    },

    gameOver: function(){
        this.game.state.start('GameOver');
    },
};

function gnCallback (data)
{
    game.add.text(16, 48, 'Motion x: ' + data.dm.x, { fontSize: '32px', fill: '#ffff' });
    game.add.text(16, 77, 'Motion y: ' + data.dm.y, { fontSize: '32px', fill: '#ffff' });
    game.add.text(16, 109, 'Motion z: ' + data.dm.z, { fontSize: '32px', fill: '#ffff' });

    game.add.text(16, 173,  'Motion x + gravity: ' + data.dm.gx, { fontSize: '32px', fill: '#ffff' });
    game.add.text(16, 205, 'Motion y + gravity: ' + data.dm.gy, { fontSize: '32px', fill: '#ffff' });
    game.add.text(16, 237, 'Motion z + gravity: ' + data.dm.gz, { fontSize: '32px', fill: '#ffff' });
}