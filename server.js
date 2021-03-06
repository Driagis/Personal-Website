const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pagesRouter = require('./router/pages');

const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', pagesRouter);

mongoose.connect('mongodb://localhost:27017/ContactDb', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(8888, () => {
        console.log('MongoDb connection success... and Express server is running');
    });
})


/*app.listen(3000, () => {
    console.log('Express server is running');
});*/



