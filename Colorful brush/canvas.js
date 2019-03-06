const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

let isDrawing = false;
let prevX;
let prevY;
let hue = 0;
let direction = true;

function draw(event){
	if(!isDrawing) return;
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	ctx.moveTo(prevX, prevY);
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();
	[prevX, prevY] = [event.offsetX, event.offsetY];
	++hue;

	hue %= 360;

	if(ctx.lineWidth <= 1 || ctx.lineWidth > 100)
		direction = !direction;

	if(direction)
		++ctx.lineWidth;
	else
		--ctx.lineWidth;
}
myCanvas.addEventListener('mousedown', event => {
	isDrawing = true;
	[prevX, prevY] = [event.offsetX, event.offsetY];
})
myCanvas.addEventListener('mousemove', draw);
myCanvas.addEventListener('mouseup', () => isDrawing = false);
myCanvas.addEventListener('mouseover', () => isDrawing = false);

document.getElementsByTagName('button')[0].addEventListener('click', 
	() => ctx.clearRect(0, 0, myCanvas.width, myCanvas.height));
