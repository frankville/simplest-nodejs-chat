$(document).ready(start);

function start(){

	/*
	once the form is loaded, start to register events and create a socket.io connection.
	You can alter the port but you'll have to do it in the server-nodejs.js file too  
	*/
    websocket = io.connect("http://54.232.202.205:2011");

	websocket.on("greetings", greetings);

	$("#button").on("click",sendMsg);

	$("#msg").keypress(function(event){
//when user presses enter the "sendMsg()" function will be executed
     if(event.which == 13){
     	sendMsg();
     }

	});
//registers a message event on the server named "nameFromNode": when the server
//receives this message it will execute "receiveMsg" function 
	websocket.on("nameFromNode", receiveMsg);
}




function sendMsg(){
	
	//emits a message to the socket.io server sending the content of the nick and the msg input along with it
	websocket.emit("name",$("#nick").val()+": "+$("#msg").val());

}



function receiveMsg(data){
	if($("#chatArea").val() == ""){
		$("#chatArea").val(data);
	} else {
		$("#chatArea").val($("#chatArea").val()+"\n"+data);
	}
	
	$("#msg").val("");

}

function greetings(msg){
	$("#greetings").text(msg);
}
