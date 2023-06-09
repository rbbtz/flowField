# flowField

Copy the .js file and paste into the editor playground at https://editor.p5js.org or open the .html file for the experience in a web browser.

In this p5.js code sets up a flow field with dynamic strokeWeight, pixel colors, and transparent curves for a soft, subtle appearance.
The code creates a grid of vectors and uses Perlin noise to determine their angles.
It then draws curves that follow these vectors with dynamic strokeWeight, color, and transparency based on the angle of the vector.

Here's a breakdown:

Global variables are declared:

inc: Increment value for noise.

scl: Scale factor to control the size of the flow field grid.

cols, rows: Number of columns and rows in the grid.

zoff: z-offset for 3D Perlin noise.

particles: Array to store the particle objects.

flowfield: Array to store the flow field vectors.

The setup function initializes the canvas, color mode, and background.
It calculates the number of columns and rows based on the canvas size and scale, initializes the flow field array, and creates 1000 Particle objects.

The draw function updates the flow field vectors based on Perlin noise with changing z-offset.
It then iterates through the particles array and: Sets the color and stroke weight of the particle based on its velocity.

Updates the particle's position based on the flow field vector it's following.

Updates the particle's position, velocity, and acceleration.

The Particle class defines the properties and methods for a single particle:

pos: Position vector.
vel: Velocity vector.
acc: Acceleration vector.
maxspeed: Maximum speed of the particle.
update(): Updates the particle's velocity, acceleration, and position.
applyForce(force): Applies a force to the particle's acceleration.
display(col, sw): Renders the particle on the canvas with the specified color and stroke weight.
follow(vectors): Updates the particle's acceleration based on the flow field vector it's following.
edges(): Wraps the particle's position to the opposite edge of the canvas when it goes out of bounds.

When run, the code creates a visually appealing, dynamic flow field-like pattern on the canvas,
with particles following the field and leaving trails as they move.

// Global variables
let inc = 0.1;
let scl = 20;
let cols, rows;
let zoff = 0;
let particles = [];
let flowfield;


Broken down into greater detail: 

The program generates a flow field and uses it to control the movement of particles on a 2D canvas.

At the beginning of the code, some global variables are initialized, including the increment value for the noise function (inc),
the scale of the flow field (scl), the number of columns and rows in the flow field (cols and rows), a "z offset" for the noise function (zoff),
an array of particles (particles), and an empty flow field (flowfield).

In the setup() function, the canvas is created, the color mode is set to HSB (hue, saturation, brightness), and the background color is set to white.
The number of columns and rows in the flow field is calculated based on the width and height of the canvas,
and the flowfield array is initialized with a length of cols * rows. Finally, 1000 particles are created and added to the particles array.

In the draw() function, a nested loop is used to generate the flow field. For each cell in the grid,
a noise value is generated using noise() with the current xoff, yoff, and zoff values. The noise value is then mapped to an angle,
and a 2D vector (v) is created from that angle with a magnitude of 1. The vector is then added to the flowfield array at the corresponding index.

The xoff value is incremented by inc for each column, and the yoff value is incremented by inc for each row.
The zoff value is also incremented by a small amount at the end of each frame, causing the noise values to gradually change over time.

After the flow field is generated, the draw() function loops through each particle in the particles array. For each particle,
the heading of its velocity vector is mapped to a color value (col), and the magnitude of its velocity is mapped to a stroke weight value (sw).
The particle is then displayed as a point with the corresponding color and stroke weight.

The follow() method of each particle is called, which calculates the index of the corresponding vector in the flowfield array and
applies the vector as a force to the particle. The update() method of the particle is then called, which updates its position, velocity,
and acceleration based on the applied force and other physical properties.
Finally, the edges() method is called to ensure that the particle stays within the bounds of the canvas.

The program generates an animated display of particles moving according to a flow field that is generated using Perlin noise.
The behavior of the particles is influenced by the noise values, and the resulting animation can be mesmerizing.

Global variables are declared:

inc: Increment value for noise.

scl: Scale factor to control the size of the flow field grid.

cols, rows: Number of columns and rows in the grid.

zoff: z-offset for 3D Perlin noise.

particles: Array to store the particle objects.

flowfield: Array to store the flow field vectors.

The setup function initializes the canvas, color mode, and background. It calculates the number of columns and rows based on the canvas size and scale, initializes the flow field array, and creates 1000 Particle objects.

The draw function updates the flow field vectors based on Perlin noise with changing z-offset. It then iterates through the particles array and:
Sets the color and stroke weight of the particle based on its velocity.

Updates the particle's position based on the flow field vector it's following.

Updates the particle's position, velocity, and acceleration.

The Particle class defines the properties and methods for a single particle:

pos: Position vector.
vel: Velocity vector.
acc: Acceleration vector.
maxspeed: Maximum speed of the particle.
update(): Updates the particle's velocity, acceleration, and position.
applyForce(force): Applies a force to the particle's acceleration.
display(col, sw): Renders the particle on the canvas with the specified color and stroke weight.
follow(vectors): Updates the particle's acceleration based on the flow field vector it's following.
edges(): Wraps the particle's position to the opposite edge of the canvas when it goes out of bounds.

