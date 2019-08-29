var circle = 1;
var rot;
var col;
var freq = 0.000001; 
var r;
let logo, desktopTagline, tabletTagline, mobileTagline;

function setup() {
  createCanvas(windowWidth, windowHeight);
  logo = loadImage('assets/Logo.png');
  desktopTagline = loadImage('assets/Desktop_tagline.png');
  tabletTagline = loadImage('assets/Tablet_tagline.png');
  mobileTagline = loadImage('assets/Mobile_tagline.png');
}

function draw() {
  background(0);
  image(logo, 50, 30, 219, 45.3);
  if(width > 1176) {
    image(desktopTagline, 50, 500, 1120, 332);
  }
  else if(width <= 1176 && width > 670){
    image(tabletTagline, 50, 500, 608, 306);
  }
  else {
    image(mobileTagline, 50, 390, 260, 135);
  }

  translate(width/2, height/2);
    rotate(radians(rot));
    if (freq = 0.000001){
      freq = freq + 0.0000001}
      
      if (freq = 0.000005){
        freq = freq - 0.0000001}
  
    ellipseMode(RADIUS);
    for (var i=0; i<500; i ++) {
      circle= 300 + 100*sin(millis()*freq*i);
      col=map(circle,250,250,255,60);
      r=map(circle,150,250,0.1,1);
      fill(255,255,255);
      noStroke();
      ellipse(circle*cos(i), circle*sin(i),r,r);    
      rot=rot+0.00005;
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}