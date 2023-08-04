let state = {    
}

function points(){
    return {
        pointX1: genNumbers(100)+50,
        pointY1: genNumbers(100)+100,
        pointX2: genNumbers(3),
        pointY2: genNumbers(4),
        rotation: genNumbers(360),
        translateX: genNumbers(250)+150,
        translateY:genNumbers(50)+150,
        labelABC: ["A","B","C"][genNumbers(3)],
        labelDEF: ["D","E","F"][genNumbers(3)],
        labelGHI: ["G","H","I"][genNumbers(3)]
    }
}

function draw(){
    state.currentProblem = points();
    const p = state.currentProblem

    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");

    ctx.translate(p.translateX, p.translateY);
    // ctx.rotate(p.rotation * Math.PI / 180);

    // label
    ctx.font = '30px serif'
    ctx.fillStyle = "red";
    ctx.fillText(p.labelABC, 0, 45)
    ctx.fillText(p.labelDEF, 0, p.pointY1+30)
    ctx.fillText(p.labelGHI, p.pointX1+7, 50)
    
    // triangle
    ctx.fillStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(0, p.pointY1);
    ctx.lineTo(p.pointX1, 50);
    ctx.closePath();
    ctx.stroke();
}

function genNumbers(max) {
    return Math.floor(Math.random() * max);
  }

draw()