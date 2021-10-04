var emitter = require('events').EventEmitter;

function doSquare(no){
	let eventOb = new emitter();
	let square = 0;

	setTimeout(function(){
		eventOb.emit("BeforeSquare", square);
		square = no * no;
		eventOb.emit("AfterSquare", square);
	}, 3000);
	return eventOb;
}

function beforeSquareListener(data){
	console.log("Data Recieved BeforeSquare = " + data);
}

function beforeSquareListener1(data){
	console.log("Data Recieved One BeforeSquare = " + data);
}

function afterSquareListener(data){
	console.log("Data Recieved AfterSquare = " + data);
}

let squareOp = doSquare(8);
squareOp.addListener("BeforeSquare", beforeSquareListener);
squareOp.addListener("AfterSquare", afterSquareListener);
squareOp.addListener("BeforeSquare", beforeSquareListener1);
squareOp.removeListener("BeforeSquare", beforeSquareListener);

