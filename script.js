var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')

var x = canvas.width/2
var y = canvas.height-30
var dx = 2		// In physic; Delta X.. same below for Y
var dy = -2
var ballRadius=10

function drawBall() {
	ctx.beginPath()
	ctx.arc(x,y,ballRadius,0,Math.PI*2)
	ctx.fillStyle='blue'
	ctx.fill()
	ctx.closePath()
}

function draw() {
	ctx.clearRect(0,0,canvas.width, canvas.height)
	drawBall(draw)

	// Ball bouncing
	if (x + dx > canvas.width - ballRadius || x+dx<ballRadius) {
		dx = -dx
	}
	if (y + dy < ballRadius) {
		dy = -dy
	}

	x += dx
	y += dy

	requestAnimationFrame(draw)
}

requestAnimationFrame(draw)