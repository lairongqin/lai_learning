var babyObj = function()
{
	this.x;
	this.y;
	this.angle = 0;
	this.babyTailTimer = 0;
	this.babyTailCount = 0;
	
	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;
	
	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;
	
}
babyObj.prototype = 
{
	init:function()
	{
		this.x = canWidth*0.5 - 50;
		this.y = canHeight*0.50 + 50;
	},
	draw:function()
	{
		this.x = lerpDistance(mom.x,this.x,0.98);
		this.y = lerpDistance(mom.y,this.y,0.98);
		
		var deltaY = mom.y - this.y;
		var deltaX = mom.x - this.x;
		var beta = Math.atan2(deltaY,deltaX)+Math.PI;
		
		this.angle = lerpAngle(beta,this.angle,0.6);
		
		//babyTail
		this.babyTailTimer += deltaTime;
		if(this.babyTailTimer > 60)
		{
			this.babyTailCount = (this.babyTailCount+1)%8;
			this.babyTailTimer %= 60;
		}
		var babyTailCount = this.babyTailCount;
		
		//babyEye
		this.babyEyeTimer += deltaTime;
		if(this.babyEyeTimer > this.babyEyeInterval)
		{
			this.babyEyeCount = (this.babyEyeCount+1)%2;
			this.babyEyeTimer %= this.babyEyeInterval ; 
			
			if (this.babyEyeCount == 0)
			{
				this.babyEyeInterval =Math.random()*1000+2200;
			}
			else
			{
				this.babyEyeInterval = 200;
			}						
		}
		var babyEyeCount = this.babyEyeCount;
		//babyBody
		this.babyBodyTimer += deltaTime;
		if (this.babyBodyTimer > 100)
		{
			this.babyBodyCount++;
			this.babyBodyTimer %=100;
			if(this.babyBodyCount>19)
			{
				this.babyBodyCount = 19;
				//game over
				data.gameOver = true;
			}
		}
		var babyBodyCount =this.babyBodyCount;
		
		//
		ctx1.save();
		ctx1.translate(this.x,this.y);
		ctx1.rotate(this.angle);
		
		ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width*0.5+23,-babyTail[babyTailCount].height*0.5);
		ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width*0.5,-babyBody[babyBodyCount].height*0.5);
		ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width*0.5,-babyEye[babyEyeCount].height*0.5);
		ctx1.restore();
	},
}