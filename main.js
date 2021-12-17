cheap="";
onway="";
function setup(){
    canvas = createCanvas(600,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,600,450)
}
function preload(){
    cheap=loadSound('Cheap.mp3');
    onway=loadSound('onway.mp3');
}
