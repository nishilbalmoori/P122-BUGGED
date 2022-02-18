var speechRec = window.webkitSpeechRecognition;
var recog = new speechRec();
var num = 0;
var content = "";
var img;

function preload(){
    img = loadImage("SnapdragonNEW.png");
}

function setup(){
    createCanvas(800,600);
}

function draw(){
    background(255);
    image(img,80,300,50,50);
    for(let i = 0;i<num;i++){
	    image(img,i*80,300,50,50);
    }
}
function run(){
    document.getElementById("status").innerHTML = "System is listening to you....";

    recog.start();
}

recog.onresult = function(evt){
    console.log(evt);

    content = evt.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Recognized as " + content;

    num = parseInt(content);
    recog.stop();
}

function keyPressed(){
    if(key){
        fill(255,0,0);
        rect(400,300,800,600);
    }
}