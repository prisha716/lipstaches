
noseX="";
noseY="";
function preload() {
    lipstick=loadImage('https://i.postimg.cc/4yBThWNF/l1.png');
}
 function setup() {
     canvas=createCanvas(300,300);
     canvas.center();
     video=createCapture(VIDEO);
     video.size(300,300);
     video.hide();
     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
 }
 function modelLoaded() {
     console.log('PoseNet is started');
 }
 function gotPoses(results) {
     
    if(results.length > 0){

    
    console.log(results);
    noseX=results[0].pose.nose.x-10;
    noseY=results[0].pose.nose.y-10 ;
     console.log("nose x=" + results[0].pose.nose.x);
     console.log("nose y=" + results[0].pose.nose.y);}

 }
 function draw() {
image(video,0,0,300,300);
image(lipstick,noseX,noseY,100,60);
 }
function take_snapshot() {
    save('myfilter.png');
}