arkside_song = "";
hp_song = "";
rightWrist_x=0;
rightWrist_y=0;
leftWrist_x=0;
leftWrist_y=0;
function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video=createCaputure(VIDEO);
    video.hide();
    poseNet = m15.poseNet(video,modelLoaded)
    posenet.on('pose',gotposes);
}

function preload(){
    darkside_song = loadSound("Neoni_Darkside.mp3");
    hp_song = loadSound("Harry_Potter.mp3");
}

function draw(){
    image(video,0,0,600,530)

    fill ("#00ff00");
    stroke("#ff0000");

    darkside_song = darkside_song.isPlaying();
    console.log(darkside_song);

    hp_song=hp_song.isPlaying();
    console.log(hp_song);

   if (scoreRightWrist > 0.2)
   {
    circle(rightWristX,rightWristY,20);
    hp_song.stop();

    if(darkside_song_status == false)
    {
        darkside_song.play();
        document.getElementById("song").innerHTML = "Playing - Darkside by Neoni"
    }

   }
   if(scoreLeftWrist > 0.2)
   {
    circle(leftWristX, leftWristY, 20);
    darkside_song.stop

    if(hp_song_status == false)
    {
        hp_song.play();
        document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"
    }

   } 
}

function modelLoaded(){
    console.log("poseNet is Initialized");
}

function gotPoses (results){
    if(reulsts.length >0){
        console.log (results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log(scorerightWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y)("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = result[0].pose.rightWrist.y;
        console.log("rightWrist_x ="+rightWrist_x+" rightWrist_y ="+rightWrist_y);
    }
}