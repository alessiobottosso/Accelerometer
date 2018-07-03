var Main = function(game)
{   
    var availableText;

    var motionX;
    var motionY;
    var motionZ;

    var motionGx;
    var motionGy;
    var motionGz;
};

Main.prototype = 
{
    create: function() 
    {
        var gn;

        gn = new GyroNorm();

        availableText = game.add.text(16, 16, 'Accelerometer', { fontSize: '32px', fill: '#ffff' });

        motionX = game.add.text(16, 48, 'Motion x: ', { fontSize: '32px', fill: '#ffff' });
        motionY = game.add.text(16, 77, 'Motion y: ', { fontSize: '32px', fill: '#ffff' });
        motionZ = game.add.text(16, 109, 'Motion z: ', { fontSize: '32px', fill: '#ffff' });

        motionGx = game.add.text(16, 173,  'Motion x + gravity: ', { fontSize: '32px', fill: '#ffff' });
        motionGy = game.add.text(16, 205, 'Motion y + gravity: ', { fontSize: '32px', fill: '#ffff' });
        motionGz = game.add.text(16, 237, 'Motion z + gravity: ', { fontSize: '32px', fill: '#ffff' });

        gn.init().then(function() 
        {
            var isAvailable = gn.isAvailable();
            
            if (isAvailable.accelerationAvailable)
            {
                availableText.text = 'Accelerometer IS available :)';
                gn.start(gnCallback);
            }
            else
            {
                availableText.text = 'Accelerometer IS NOT available :(';
                gn.start(gnCallback);
            }
        })
    },

    update: function()
    {
    },

    gameOver: function()
    {
        this.game.state.start('GameOver');
    },
};

function gnCallback (data)
{
    motionX.text = 'Motion x: ' + data.dm.x;
    motionY.text = 'Motion y: ' + data.dm.y;
    motionZ.text = 'Motion z: ' + data.dm.z;
    motionGx.text = 'Motion x + gravity: ' + data.dm.gx;
    motionGy.text = 'Motion y + gravity: ' + data.dm.gy;
    motionGz.text = 'Motion z + gravity: ' + data.dm.gz;
}