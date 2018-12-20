This is a REST Server that will respond with JSON object.

The request must be a GET, otherwise and error message:

	{"ERROR" : "Must Be GET.  We Are Using REST"}

If the path is not hello (e.g. bla.bla.bla.com/nothello), the response will be:

	{"nothello" : "No World For You"}


If the path is hello, case sensitive (e.g. bla.bla.bla.com/hello), the response will be:

	{"Hello" : "Default World"}

	If there is a query string which contains hello 
		(e.g. bla.bla.bla.com/hello?hello=UlaanBaatar) the response will be:

		{"Hello" : "UlaanBaatar"}

The Files:
hw1.js 		--	This is the main file, that calls all the other files.
config.js	--	Determines if we are in production/staging, based upon the enviroment 
				variable NODE_ENV
HTTPS		--	directory for HTTPS
	ServerOptions.js	--	opens up the key and cert files, if they exist; so that
							this can be used for HTTPS communication.
