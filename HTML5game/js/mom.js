var momObj = function()
{
	this.x;
	this.y;
	
	this.bigTailTimer = 0;
	this.bigTailCount = 0;
	
	this.bigEyeTimer = 0;
	this.bigEyeCount = 0;
	this.bigEyeInterval = 1000;
	
	this.bigBodyCount = 0;
	
}
momObj.prototype={
	init:function()
	{

		this.x = canWidth*0.5;
		this.y = canHeight*0.5;
		this.angle = 0;
	},
	draw:function()
	{
		//Tail
		this.bigTailTimer += deltaTime;
		if (this.bigTailTimer >50)
		{
			this.bigTailCount = (this.bigTailCount+1)%8;
			this.bigTailTimer = this.bigTailTimer%50;
		}
		var bigTailCount = this.bigTailCount;
		//Eye
		this.bigEyeTimer += deltaTime;
		if (this.bigEyeTimer > this.bigEyeInterval)
		{
			this.bigEyeCount = (this.bigEyeCount+1)%2;
			this.bigEyeTimer %= this.bigEyeInterval;
			if (this.bigEyeCount == 0)
			{
				this.bigEyeInterval = Math.random()*1800+1200;
			}
			else
			{
				this.bigEyeInterval = 200;
			}
		}
		var bigEyeCount = this.bigEyeCount;
		
		var momBodyCount = this.bigBodyCount;
		//follow mouse
		this.x = lerpDistance(mx,this.x,0.96);
		this.y = lerpDistance(my,this.y,0.96);
		
		var deltaY = my - this.y;
		var deltaX = mx - this.x;
		var beta = Math.atan2(deltaY,deltaX)+Math.PI;
		
		this.angle = lerpAngle(beta,this.angle,0.6);

		ctx1.save();
		ctx1.translate(this.x,this.y);
		ctx1.rotate(this.angle);
		ctx1.drawImage(momTail[bigTailCount],-momTail[bigTailCount].width*0.5+30,-momTail[bigTailCount].height*0.5);
		if (data.double == 1)
		{
			ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width*0.5,-momBodyOra[momBodyCount].height*0.5);			
		}
		else
		{
			ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width*0.5,-momBodyBlue[momBodyCount].height*0.5);
		}
		ctx1.drawImage(momEye[bigEyeCount],-momEye[bigEyeCount].width*0.5,-momEye[bigEyeCount].height*0.5);
		ctx1.restore();
	}
}
