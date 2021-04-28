 class Paper
{
	constructor(x,y,radius)
	{
		this.x=x;
		this.y=y;
		this.paperWidth=200;
    
       this.image=loadImage("paper.png");
       this.image.scale = 1.5
       
      this.paperCircle = Bodies.circle(this.x, this.y , rad);
        
      World.add(world, this.paperCircle);
 }
display(){
this.body.position = position 

push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
		
			fill(255)
			rotate(this.angle)
			
			pop()


}

}