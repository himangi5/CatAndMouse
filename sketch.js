var bgImg;
var catImg, catAnim, cat , mouseImg, mouseAnim, mouse;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    catStandImg = loadImage("images/cat4.png");
    catAnim = loadAnimation("images/cat3.png","images/cat2.png","images/cat3.png","images/cat2.png")
    mouseImg = loadImage("images/mouse1.png")
    mouseAnim = loadAnimation("images/mouse3.png","images/mouse3.png","images/mouse2.png","images/mouse2.png");
    mouseStanding = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(850,650);
    //create tom and jerry sprites here
    cat = createSprite(620,550,10,50);
    cat.addImage(catImg);
    cat.scale = 0.12;
    //cat.debug = true;
    console.log(cat.width);
    //cat.setCollider("rectangle",0,0,1000,1000);
    mouse = createSprite(100,520,10,20);
    mouse.addImage(mouseImg);
    mouse.scale = 0.07;
    //mouse.debug = true;
    console.log(mouse.width);
    //mouse.setCollider("circle",0,0,500)
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (mouse.width/2 + cat.width/2)){
        cat.velocityX = 0;
        cat.addImage("catStopped",catStandImg);
        cat.changeImage("catStopped");
        mouse.addImage("mouseStopped",mouseStanding)
        mouse.changeImage("mouseStopped");
    }
    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catAnim);
        cat.changeAnimation("catRunning");
        mouse.addAnimation("tease",mouseAnim);
        mouse.changeAnimation("tease");
    }
}
