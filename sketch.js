var anotherRectangle;

function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}


function draw() {

  for (var i = 0; i < 10; i++) {
    anotherRectangle = new Rectangle(windowWidth / 6 - 50 + random() * windowWidth / 3 * 2, windowHeight / 6 - 70 + random() * windowHeight / 3 * 2, 50, 70);
    anotherRectangle.display();
  }
}

function Rectangle(_x, _y, _w, _h) {

  this.width = _w;
  this.height = _h;
  this.x = _x;
  this.y = _y;

  this.display = function() {
    strokeWeight(0.5);
    noFill();
    rect(this.x, this.y, this.width, this.height);
  }
  this.move = function() {
    this.x += random() * 2;
    this.y += random();

  }

}
