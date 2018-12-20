//
//	Create a Server that takes a path of /hello and returns "Something" in JSON format.
//
const http = require('http');
const https = require('https');
const url = require('url');
const config = require('./config');
const https_ServerOptions = require('./HTTPS/ServerOptions');

const http_server = http.createServer(function(req, res) {
	unified_server(req, res);
});

http_server.listen(config.http_port, 
	function() {console.log("The Node Server Is Listing On Port: " + config.http_port);})


if (https_ServerOptions)
{
	const https_server = https.createServer(https_ServerOptions, function(req, res) {});
	https_server.listen(config.https_port, 
		function() {console.log("The Node Server Is Listing On SSL Port: " + config.https_port);})
}

var unified_server = function(req, res) {
	let 	parsed_url = url.parse(req.url, true);
	let		path = parsed_url.pathname;
	let		trimmed_path = path.replace(/^\/+|\/+$/g, "");
	let		query_string = parsed_url.query;
	let		http_method = req.method.toUpperCase();

	if (http_method !== 'GET')
	{
		res.setHeader("Content-Type", "application/json");
		let		response_payload = {"ERROR" : "Must Be GET.  We Are Using REST"};
		let		status_code = 405;
		res.writeHead(status_code);
		res.end(JSON.stringify(response_payload));
		return;
	}
	if (trimmed_path === "hello")
	{
		res.setHeader("Content-Type", "application/json");
		let		response_payload = {"Hello" : "Default World"};
		if ("hello" in query_string)
		{
			response_payload = {"Hello" : query_string["hello"]};
		}
		let		status_code = 200;
		res.writeHead(status_code);
		res.end(JSON.stringify(response_payload));
		return;
	}
	res.setHeader("Content-Type", "application/json");
	trimmed_path = trimmed_path ? trimmed_path : "No Path";
	let		response_payload = {[trimmed_path] : "No World For You"};
	let		status_code = 418;
	res.writeHead(status_code);
	res.end(JSON.stringify(response_payload));
};

