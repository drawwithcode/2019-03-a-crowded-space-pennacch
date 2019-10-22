var allTheCircles = [];
var circles;
var numberOfCircles = 200;
var speedA = 5;
var speedX = 0;
var speedY = 0;




function preload() {};

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(170);
  for (var i = 0; i < numberOfCircles; i++) {
    x = random();
    x = map(x, 0, 1, 0, width);
    y = random();
    y = map(y, 0, 1, 0, height);
    w = random();
    w = map(w, 0, 1, 10, 150);

    var circles = new Circle(x, y, w);
    allTheCircles.push(circles);
  }

}

function draw() {
  background(170);



  // //circle speed equal mouse speed
  var mouseSpeed = sqrt(sq(mouseX-pmouseX)+sq(mouseY-pmouseY));
  if (mouseSpeed > 0) {speedA = mouseSpeed} ;



  for (var i = 0; i < numberOfCircles; i++) {
    //-----------
    speedX = random()
    speedX = map(speedX, 0, 1, -speedA, speedA);
    speedY = random()
    speedY = map(speedY, 0, 1, -speedA, speedA);




    //-----------
    var b = allTheCircles[i];
    //-----to prevent circles from exit the canvas-------
    if (b.x > width || b.x<0 || b.y > height || b.y < 0) {
      x = random();
      x = map(x, 0, 1, 0, width);
      b.x = x;
      y = random();
      y = map(y, 0, 1, 0, height);
      b.y = y;
    }
    b.move();
    b.display();
  }
}

function Circle(_x, _y, _d) {
  this.x = _x;
  this.y = _y;
  this.width = _d;
  this.color = lerpColor(color("peachpuff"), color("aquamarine"), random());
  this.move = function() {

    this.x += speedX;
    this.y += speedY;
  }
  this.display = function() {
    strokeWeight(4);
    stroke("white");
    fill(this.color);
    circle(this.x, this.y, this.width);
  }

}
