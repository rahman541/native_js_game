var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')

var x = canvas.width/2
var y = canvas.height-30
var ballRadious=10

function drawBall() {
	ctx.beginPath()
	ctx.arc(x,y,ballRadious,0,Math.PI*2)
	ctx.fillStyle='blue'
	ctx.fill()
	ctx.closePath()
}

function draw() {
	drawBall(draw)
	requestAnimationFrame(draw)
}

requestAnimationFrame(draw)