var n = 0;
var c = 8;
var switch = 1;



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
  if (switch == 1) {
    n += 1;
  }
  else {
    n -= 1;
  }
  if (n >= 255) {
    switch = 2
  }
  if (n <= 0) {
   switch = 1
  }

  
  
  
}



