/*
I had made all the variations of the assignment in this file.
In the future I'll remember to keep the variations in separate
files. I'm very sorry about that.
*/

var x;
var y;
var radius;

function setup() {
  createCanvas(600, 400);
  x = random(width);
  y = random(height);
  //Change size
  radius = 40;
  frameRate(10);
}

function draw() {
  background(210, 215, 217);
  noStroke();

  //Bubble changes color when mouse hovers over
  if (dist(mouseX, mouseY, x, y) < radius) {
      //Hover color
      fill(248, 131, 121);
  }
  //Bubble teleports to current location of mouse
  else if (dist(mouseX, mouseY, x, y) > radius) {
      if (mouseIsPressed) {
        x = mouseX;
        y = mouseY;
      }
    fill(255, 199, 44);
  }
  
  else {
    //Static color
    fill(255, 199, 44);
  }

  ellipse(x, y, radius * 2);
  //Make bubble's motion more vigorous
  x += random(-5, 5);
  y += random(-5, 5);
  radius += random(-2, 2);
}
