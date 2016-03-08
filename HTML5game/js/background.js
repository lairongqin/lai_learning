function drawBackground()
{
	ctx2.drawImage(bg_pic,0,0,canWidth,canHeight);
}
function play()
{
	click = true;
	var a = document.getElementById("play");
	a.setAttribute("style","display:none");
}
function reset()
{

	var a = document.getElementById("reset");
	a.setAttribute("style","display:block");
	a.addEventListener('click',reset2,false);

}
function reset2()
{	
	baby.babyBodyCount = 0;
	data.gameOver = false;
	data.score = 0;
	fruit.init();
	data.fruitNum = 0;
	data.double = 1;
	mom.bigBodyCount = 0;
	var a = document.getElementById("reset");
	a.setAttribute("style","display:none");
}