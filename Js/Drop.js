class Drop{
    constructor(x,y,radius){
        var options={
           // restitution : 3.0,
            friction : 0.1
            //density : 5.0
        }
        //  shape of the body
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
    //make fall function to add speed 
    fall(speed){
        this.y +=speed;
    }
    
    updates(){
        if(this.body.positon > height){
            console.log(this.body.positon);
            Matter.Body.setPositon(this.body , {x : random(0,100) , y : random(0,100)}); 
        }
            }
    // display function to guve the x,y,radius and color
    display(){
        push();
        fill("silver");
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.radius,this.radius);
        pop();
    }
   
  }

 