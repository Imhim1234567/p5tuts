var n = 0;
var c = 2;
function setup() {
  createCanvas(2000, 1000);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw() {
  var  a = n * 137.5
  var r = c * sqrt(n);

  var x = r * cos(a) + width/3;
  var y = r * sin(a) + height/3;
  fill(255 ,134, r );
  noStroke();

  ellipse(x,y,4,4)


  n+=5
  }






