//
//	This gets the Server options for an HTTPS server.
//	Input:	key, colocated with this file.
//	Input:	cert, colocatd with this file.
//	Output:	https_ServerOptions -- a object with key and cert fields.
//
//	Note:	If the key, or cert does not exist (not found), then the 
//			response is a null.
//
const fs = require('fs');

var 	https_ServerOptions = {};

var 	key = null;
var		cert = null;

let 	path_and_file = __dirname + '/key.pem';
try { key = fs.readFileSync(path_and_file); } catch (e) {}
path_and_file = __dirname + '/cert.pem';
try { cert = fs.readFileSync(path_and_file); } catch (e) {}

if (key && cert)
{
	https_ServerOptions.key = key;
	https_ServerOptions.cert = cert;
}
else
{
	https_ServerOptions = null;
}

module.exports = https_ServerOptions;

