//
//	Create a Server that takes a path of /hello and returns "Something" in JSON format.
//
const http = require('http');
const url = require('url');

const http_server = http.createServer(function(req, res) {
	let 	parsed_url = url.parse(req.url, true);
	let		path = parsed_url.pathname;
	let		trimmed_path = path.replace(/^\/+|\/+$/g, "");
	let		query_string = parsed_url.query;

	if (trimmed_path === "hello")
	{
		res.setHeader("Content-Type", "application/json");
		let		response_payload = {"Hello" : "Default World"};
		if ("World" in query_string)
		{
			response_payload = {"Hello" : query_string["World"]};
		}
		let		status_code = 200;
		res.writeHead(status_code);
		res.end(JSON.stringify(response_payload));
	}
	else
	{
		res.setHeader("Content-Type", "application/json");
		let		response_payload = {[trimmed_path] : "No World For You"};
		let		status_code = 418;
		res.writeHead(status_code);
		res.end(JSON.stringify(response_payload));
	}
});

http_server.listen(3210, function() {console.log("The Node Server Is Listing On Port 3210");})

