
const PORT = process.env.PORT || 3000;

// 1. Connect to the database 

// 2. Activate the Express server 
const {app} = require("./server.js");

app.listen(PORT, () => {
	console.log("The server is running in port: " + PORT);
});