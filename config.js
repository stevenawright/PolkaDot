//
//	Sets up the enviroments for production and staging (could have another for testing).
//	Input:	NODE_ENV,
//	Output:	obj{http_port, https_port, enviroment_name}
//	Note:	This enviroment is retrived during startup.  
//
let enviroments = {};

enviroments.staging = {
	'http_port' : 3210,
	'https_port' : 3211,
	'enviroment_name' : 'staging'
};

enviroments.production = {
	'http_port' : 10080,
	'https_port' : 10423,
	'enviroment_name' : 'production'
};

let		current_enviroment = typeof (process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : ""; 
var		enviroment_to_export = typeof(enviroments[current_enviroment]) === 'object' ? enviroments[current_enviroment] : enviroments.staging;

module.exports = enviroment_to_export;
