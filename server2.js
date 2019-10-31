const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


// App
const app = express();
app.get('/',(req, res) => {
	
let text = '';
let i;
	let date1 = Date.now();
		
	for (i = 0; i < 5000000; i++) {
	Math.sqrt(Math.random());
		//text += "The number is " + i + "\n";
	}
		
	let date2 = Date.now();
	let diff = date2-date1;
		
var os = require("os");
	res.send('Hello world ' + os.hostname() + '\n' + diff + '\n');
});

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');