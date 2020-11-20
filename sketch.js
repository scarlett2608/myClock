
//variables
var world,engine;
var hours,minutes,seconds;
var angleS,angleM,angleH;

function setup(){
    createCanvas(600,500);

    

}

function draw(){
    background('black');

    translate(300,250);
    rotate(-90);

    hours = hour()%12;
    minutes = minute();
    seconds = second();

    noFill();
    stroke('red');
    strokeWeight(7);
    angleS = map(seconds,0,60,0,360);
    arc(0,0,360,360,0,angleS)

    push();
    rotate(angleS);
    stroke('red');
    line(0,0,150,0);
    pop();

    noFill();
    stroke('blue');
    strokeWeight(7);
    angleM = map(minutes,0,60,0,360);
    arc(0,0,340,340,0,angleM)

    push();
    rotate(angleM);
    stroke('blue');
    line(0,0,120,0);
    pop();

    noFill();
    stroke('yellow');
    strokeWeight(7);
    angleH = map(hours,0,12,0,360);
    arc(0,0,320,320,0,angleH)

    push();
    rotate(angleH);
    stroke('yellow');
    line(0,0,100,0);
    pop();

    console.log(hours+':'+minutes+":"+seconds);
}