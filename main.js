function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(300, 450);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}



// rgb - red green blue

var normalVar = 0;
var vampVar = 0;
var royalVar = 0;
var noVar = 0;

function normal() {
    normalVar = 1;
    vampVar = 0;
    royalVar = 0;
    noVar = 0;
}


function vamp() {
    normalVar = 0;
    vampVar = 1;
    royalVar = 0;
    noVar = 0;

}

function royal() {
    normalVar = 0;
    vampVar = 0;
    royalVar = 1;
    noVar = 0;

}

function noFrame() {
    normalVar = 0;
    vampVar = 0;
    royalVar = 0;
    noVar = 1;
}



function draw() {


    image(video, 0, 0, 640, 480);
    tint(tintColor);



    //vamp

    if (vampVar == 1) {

        stroke(0, 0, 0);
        fill(0, 0, 0);
        rect(45, 30, 570, 50);
    
        stroke(0, 0, 0);
        fill(0, 0, 0);
        rect(20, 60, 50, 380);
    
        stroke(0, 0, 0);
        fill(250, 0, 0);
        circle(45, 45, 70);
    
        stroke(0, 0, 0);
        fill(0, 0, 0);
        rect(30, 420, 590, 50);
    
        stroke(0, 0, 0);
        fill(250, 0, 0);
        circle(45, 445, 70);
    
        stroke(0, 0, 0);
        fill(0, 0, 0);
        rect(570, 60, 50, 380);
    
        stroke(0, 0, 0);
        fill(250 , 0, 0);
        circle(595, 445, 70);
    
    
    
        stroke(0, 0, 0);
        fill(250, 0, 0);
        circle(595, 45, 70);
    
    }












     // royal


    if (royalVar == 1) {

        stroke(0, 0, 0);
        fill(207,181,59);
        rect(45, 30, 570, 50);
    
        stroke(0, 0, 0);
        fill(207,181,59);
        rect(20, 60, 50, 380);
    
        stroke(0, 0, 0);
        fill(192,192,192);
        circle(45, 45, 70);
    
        stroke(0, 0, 0);
        fill(207,181,59);
        rect(30, 420, 590, 50);
    
        stroke(0, 0, 0);
        fill(192,192,192);
        circle(45, 445, 70);
    
        stroke(0, 0, 0);
        fill(207,181,59);
        rect(570, 60, 50, 380);
    
        stroke(0, 0, 0);
        fill(192,192,192);
        circle(595, 445, 70);
    
    
    
        stroke(0, 0, 0);
        fill(192,192,192);
        circle(595, 45, 70);
    
    
    }






















    // normal

    if (normalVar == 1) {

        stroke(0, 0, 0);
        fill(197, 116, 232);
        rect(45, 30, 570, 50);
    
        stroke(0, 0, 0);
        fill(197, 116, 232);
        rect(20, 60, 50, 380);
    
        stroke(0, 0, 0);
        fill(25, 44, 166);
        circle(45, 45, 70);
    
        stroke(0, 0, 0);
        fill(197, 116, 232);
        rect(30, 420, 590, 50);
    
        stroke(0, 0, 0);
        fill(25, 44, 166);
        circle(45, 445, 70);
    
        stroke(0, 0, 0);
        fill(197, 116, 232);
        rect(570, 60, 50, 380);
    
        stroke(0, 0, 0);
        fill(25, 44, 166);
        circle(595, 445, 70);
    
    
    
        stroke(0, 0, 0);
        fill(25, 44, 166);
        circle(595, 45, 70);
    
    
    }

























    // no frame

    if (royalVar == 1) {


    
    
    }





















}

function takeSnapshot() {
    save('photoEdit.png');
}

function filterTint() {
    tintColor = document.getElementById("tintColor").value;
}