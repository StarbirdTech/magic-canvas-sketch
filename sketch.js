let point = { x: 200, y: 200 };
let myNewShape;
let slide = 0;
let objects = [];

function setup() {
  createCanvas(400, 400);
  resetStyle();
  myNewShape = new myShape();
  //camera(100, 100, 100, 200, 200, 200, 0, 1, 0);
}

point.x;
point.y;

function draw() {drawSlide(slide)}

// when mouse clicked, if scene is 0, push myShape vars to objects array
function mousePressed() {
  if (slide == 0) {
    objects.push({x: myNewShape.point.x, y: myNewShape.point.y});
  }
  console.log(objects);
}

// when right arrow is pressed, go to next slide
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    slide++;
    if (slide > 2) {
      slide = 0;
    }
  }
  if (keyCode === LEFT_ARROW) {
    slide--;
    if (slide < 0) {
      slide = 2;
    }
  }
}

function movePoint() {
  myNewShape.point.x += random(-1, 1);
  myNewShape.point.y += random(-1, 1);
}

function setPoint(x, y) {
  point.x = x;
  point.y = y;
}

function resetStyle() {
  background(220);
  stroke(0);
  strokeWeight(1);
}

function drawSlide(slideNum) {
  switch (slideNum) {
    case 0:
      resetStyle();
      myNewShape.makeTop();
      myNewShape.makeBottom();
      myNewShape.makeEdge();
      myNewShape.makeConection();
      myNewShape.updatePoint(mouseX, mouseY);
      break;
    case 1:
      myNewShape.setData(objects[0].x , objects[0].y);
      console.log(objects[0]);
      resetStyle();
      myNewShape.makeTop();
      myNewShape.makeBottom();
      myNewShape.makeEdge();
      myNewShape.makeConection();
      break;
    case 2:
      resetStyle();
      text("slide 2", width / 2, height / 2);
      break;
  }
}

class myShape {
  constructor() {
    this.point = { x: 200, y: 200 };
    this.boundary = {
      x1: 100,
      y1: 100,
      x2: 300,
      y2: 300,
      center: { x: 200, y: 200 },
    };
  }
  setData(x, y) {
    this.point.x = x;
    this.point.y = y;
  }
  updatePoint(x, y) {
    this.point.x = x;
    this.point.y = y;
  }
  makeTop() {
    line(
      myNewShape.boundary.x1,
      myNewShape.boundary.y1,
      myNewShape.point.x,
      myNewShape.point.y
    );
    line(
      myNewShape.boundary.x2,
      myNewShape.boundary.x1,
      myNewShape.point.x,
      myNewShape.point.y
    );
    line(
      myNewShape.boundary.y1,
      myNewShape.boundary.y2,
      myNewShape.point.x,
      myNewShape.point.y
    );
    line(
      myNewShape.boundary.x2,
      myNewShape.boundary.y2,
      myNewShape.point.x,
      myNewShape.point.y
    );
  }
  makeBottom() {
    line(
      myNewShape.boundary.x1,
      myNewShape.boundary.y1,
      myNewShape.boundary.center.x,
      myNewShape.boundary.center.y
    );
    line(
      myNewShape.boundary.x2,
      myNewShape.boundary.x1,
      myNewShape.boundary.center.x,
      myNewShape.boundary.center.y
    );
    line(
      myNewShape.boundary.y1,
      myNewShape.boundary.y2,
      myNewShape.boundary.center.x,
      myNewShape.boundary.center.y
    );
    line(
      myNewShape.boundary.x2,
      myNewShape.boundary.y2,
      myNewShape.boundary.center.x,
      myNewShape.boundary.center.y
    );
  }
  makeEdge() {
    line(
      myNewShape.boundary.x1,
      myNewShape.boundary.y1,
      myNewShape.boundary.x2,
      myNewShape.boundary.y1
    );
    line(
      myNewShape.boundary.x2,
      myNewShape.boundary.x1,
      myNewShape.boundary.x2,
      myNewShape.boundary.y2
    );
    line(
      myNewShape.boundary.y2,
      myNewShape.boundary.y2,
      myNewShape.boundary.x1,
      myNewShape.boundary.y2
    );
    line(
      myNewShape.boundary.x1,
      myNewShape.boundary.y2,
      myNewShape.boundary.x1,
      myNewShape.boundary.y1
    );
  }
  makeConection() {
    line(
      myNewShape.boundary.center.x,
      myNewShape.boundary.center.y,
      myNewShape.point.x,
      myNewShape.point.y
    );
  }
}
