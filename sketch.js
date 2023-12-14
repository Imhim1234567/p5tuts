var n = 0;
var c = 8;
var reverse = false;

function setup() {
  createCanvas(2000, 1000);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw() {
  var a = n * 137.5;
  var r = c * sqrt(n);

  var x = r * cos(a) + width / 3;
  var y = r * sin(a) + height / 3;
  fill(n % 256, 255, 255);
  noStroke();

  ellipse(x, y, 4, 4);

  if (reverse) {
    n--;
  } else {
    n++;
  }

  if (n >= 256 || n <= 0) {
    reverse = !reverse; // Change the direction when n reaches 255 or 0
  }
}






