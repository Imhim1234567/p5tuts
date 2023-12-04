//var xoff1 = 0;
//var xoff2 = 10000;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 156, 100);
  stroke(255);
  noFill();
  beginShape();
  var xoff = 0;
  for (var x = 0; x < width; x++){
    //var y = random(height);
    var  y = noise(xoff)*height;
    vertex(x,y);
    stroke(255);

    xoff += 0.02;
  }
  endShape(); 
  noLoop();

//  var x = map(noise(xoff1), 0,1,0, width);
  //var y = map(noise(xoff2), 0,1,0, height);

  //xoff1 += 0.02;
  //xoff2 += 0.02;



  //ellipse(x,y,24,24)

}
