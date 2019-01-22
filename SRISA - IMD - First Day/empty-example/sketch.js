function setup() {

  var d = 70;
  var p1 = d;
  var p2 = p1+d;
  var p3 = p2+d;
  var p4 = p3+d;

  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background(0,0,0);
  // noSmooth();
  stroke(255,0,0);
  fill(255);

  beginShape();
  vertex(30, 20);
  vertex(85, 20);
  vertex(85, 75);
  vertex(25, 60);
  vertex(30, 75);
  endShape(CLOSE);

//  translate(140, 0);

  // Draw gray box
//  stroke(153);
//  line(p3, p3, p2, p3);
//  line(p2, p3, p2, p2);
//  line(p2, p2, p3, p2);
//  line(p3, p2, p3, p3);

  // Draw white points
//  stroke(255);
//  point(p1, p1);
//  point(p1, p3);
//  point(p2, p4);
//  point(p3, p1);
//  point(p4, p2);
//  point(p4, p4);
}
