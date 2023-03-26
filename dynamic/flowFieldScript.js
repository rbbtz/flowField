// Global variables
let inc = 0.1;
let scl = 20;
let cols, rows;
let zoff = 0;
let particles = [];
let flowfield;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 255);
  background(255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowfield = new Array(cols * rows);

  // Initialize particles
  for (let i = 0; i < 1000; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  let yoff = 0;

  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;

      xoff += inc;
    }
    yoff += inc;
  }
  zoff += 0.01;

  // Draw particles
  for (let i = 0; i < particles.length; i++) {
    let col = map(particles[i].vel.heading(), -PI, PI, 0, 255);
    let sw = map(particles[i].vel.mag(), 0, 5, 0.5, 4);
    particles[i].display(col, sw);
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 2;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  display(col, sw) {
    stroke(col, 50, 255, 25);
    strokeWeight(sw);
    point(this.pos.x, this.pos.y);
  }

  follow(vectors) {
    let x = floor(this.pos.x / scl);
    let y = floor(this.pos.y / scl);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force);
  }

  edges() {
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
