// window.alert("working!");
var stage, circle;
var ticker = createjs.Ticker;
function init(){
	stage = new createjs.Stage("demoCanvas");


	circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);


	ticker.addEventListener("tick", tick);
	ticker.setFPS(20);
};
function tick(event){

	circle.x += 10;
	if(circle.x>stage.canvas.width){
		circle.x=0;
		ticker.setFPS(ticker.getFPS()*1.5);
	}
	stage.update();
}
	