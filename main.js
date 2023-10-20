right_eye_x=0;
right_eye_y=0;
function preload(){
img=loadImage("https://lh3.bunny.novaskin.me/7oZw1smlaPV7eUWaTQpRfjyTDl5tQL4-lP_7fKKNexY8VXbbB2A12IGTiXRPYImyY0Chm7z9cDBHY56d_W_J");
}

function setup(){
canvas=createCanvas(550,400);
canvas.center();
video=createCapture(VIDEO);
video.size(550,400);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose", gotposes);
}

function draw(){
image(video,0,0,550,400);
image(img,right_eye_x,right_eye_y,200,199);
}

function modelloaded(){
    console.log("Model Loaded!");
}

function gotposes(results,error){
    if(error){
        console.log(error);
    }
    else{
        console.log(results)
        right_eye_x=results[0].pose.rightEye.x-60;
        right_eye_y=results[0].pose.rightEye.y-75;

    }
}