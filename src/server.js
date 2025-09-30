const express = require("express");
const app = express();
const helmet = require("helmet");

// Default Helmet settings do a lot of configuration for us already
// Further options are here:
// https://www.npmjs.com/package/helmet
app.use(helmet());

// CORS to help limit what front-ends can access our API!
const cors = require("cors");
let corsOption = {
	origin: [
		"http://localhost:5000",
		"https://deployedReactApp.com"
	],
	optionsSuccessStatus: 200
}
app.use(cors(corsOption));


// Receive JSON body data on requests 
app.use(express.json());


app.get("/", (request, response) => {
	response.json({
		message: "Hello, world!"
	});
});

// 404 route handler, if no previously-mounted route has activated
// then this route will activate and send a message to the client
app.all(/.*/, (request,response) => {
	response.status(404).json({
		message:"Route not found in this API!",
		targetPath: request.path
	});
});

module.exports = {
	app
}