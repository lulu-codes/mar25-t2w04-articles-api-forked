
const PORT = process.env.PORT || 3000;

const { dbConnect } = require("./database/connectionManager.js");


const {app} = require("./server.js");

// 1. Connect to the database 
dbConnect().then(() => {

	// 2. Activate the Express server 
	app.listen(PORT, () => {
		console.log("The server is running in port: " + PORT);
	});

});

