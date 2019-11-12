const express = require('express');
const exphbs = require('express-handlebars');
const app = new express();
const port = 3000;
const bodyParser = require('body-parser');
const personList = require('./person-list.json');
const generateTrashtalk = require('./generateTrashtalk')

//setting template engine
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars')

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//setting routes
app.get('/', (req, res) => {
    const person = personList.results;
    res.render('index', { person: person });
})


app.post('/', (req, res) => {
    const trashWord = generateTrashtalk(req.body);
    const person = personList.results;
    
    if(req.body.job === 'engineer'){
        person[0].selected = true;
        person[1].selected = false;
        person[2].selected = false;
    }else if(req.body.job === 'designer'){
        person[0].selected = false;
        person[1].selected = true;
        person[2].selected = false;
    }else if(req.body.job === 'entrepreneur'){
        person[0].selected = false;
        person[1].selected = false;
        person[2].selected = true;
    }
    res.render('index', { person: person, trashWord: trashWord });
})

//listen to server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})