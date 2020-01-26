var express = require('express');
var app = express();
var router = express.Router();
var port = 3030;
app.get('/number_predict', function(req, res){
	res.sendFile('views/index.html', {root: __dirname});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
