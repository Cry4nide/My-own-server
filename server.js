var http = require("http");
var url = require("url");
function iniciar(){
	function Onrequest(request, response){
		console.log("Petición recibida");
	}
	http.createServer(Onrequest).listen(8888);
	console.log("Server iniciado");
}
exports.iniciar = iniciar;