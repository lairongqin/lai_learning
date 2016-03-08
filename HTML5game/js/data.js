var dataObj = function()
{
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;	
}
dataObj.prototype = {
	draw:function()
	{
		var w = can1.width;
		var h = can1.height;
		ctx1.save();
		ctx1.shadowBlur = 7;
		ctx1.shadowColor = "white";
		ctx1.fillText("SCORE : "+this.score,w*0.5,h-50 );
		//gameOver
		if (this.gameOver)
		{
			this.alpha += deltaTime *0.0005;
			if(this.alpha>1)
			{
				this.alpha=1;
			}
			ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")"; 
			ctx1.fillText("GAME OVER",w*0.5,h*0.5);
		}
		ctx1.restore();
	},
	addScore:function()
	{
		this.score += this.fruitNum*100*this.double;
		this.fruitNum = 0;
		this.double = 1;
	}
	
}
