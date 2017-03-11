// set variables for environment
var express = require('express');
var request = require('request');
var app = express();

// GET Method route
app.get('/', function (req, res) {

//Talks to github by passing in a user token
request({
    url: 'https://api.github.com/user',
    method: 'GET',
	json: true,
 	//values passed in for github api
	headers: {
        'User-Agent': 'MoHossain',
		'Authorization': 'token 7b14a5ff813a5dd817f1aaf5bbd01b34b5ccc016'
    	}
	}, 
	function(error, response, body){
    	if(error) {
			//Displays an error on the console
			console.log(error);
    	} else {
			//Sends a response to the user
			res.json(body);
    	}
});

})

// POST Method route
app.post('/', function (req, res) {
	res.status(403).send('HTTP Method not supported.');
})

// PUT method route
app.put('/', function (req, res) {
	res.status(403).send('HTTP Method not supported.');
})

// DELETE method route
app.delete('/', function (req, res) {
	res.status(403).send('HTTP Method not supported.');
})

//Run js code locally
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})