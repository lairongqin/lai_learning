
var fruitObj = function()
{
	this.alive = [];
	this.orange = new Image();
	this.blue = new Image();
	this.x = [];
	this.y = []; 
	this.l = [];
	this.spd =[];
	this.aneNO = [];
	this.fruitType = [];
}
fruitObj.prototype = {
	num : 30,
	init :function()
	{
		for (var i = 0; i<this.num;i++)
		{
			this.alive[i] = false;
			this.x[i] = 0;
			this.y[i] = 0;
			this.l[i] = 0;
			this.aneNO[i] = 0;
			this.fruitType[i] = "";
			this.spd[i] = Math.random()*0.02+0.05;
		}
		this.orange.src = "./src/fruit.png";
		this.blue.src = "./src/blue.png";
	},
	draw: function()
	{
		for (var i=0;i< this.num;i++)
		{
			var pic;
			if (this.fruitType[i] == "blue")
			{
				pic = this.blue;
			}
			else
			{
				pic = this.orange;
			}
			if(this.alive[i])
			{
				if(this.l[i]<14)//果实半径判断
				{
					var no = this.aneNO[i];
					this.x[i] = ane.headx[no];
					this.y[i] = ane.heady[no];
					this.l[i]+= this.spd[i]*deltaTime*0.1;
				}
				else
				{
					this.y[i]-= this.spd[i]*deltaTime;
				}
				ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);				
			}
			if(this.y[i]<10)
			{
				this.alive[i] = false;
			}

		}
	},
	update:function()
	{
		var num = 0;
		for (var i = 0;i<this.num;i++)
		{
			if (this.alive[i])
			{
				num++;
			}
		}
	},
	born:function(i)
	{
		this.aneNO[i] = Math.floor(Math.random()*ane.num);
		this.l[i]=0;
		this.alive[i] = true;
		var ran = Math.random();
		if (ran < 0.15)
		{
			this.fruitType[i] = "blue";
		}
		else
		{
			this.fruitType[i] = "orange";
		}
	},
	dead:function(i)
	{
		this.alive[i]=false;
		
	},
};
function fruitMonitor()
{
	var num = 0;
	for(var i=0;i<fruit.num;i++)
	{
		if(fruit.alive[i])
		{
			num++;
		}
	}
	if(num<15)
	{
		sendFruit();
		return;
	}
}
function sendFruit()
{
	for (var i=0;i<fruit.num;i++)
	{
		if(!fruit.alive[i])
		{
			fruit.born(i);
			return;
		}
	}
}