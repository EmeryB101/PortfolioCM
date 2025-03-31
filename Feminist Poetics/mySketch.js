let feministText = "FEMINISM"; // Text to display
let shadesOfPink = [
  [255, 192, 203], // Light Pink
  [255, 105, 180], // Hot Pink
  [255, 182, 193], // Salmon Pink
  [231, 84, 128],  // Deep Pink
  [253, 128, 157]  // Coral Pink
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255, 20); // Fading effect

  let radius = 150;
  let centerX = width / 2;
  let centerY = height / 2;

  for (let i = 0; i < feministText.length; i++) {
    let angle = map(i, 0, feministText.length, 0, TWO_PI);
    let x = centerX + radius * cos(angle);
    let y = centerY + radius * sin(angle);

    let pink = shadesOfPink[i % shadesOfPink.length];
    fill(pink[0], pink[1], pink[2]); // Set pink shade

    textSize(32);
    text(feministText[i], x, y);
  }

  // Feminist circle symbol
  noFill();
  stroke(231, 84, 128); // Deep pink for symbol
  strokeWeight(4);
  ellipse(centerX, centerY, radius * 2); // Outer circle

  // Feminist cross
  line(centerX, centerY + radius, centerX, centerY + radius + 50);
  line(centerX - 20, centerY + radius + 25, centerX + 20, centerY + radius + 25);
}