const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//create an instance of express
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

//set EJS as templating engine
//set view engine to EJS
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
console.log('views',path.join(__dirname,'views'));
//code here


app.get('/',(req,res) => {
    //render the form and pass current student data
    
    res.render('index');
    
});

app.post('/calculate',(req,res) => {
    //Add the submitted student data to our data store
    const { num1, num2 } = req.body;
    const sum = Number(num1) + Number(num2);
    const difference = Number(num1) - Number(num2);
    const product = Number(num1) * Number(num2);
    const quotient = Number(num1) / Number(num2);
    res.render("result", {sum, difference, product, quotient});

    
});

var port = 4000
//start server
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
    
});