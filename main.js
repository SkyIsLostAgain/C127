song = "";

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

function gotPoses(result){
    if(results.length > 0){
        console.log(results);
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