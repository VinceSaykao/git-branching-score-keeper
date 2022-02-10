const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});



// git merge --no-ff feature-background
// git checkout master
// git checkout -b feature-background
//git branch makes new 