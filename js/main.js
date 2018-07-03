var Main = function(game)
{   
    var availableText;

    var motionX;
    var motionY;
    var motionZ;

    var motionGx;
    var motionGy;
    var motionGz;

    var MX, MY, MZ;
    var mx, my, mz;
    var maxX, minX, maxY, minY, maxZ, minZ;
};

Main.prototype = 
{
    create: function() 
    {
        var gn;

        gn = new GyroNorm();

        MX = 0;
        MY = 0;
        MZ = 0;
        mx = 0;
        my = 0;
        mz = 0;

        availableText = game.add.text(16, 16, 'Accelerometer', { fontSize: '32px', fill: '#ffff' });

        motionX = game.add.text(16, 48, 'Motion x: ', { fontSize: '32px', fill: '#ffff' });
        motionY = game.add.text(16, 77, 'Motion y: ', { fontSize: '32px', fill: '#ffff' });
        motionZ = game.add.text(16, 109, 'Motion z: ', { fontSize: '32px', fill: '#ffff' });

        motionGx = game.add.text(16, 173,  'Motion x + gravity: ', { fontSize: '32px', fill: '#ffff' });
        motionGy = game.add.text(16, 205, 'Motion y + gravity: ', { fontSize: '32px', fill: '#ffff' });
        motionGz = game.add.text(16, 237, 'Motion z + gravity: ', { fontSize: '32px', fill: '#ffff' });

        maxX = game.add.text(24, 300, 'Max x: ', { fontSize: '40px', fill: '#ffff' });
        maxY = game.add.text(24, 350, 'Max y: ', { fontSize: '40px', fill: '#ffff' });
        maxZ = game.add.text(24, 400, 'Max Z: ', { fontSize: '40px', fill: '#ffff' });
        minX = game.add.text(24, 500, 'Min x: ', { fontSize: '40px', fill: '#ffff' });
        minY = game.add.text(24, 550, 'Min y: ', { fontSize: '40px', fill: '#ffff' });
        minZ = game.add.text(24, 600, 'Min Z: ', { fontSize: '40px', fill: '#ffff' });

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

    if (data.dm.x > MX)
    {
        MX = data.dm.x;
    }
    else if (data.dm.x < mx)
    {
        mx = data.dm.x;
    }
    if (data.dm.y > MY)
    {
        MY = data.dm.y;
    }
    else if (data.dm.y < my)
    {
        my = data.dm.y;
    }
    if (data.dm.z > MZ)
    {
        MZ = data.dm.z;
    }
    else if (data.dm.z < mz)
    {
        mz = data.dm.z;
    }

    maxX.text = 'Max x: ' + MX;
    maxY.text = 'Max y: ' + MY;
    maxZ.text = 'Max z: ' + MZ;

    minX.text = 'Min x: ' + mx;
    minY.text = 'Min y: ' + my;
    minZ.text = 'Min z: ' + mz;
}