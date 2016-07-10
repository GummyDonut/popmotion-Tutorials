window.onload = function() {    
    const ball = document.getElementById('ball');       
    
    const moveX = motion.tween({
        values : {
            x : 200
        }
    }); 
    
    const changeColor = motion.tween({
        duration : 2000,
        ease : motion.easing.easeInOut, 
        flip : Infinity,
        values: {
            backgroundColor: '#2f47f7'
        }
    })     

    const moveBallX = moveX.on(ball);
    changeColor.on(ball).start();
    moveBallX.start();
};
