song = "";
leftWristX = 0;
leftWristY = 0;

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized.')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log('leftWristX = ' + leftWristX + " leftWristY = " + leftWristY)
    }
}

function draw(){
    image(video, 0, 0, 300, 300)
}

function play(){
    song.play();
    song.setVolume(0.5);
    song.rate(0.5);
}