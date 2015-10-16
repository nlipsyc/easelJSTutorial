// window.alert("working!");
var stage, circle, oldX, oldY, strokeColour, strokeWeight,
	ticker = createjs.Ticker,
	lastCycle = 0,
	drawShown = false;


	
function init(){
	stage = new createjs.Stage("demoCanvas");

	//Allows mouse tracking outside of the stage
	stage.mouseMoveOutside = true; 

	stage.enableMouseOver();


	circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);

	line = new createjs.Shape();
	stage.addChild(line);

	stage.update();

//Mouse events


	// circle.on("click", function(){
	// 	if(circle.x%2===0){
	// 		circle.x+=51;
	// 	}
	// 	else{
	// 		circle.x-=51;
	// 	}
	// 	stage.update();
	// });
	// circle.on("mouseover", function(event){
	// 	console.log("mouseover");
	// 	circle.graphics.clear().beginFill("purple").drawCircle(0,0,50);
	// 	stage.update();
	// });
	// circle.on("mouseout", function(event){
	// 	console.log("mouseout");
	// 	circle.graphics.clear().f("DeepSkyBlue").dc(0,0,50);
	// 	stage.update();
	// });

	circle.on("pressmove", function(evt){
		evt.currentTarget.x = evt.stageX-50;
		evt.currentTarget.y = evt.stageY;

		stage.update();
	});
	circle.on("click", function(event){
		console.log("click!");
		strokeColour = createjs.Graphics.getHSL(Math.random()*360, 100, 50);
		strokeWeight = 20*Math.random();

		handleDraw();
	});


	// ticker.addEventListener("tick", tick);
	// ticker.setFPS(20);
}


/**********Drawing*******/


function handleDraw(){
	drawShown=!drawShown;

	console.log(drawShown);

	stage.on("stagemousemove", function(evt){

		if(oldX && drawShown){
			line.graphics.beginStroke(strokeColour)
							.setStrokeStyle(strokeWeight,"round")
							.moveTo(oldX,oldY)
							.lineTo(evt.stageX, evt.stageY);
			stage.update();
		}
		oldX = evt.stageX;
		oldY = evt.stageY;
	});
	stage.update();
}

/***********Animation************/
// function tick(event){
// 	circle.x += event.delta/1000*200;
// 	if(circle.x>stage.canvas.width){

// 	console.log("delta", event.delta);
// 	console.log("fps", ticker.getFPS());
// 	console.log("cycle time", ticker.getTime()-lastCycle);
// 	lastCycle = ticker.getTime();


// 		circle.x=0;
// 		ticker.setFPS(ticker.getFPS()*1.5);

// 		if(ticker.getFPS()>80){
// 			ticker.setFPS(20);
// 		}
// 	}
// 	stage.update();
// }
	