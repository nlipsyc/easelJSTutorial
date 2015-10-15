// window.alert("working!");
var stage, circle;
var ticker = createjs.Ticker,
	lastCycle = 0;

function init(){
	stage = new createjs.Stage("demoCanvas");


	circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);


	ticker.addEventListener("tick", tick);
	ticker.setFPS(20);
}
function tick(event){
	circle.x += event.delta/1000*200;
	if(circle.x>stage.canvas.width){

	console.log("delta", event.delta);
	console.log("fps", ticker.getFPS());
	console.log("cycle time", ticker.getTime()-lastCycle);
	lastCycle = ticker.getTime();


		circle.x=0;
		ticker.setFPS(ticker.getFPS()*1.5);

		if(ticker.getFPS()>80){
			ticker.setFPS(20);
		}
	}
	stage.update();
}
	