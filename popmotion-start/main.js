window.onload = function() {    
    var ball = document.getElementById('ball');
    const myTween = motion.tween({
        values : {
            x : 200
        }
    });

    const constantVelocity = motion.physics({
        values : {
            x : {
                velocity : 600,
                friction : 0.2
            }
            
        }
    });
    const moveHorizontal = motion.track({
        values: {
            x: {} // equivalent to x: { watch: 'x' }
        }
    });

    var body = document.getElementsByTagName('body')[0];
    const moveBallX = moveHorizontal.on(document.getElementById('ball')); 
    body.addEventListener('click', function(event){
        
        event.stopPropagation();
        event.preventDefault();
        
        // By providing the start with the browser event, Popmotion automatically
        // creates an input handler and begins tracking the input device
        moveBallX.start(event);

    }, false)
    //myTween.on(ball).start();
    //constantVelocity.on(ball).start();
    
};
