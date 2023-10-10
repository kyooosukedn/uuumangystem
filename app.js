require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.port;

app.use(express.urlencoded({ extended : true}))
app.use(express.json())

// static files
app.use(express.static('public'));

// templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// home
app.get('/', (req, res) => {

    const locals = {
        title: 'UUUMANGYSTEM',
        description: 'User Management System'
    };

    res.render('index', locals);
});

// handle 404 Error
app.get('*', (req, res) => {
    res.status(404).render('404');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});