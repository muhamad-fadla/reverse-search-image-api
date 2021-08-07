const express = require('express');
const cors = require('cors');
const reverseImageSearch = require('node-reverse-image-search')

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.get('/reverse', async (req,res) => {

	if(!req.query){
		return res.status(500).json({
			status: false,
			message: "No url found"
		});
	}
	if(typeof res.query['url'] == "undefined"){
		return res.status(500).json({
			status: false,
			message: "No url found"
		});
	}

	await reverseImageSearch(req.query['url'], function(data){
		res.status(200).json({
			status: true,
			data: data
		});
	});


});

app.listen(PORT, function(){
	console.log('Listening on', PORT);
});