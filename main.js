;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;function preload(){}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("poses", gotPoses)
}
function modelLoaded(){
    console.log("pose is actiove")
}
function draw(){
    image(video, 0,0,300,300)
}
function take_snap(){
    save("MushstashFaceFilterImage.png")
}
function gotPoses(){
    if(results.length>0){
        console.log(results)
        console.log("nosex="+result[0].pose.nose.x)
        console.log("nosey="+result[0].pose.nose.y)
    }
}