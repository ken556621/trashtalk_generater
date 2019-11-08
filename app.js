const express = require('express');
const exphbs = require('express-handlebars');
const app = new express();
const port = 3000;
const bodyParser = require('body-parser');
const generateTrashtalk = require('./generateTrashtalk')

//setting template engine
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars')

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//setting routes
app.get('/', (req, res) => {
    res.render('index');
})



//render
app.post('/', (req, res) => {
    const trashWord = generateTrashtalk(req.body);
    const options = req.body.job || 'defaultText';
    //handlebars if 不能做其他的判斷
    const engineer = options.includes('engineer');
    const designer = options.includes('designer');
    const entrepreneur = options.includes('entrepreneur');
    res.render('index', { trashWord: trashWord, engineer: engineer, designer: designer, entrepreneur: entrepreneur });
})



//listen to server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})