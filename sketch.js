var xoff1 = 0;
var xoff2 = 10000;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 200, 100);

  var x = map(noise(xoff1), 0,1,0, width);
  var y = map(noise(xoff2), 0,1,0, height);

  xoff1 += 0.02;
  xoff2 += 0.02;



  ellipse(x,y,24,24)

}
