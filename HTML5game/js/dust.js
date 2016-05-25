var dustObj = function()
{
	this.x=[];
	this.y=[];
	this.amp=[];
	this.no = [];
	this.alpha;
}
dustObj.prototype={
	num:20,
	init:function()
	{
		for (var i = 0; i < this.num ;i++)
		{
			this.x[i] =Math.random()*canWidth;
			this.y[i] =Math.random()*canHeight;
			this.amp[i] = 20+Math.random()*25;
			this.no[i] =Math.floor(Math.random()*7);
		}
		this.alpha = 0;
	},
	draw:function()
	{
		this.alpha = ane.alpha;
		var l = Math.sin(this.alpha);
		for(var i=0;i<this.num;i++)
		{
			var NO = this.no[i];
			ctx1.drawImage(dustpic[NO],this.x[i]+l*this.amp[i],this.y[i]);
		}
	}
}