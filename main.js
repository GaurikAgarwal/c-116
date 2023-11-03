noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/nzfwTjfg/clown-nose.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet intialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-20;
        noseY=results[0].pose.nose.y-20;
        console.log("noseX="+results[0].pose.nose.x);
        console.log("noseY="+results[0].pose.nose.y);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,50,50);
}
function take_snapshot(){
    save('myfilterimage.png');
}
