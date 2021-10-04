var events = require('events');
var eventOb = new events.EventEmitter();

eventOb.on('MyEvent', function(data){
	console.log("Someone subscribed for event and see data below and i am inside the listener function");
	console.log(data);
})

eventOb.on("MyEvent", function(data){
	console.log("listener 2. inside the listener function. data passed is below");
	console.log(data);
})

eventOb.emit("MyEvent","Hello is message when event is emitted");