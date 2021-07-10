function setup(){
    canvas=createCanvas(250,250);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2HQePsI0q/model.json",model_loaded);
}

function model_loaded(){
    console.log("model is loaded");
}

function draw(){
    image(video,0,0,250,250);
    classifier.classify(video,got_result);

}

function got_result(error,result){
if(error){
    console.error(error);
}
else{
    console.log(result);
    document.getElementById("ro").innerHTML=result[0].label;
    document.getElementById("ra").innerHTML=result[0].confidence.toFixed(2);
}
}