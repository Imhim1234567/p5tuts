//var xoff1 = 0;
//var xoff2 = 10000;
var inc = 0.01;
 var start = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 156, 100);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++){
    var n = map(noise(xoff), 0, 1, 0, height);
    var s = map(sin(xoff), -1, 1, -50, 50);
    var y = s + n;

    //var y = random(height);
    //var  y = sin(xoff)*height;
    vertex(x,y);
    stroke(255);

    xoff += inc;

  }

  start += inc;
  endShape(); 
  //noLoop();

//  var x = map(noise(xoff1), 0,1,0, width);
  //var y = map(noise(xoff2), 0,1,0, height);

  //xoff1 += 0.02;
  //xoff2 += 0.02;



  //ellipse(x,y,24,24)

}
