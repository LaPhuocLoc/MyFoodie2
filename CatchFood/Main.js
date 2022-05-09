const Container= document.querySelector('#Container');
const ctx = Container.getContext('2d');
Container.width = 800;
Container.height = 600;
let fps, fpsInterval, startTime, now, then, elapsed;
let JumpKey = false;
let CharGravityPoint =10;
let jumpSpeed = 15;
let frame= 0;
let GamePoint= 0;
const keys = [];
//frameX Y để chuyển đổi tư thế nhân vật
class Object{
    constructor(x,y , width, height,frameX,frameY,speed,moving,step){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.frameX= frameX;
        this.frameY= frameY;
        this.speed= speed;
        this.moving= moving;
        this.step= step;//giúp game mượt hơn 
    }
}
const Char = new Object (350, 390, 64, 96, 0, 0, 10, false,0);
const CharMiko = new Image();
CharMiko.src = "img/miko.png";
const background = new Image();
let randomBG = Math.floor(Math.random()*3+2);
background.src = "img/BG_0"+ randomBG +".png";
//sX sY sW SH Lấy ảnh từ nhân vật   
//dX dY dW dH vẽ độ lớn của nhân vật
function drawMiko (img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

//move
document.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
})
document.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    Char.moving = false;
})

function CharMove(){
    Char.step++;
    function CharMoveRight(){
        if( keys[39]&& Char.x < Container.width-64 ){
            Char.x += Char.speed;
            Char.frameY =2;
            Char.moving = true;   
        }    
    }
    function CharMoveLeft(){
        if( keys[37]&& Char.x >0 ){
            Char.x -= Char.speed;
            Char.frameY =1;
            Char.moving = true;
        }        
    }
    function CharMoveFront(){
        if(keys[40]){
            Char.frameY =0;
            Char.moving = true;
        }        
    }
    function CharMoveBack(){
        if(keys[38]){
            Char.frameY =3;
            Char.moving = true;
        }    
        }
    CharMoveRight();
    CharMoveLeft();
    CharMoveFront();
    CharMoveBack();
}

function CharJump(){
    if(keys[32] ){
        if (JumpKey=== false){
            for ( let i = 0;i< 2; i++){
                Char.y -= jumpSpeed;
                jumpPoint++;
            }
            jumpSpeed-= 1;
        }
        if (jumpPoint ===30){
            JumpKey = true;
        }
    }
    if( jumpPoint ===30){
        CharGravityPoint = 3;
        // jumpSpeed = 5;
        setTimeout(function GravityHold(){
            CharGravityPoint=8;
        },80)}
    if (Char.y === 390){
        JumpKey = false ;
        jumpPoint = 0;
        jumpSpeed=  15;
    }
}
let jumpPoint =0;
// let jump = setInterval (CharJump, 2000);


function Walk(){
    if (Char.frameX <3 && Char.moving ===true&& Char.step ===15) {
        Char.frameX++;
        Char.step = 0 ; 
        }
    else if (Char.step ===15) {
        Char.frameX = 0;
        Char.step = 0 ;
    }
}

function animated(){
    requestAnimationFrame(animated);
    now =Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval);
        //vẽ nhân vật, background
        ctx.clearRect(background, 0 ,0, Container.width,Container.height);
        ctx.drawImage(background, 0 ,0, Container.width, Container.height)
        
        requestAnimationFrame(animated);
        drawMiko(CharMiko,(Char.width/2)*Char.frameX ,(Char.height/2)*Char.frameY ,Char.width/2, Char.height/2, Char.x, Char.y,Char.width, Char.height)
        CharMove();
        Walk();
        CharGravity();
        CharJump();
        newFood();
        if (Char.y > 390){ Char.y = 390};
        frame++;
        if (GamePoint ===20 ){
            alert('勝ちました。');
            GamePoint=0;
            return;
        }
    }
}
function CharGravity(){
    if(Char.y< 390){
        Char.y += CharGravityPoint;
        }
}
// tính FPS 
function startAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    // startTime = then;
    animated();
}

// startAnimating(60);
