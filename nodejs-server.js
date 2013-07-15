

server = require("socket.io").listen(2011);


server.sockets.on("connection", init);


function init(socket){
	socket.emit("greetings", "Hi, user!");
	socket.on("name", broadcast);
}

function broadcast(data){
	server.sockets.emit("nameFromNode", data);
}
