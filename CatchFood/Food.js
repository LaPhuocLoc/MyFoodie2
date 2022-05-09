const Foods =[];
let FoodGravityPoint = 10;
let FoodDropSpeed =70 ; 
const PointBonusImg = new Image();
PointBonusImg.src =  "img/bonus1.png";

class Food{
    constructor(){
        this.x = Math.floor(Math.random()*550 +100);
        this.y = 0;
        this.width = 32;
        this.height =32;
        this.CatchFoodKey = false;
        this.GravityKey = false;
        this.RandomFood =Math.floor(Math.random()*11+1);
        this.FoodImg = new Image();
        this.FoodImg.src= "img/Food/"+this.RandomFood + ".png";
        this.Catching = false;
        this.PointY = 0;
    }
    drawFood(img, sX, sY, sW, sH, dX, dY, dW, dH){
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }
    drawPointBonus(img, sX, sY, sW, sH, dX, dY, dW, dH){
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
    }
    update(){
        if (this.GravityKey===false ){
            if  (this.y <= 454){
                this.y += FoodGravityPoint;
            }
        }
        else {
            this.GravityKey=true;
        }
        this.drawFood(this.FoodImg, 0, 0, 16, 16,this.x, this.y, this.width, this.height);
        this.CatchFood();
        this.PutInBox();
        this.deleteFoodAnimation();
    }
    CatchFood(){
        if (this.CatchFoodKey===false) {
            if ( this.y <= Char.y +Char.height && this.y >= Char.y - this.height/2 ){
                if(this.x <= Char.x + Char.width/2 && this.x >= Char.x - this.width/2 ){
                    this.x =( Char.x + Char.width/4 );
                    this.y =( Char.y - this.height/2 );
                }
            }   
        }
        if (this.y >= 454){
            this.CatchFoodKey=true;
        }
    }
    PutInBox(){ // them object box neu can
        if (Char.x >= 670 && Char.y >= 390 && this.x === Char.x + Char.width/4){
            this.x= 750;
            this.y= 400;
            this.CatchFoodKey=true;
        }
        if (this.x=== 750&& this.y>= 400){
            this.drawPointBonus(PointBonusImg, 0, 0, 64, 64,750, 400+ this.PointY, 64, 64);
            this.PointY--;
            if(this.y===400){
                GamePoint++;
                console.log(GamePoint);      
                document.querySelector('.GamePoint').innerHTML = GamePoint;
         
            }
        }
    }
        deleteFoodAnimation(){
        if(this.y>=454 && frame%5===0){
            this.width = 0;
            this.height = 0;
        }
        if(this.y>=454 && frame%10===0){
            this.width = 32;
            this.height = 32;
        }
    }
}
function newFood(){
    if (frame%FoodDropSpeed===0){
        Foods.unshift(new Food);
    }
    for( let i= 0 ; i< Foods.length; i++ ){
        Foods[i].update();
    }
    if (Foods.length> 4 ){
        Foods.pop();
    }
}
