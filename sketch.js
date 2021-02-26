
 let p;

let z
let sel
let canvas
var input;
var img;
var button;
var classifier;
var result;
function preload(){
    classifier = ml5.imageClassifier('mobileNet',loadmodel);
    input = createFileInput(handleFile);
    input.size(120,70)
    
}
function setup() {
p=select("#men")

//input.position(0, 0);
input.parent(p)
button=createButton("predict image")
button.size(200,60)
//button.position(430,490)
button.style("background-color","#3440eb")
button.style("color","#fff")
button.style("font-size","30px")
button.mousePressed(makeprediction)
button.mouseOver(highlight)
button.mouseOut(unhighlight)

var main=select(".item3")
canvas=createCanvas(450, 335);
canvas.style("background-color","blue")
canvas.parent(main)
button.parent(main)
// classifier.classify(img, gotResult);
// image(img, 0, 0);    2
result=select(".item4")
}
function makeprediction(){
    classifier.classify(img, gotResult);

}
function loadmodel(){
    var cha=select("#mod")
    cha.html("Loading complete!!!")
    var k=createElement("h2","Explainer!!")
    k.position(810,160)
    k.style("color","red")
    var c=createP("This is a machine learning App that does image classification based on pre-trained models such as mobilenet,darknet and doodlenet. What you need to do is to select a model of your choice and image you wish to classify from the sidebar then click the predict button.")
     c.position(810,194)
     c.size(340,300)
     c.style("background-color","rgba(0, 140, 155, 0.6)")
}
//A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
  var l=createDiv('The model predicted the above image as ' + results[0].label + " with " + nf((results[0].confidence)*100, 0, 2)+"% confidence");
  l.style("background-color","red")
  l.parent(result)
  
//   var m=createDiv('Confidence: ' + nf((results[0].confidence)*100, 0, 2));
//   m.parent(result)
}
function handleFile(file) {
    print(file);
    if (file.type === 'image') {
      img = createImg(file.data, 'imageload',confo);
      img.hide();
    } else {
      img = null;
    }
  }
  function draw() {
    background(125);
    if (img) {
      image(img, 0, 0, width, height);
    }
  }

  function highlight(){
      button.style("background-color","black")
  }
  function unhighlight(){
    button.style("background-color","#3440eb")
  }

  function confo(){
    var ck=select("#modi")
    ck.html("image uploaded!!")
  }
