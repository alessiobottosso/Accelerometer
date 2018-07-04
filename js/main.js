var Main = function(game)
{   
    var availableText;

    var motionX;
    var motionY;
    var motionZ;

    var motionGx;
    var motionGy;
    var motionGz;

    var MX, MY, MZ, MXg, MYg, MZg;
    var mx, my, mz, mxg, myg, mzg;
    var maxX, minX, maxY, minY, maxZ, minZ;
    var maxXg, minXg, maxYg, minYg, maxZg, minZg;
};

Main.prototype = 
{
    create: function() 
    {
        /*
        var gn;

        gn = new GyroNorm();
        */

        MX  = 0;
        MY  = 0;
        MZ  = 0;
        mx  = 0;
        my  = 0;
        mz  = 0;
        MXg = 0;
        MYg = 0;
        MZg = 0;
        mxg = 0;
        myg = 0;
        mzg = 0;

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

        maxXg = game.add.text(24, 700,  'Max xg: ', { fontSize: '40px', fill: '#ffff' });
        maxYg = game.add.text(24, 750,  'Max yg: ', { fontSize: '40px', fill: '#ffff' });
        maxZg = game.add.text(24, 800,  'Max zg: ', { fontSize: '40px', fill: '#ffff' });
        minXg = game.add.text(24, 900,  'Min xg: ', { fontSize: '40px', fill: '#ffff' });
        minYg = game.add.text(24, 950,  'Min yg: ', { fontSize: '40px', fill: '#ffff' });
        minZg = game.add.text(24, 1000, 'Min zg: ', { fontSize: '40px', fill: '#ffff' });

        /*
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
        */

        // Standard deviceMotion event
        if (!window.DeviceMotionEvent) 
        {
            availableText.text = 'Accelerometer IS NOT available :(';
        } 
        else 
        {
            availableText.text = 'Accelerometer IS available :)';
 
            window.addEventListener('devicemotion', function(event) {

                motionX.text = 'Motion x: ' + event.acceleration.x;
                motionY.text = 'Motion y: ' + event.acceleration.y;
                motionZ.text = 'Motion z: ' + event.acceleration.z;
                motionGx.text = 'Motion x + gravity: ' + event.accelerationIncludingGravity.x;
                motionGy.text = 'Motion y + gravity: ' + event.accelerationIncludingGravity.y;
                motionGz.text = 'Motion z + gravity: ' + event.accelerationIncludingGravity.z;

                if (event.acceleration.x > MX)
                {
                    MX = event.acceleration.x;
                }
                else if (event.acceleration.x < mx)
                {
                    mx = event.acceleration.x;
                }
                if (event.acceleration.y > MY)
                {
                    MY = event.acceleration.y;
                }
                else if (event.acceleration.y < my)
                {
                    my = event.acceleration.y;
                }
                if (event.acceleration.z > MZ)
                {
                    MZ = event.acceleration.z;
                }
                else if (event.acceleration.z < mz)
                {
                    mz = event.acceleration.z;
                }


                if (event.accelerationIncludingGravity.x > MXg)
                {
                    MXg = event.accelerationIncludingGravity.x;
                }
                else if (event.accelerationIncludingGravity.x < mxg)
                {
                    mxg = event.accelerationIncludingGravity.x;
                }
                if (event.accelerationIncludingGravity.y > MYg)
                {
                    MYg = event.accelerationIncludingGravity.y;
                }
                else if (event.accelerationIncludingGravity.y < myg)
                {
                    myg = event.accelerationIncludingGravity.y;
                }
                if (event.accelerationIncludingGravity.z > MZg)
                {
                    MZg = event.accelerationIncludingGravity.z;
                }
                else if (event.accelerationIncludingGravity.z < mzg)
                {
                    mzg = event.accelerationIncludingGravity.z;
                }

                maxX.text = 'Max x: ' + MX;
                maxY.text = 'Max y: ' + MY;
                maxZ.text = 'Max z: ' + MZ;

                minX.text = 'Min x: ' + mx;
                minY.text = 'Min y: ' + my;
                minZ.text = 'Min z: ' + mz;

                maxXg.text = 'Max xg: ' + MXg;
                maxYg.text = 'Max yg: ' + MYg;
                maxZg.text = 'Max zg: ' + MZg;

                minXg.text = 'Min xg: ' + mxg;
                minYg.text = 'Min yg: ' + myg;
                minZg.text = 'Min zg: ' + mzg;

             
            });
         }
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