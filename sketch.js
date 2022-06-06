let rndNum = 0;
let rollBtn;
let rollCounter = 0;
let isRolling = false;
let inp
function setup() {
  createCanvas(400, 400);
  rndNum = Math.ceil(random(6));
  rollBtn = createButton("Roll");
  rollBtn.position(10,10)
  rollBtn.mousePressed(newRoll);
  inp = createInput("Place your bet");
  inp.position(10,30)
}
function draw() {
  background(220);
  textSize(50);
  rect(85,55,60,60)
  text(rndNum, 100, 100);
  if (isRolling) {
    rndNum = Math.ceil(random(6));
    rollCounter += 1;
    if (rollCounter > 30) {
      //stop the rolling
      rndNum = Math.ceil(random(6));
      isRolling = false;
      rollCounter = 0;
    }
  }
}
function newRoll() {
  isRolling = true; 
}
