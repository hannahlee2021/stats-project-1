// let x, y; // Variables for storing the position of the point
// let speed = 2; // Variable to control the speed of movement

// function setup() {
//   createCanvas(windowWidth, windowHeight); // Set the size of the canvas
//   x = random(width);
//   y = random(height);
// }

// function draw() {
//   // background(255); // Clear the canvas
//   background(255,255,255);

//   // Update the position of the point with a super slow speed
//   x += random(-speed, speed);
//   y += random(-speed, speed);

//   // Draw the point on the canvas
//   fill(0); // Set the point color to black
//   circle(x, y, 10);
//   circle(x, y, 10);
//   circle(x, y, 10);
//   circle(x, y, 10);
//   circle(x, y, 10);
//    // Draw a circle at (x, y) with a radius of 10
// }

let numPoints = 10;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create random points
  for (let i = 0; i < numPoints; i++) {
    let x = random(width);
    let y = random(height);
    let vx = random(-2, 2); // Random velocity in x direction
    let vy = random(-2, 2); // Random velocity in y direction
    points.push({ x, y, vx, vy }); // Add point to the array
  }
}

function draw() {
  
  background(27, 73, 101);

  // Update and display each point
  for (let i = 0; i < numPoints; i++) {
    let point = points[i];
    point.x += point.vx;
    point.y += point.vy;

    // Wrap around the screen edges
    if (point.x < 0) {
      point.x = width;
    }
    if (point.x > width) {
      point.x = 0;
    }
    if (point.y < 0) {
      point.y = height;
    }
    if (point.y > height) {
      point.y = 0;
    }

    // Display the point
    fill(255);
    ellipse(point.x, point.y, 20, 20);
  }
}