function preload(){
}
function setup(){
canvas=createCanvas(439,349);
canvas.center();
video=createCapture(VIDEO);
video.size(439,349);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function gotPoses(results){}
function modelLoaded(){
    console.log("Model Is loaded");
}
function take_snapshot(){
save("Myselfie.jpg");
}
function draw(){
image(video,0,0,439,349);
}