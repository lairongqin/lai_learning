var can1;
var can2;

var canWidth;
var canHeight;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bg_pic = new Image();

var fruit;
var mom;
var ane;

var mx;
var my;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail =[];
var momEye = [];

var momBodyOra = [];
var momBodyBlue = [];

var wave;
var halo;

var dust;
var dustpic = [];

var click = false;

document.body.onload = game;
function game()
{
	init();
	console.log("onload");
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}
function init()
{
	//
	var a = document.getElementById("play");
	a.addEventListener('click',play,false);
	//
	bg_pic.src ="src/background.jpg";
	//
	can1 = document.getElementById("canvas1");//fishes,dust,UI,circle
	ctx1= can1.getContext("2d");
	can2 = document.getElementById("canvas2");//background,ane,fruit
	ctx2 = can2.getContext("2d");
	canWidth = can1.width;
	canHeight = can1.height;
	//
	can1.addEventListener('mousemove',onMouseMove,false);
	//
	ane = new aneObj();
	ane.init();
	//
	fruit = new fruitObj();
	fruit.init();
	//
	mom = new momObj();
	mom.init();
	//
	mx = canWidth*0.5;
	my = canHeight*0.5;
	//
	baby = new babyObj();
	baby.init();
	
	for(var i = 0 ; i<8;i++)
	{
		babyTail[i]=new Image();
		babyTail[i].src = "./src/babyTail"+i+".png";
		momTail [i] = new Image();
		momTail[i].src = "./src/bigTail"+i+".png";
	}
	for(var i = 0; i<2 ;i++)
	{
		babyEye[i] = new Image();
		babyEye[i].src = "./src/babyEye"+i+".png";
		momEye[i] = new Image();
		momEye[i].src = "./src/bigEye"+i+".png";
	}
	for(var i=0;i<20;i++)
	{
		babyBody[i] = new Image();
		babyBody[i].src ="./src/babyFade"+i+".png";
	}
	data = new dataObj();
	for (var i = 0 ; i<8 ; i++)
	{
		momBodyOra[i] = new Image();
		momBodyBlue[i] = new Image();
		momBodyOra[i].src = "./src/bigSwim"+i+".png";
		momBodyBlue[i].src = "./src/bigSwimBlue"+i+".png";
	}
	ctx1.fillStyle = "white";
	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center";
	
	wave = new waveObj();
	wave.init();
	
	halo = new haloObj();
	halo.init();
	
	dust = new dustObj();
	for (var i =0;i<7;i++)
	{
		dustpic[i] = new Image();
		dustpic[i].src = "./src/dust"+i+".png";
	}
	dust.init();

}
function gameloop()
{
	window.requestAnimFrame(gameloop);//Ñ­»·Ò³ÃæÖ¡
	var now = Date.now();
	deltaTime = now - lastTime;
	if(deltaTime > 40) deltaTime = 40;
	lastTime = now;
	drawBackground();
	ane.draw();
	if (click)
	{
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeight);
	baby.draw();
	mom.draw();
	momFruitCollision();
	momBabyCollision()
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
	rePlay();
	}

}

function onMouseMove(e)
{
	if(!data.gameOver)
	{
		if(e.offSetX||e.layerX)
		{
			mx =e.offSetX == undefined ? e.layerX : e.offSetX; 
			my =e.offSetY == undefined ? e.layerY : e.offSetY;
		}		
	}

}

function rePlay()
{
	if(data.gameOver)
	{
		reset();
	}

}