(() => {
    const cnv = document.querySelector('canvas');
    const ctx = cnv.getContext('2d');
    
    function init(){
        cnv.width = innerWidth;
        cnv.height = innerHeight;
    }
    init();
    
    const numberOfRings         = 3;
    const ringRadiusOffset      = 7;
    const ringRadius            = 200;
    const colors                = [`#771122`, `#bb1122`, `#ff1122`]
    const waveOffset            =  15;
    let startAngle = 0;
    
    function updateRings(){
        for (let i = 0; i < numberOfRings; i++){
            let radius = i * ringRadiusOffset + ringRadius;
            let offsetAngle = i * waveOffset * Math.PI / 180;
            drawRing(radius, colors[i], offsetAngle);
        }
        
        startAngle >= 360? startAngle = 0 : startAngle++;
    }
    
    let centerX = cnv.width / 2; 
    let centerY = cnv.height / 2;
    
    const maxWavesAmplitude = 17;
    const numberOfWaves = 7;
    
    
    function drawRing(radius, color, offsetAngle){
        ctx.strokeStyle = color;
        ctx.lineWidth =  9;
        ctx.beginPath();
        ctx.moveTo(centerX + 200, centerY);
        
        for (let j = -180; j < 180; j++){
            let currentAngle = (j + startAngle) * Math.PI / 180;
            let displacement = 0;
            let now = Math.abs(j);
            
            if (now > 70){
                displacement = (now - 70) / 70;
            }
            
            if (displacement >= 1){
                displacement = 1;
            }
            
            let waveAmplitude = radius + displacement * Math.sin((currentAngle  + offsetAngle) * numberOfWaves) * maxWavesAmplitude;
            let x = centerX + Math.cos(currentAngle) * (waveAmplitude);
            let y = centerY + Math.sin(currentAngle) * (waveAmplitude);
            
            j > -180? ctx.lineTo(x,y) : ctx.moveTo(x,y);
                
        }
        
        ctx.closePath();
        ctx.stroke();
    }
    
    function loop(){
        cnv.width |= 0;
        updateRings();
        requestAnimationFrame(loop);
    }
    
    loop();
    
    window.addEventListener('resize', init);
})();


window.onload = function(e){
    
 
    
}

























