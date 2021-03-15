class Stone{

constructor(x,y,w,h){

	var options={
	isStatic:false,
	restitution:0,
	density:1.2,
	friction:1
	}
	this.image=loadImage("images/stone.png")
	this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
	this.x=x
	this.y=y	
	this.width=40
	this.height=40
	
	
	World.add(world,this.body);
}

display(){

	var stonePos=this.body.position;
	push ()
	translate (stonePos.x,stonePos.y);
	rotate (this.body.angle)
	fill (255,0,255)
	ellipseMode(CENTER)
	image(this.image, 220,400,this.width,this.height)
	pop ()
}
}
