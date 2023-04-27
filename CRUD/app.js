const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const errorController = require('./controllers/404');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

require('dotenv').config()

const connect = require('./configuration/db');

const personRoutes = require('./routes/person');

connect();

app.use(personRoutes);

app.use(errorController.get404);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
});
