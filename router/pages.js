const express = require ('express');
const path = require ('path');
const bodyParser = require('body-parser');

const Contact = require('../models/contact');
const Article = require('../models/article');

const router = express.Router();
router.get('/', (req, res) => {
    res.render('Home');
});

router.get('/hobbies', (req, res) => {
    res.render('Hobbies');
});

router.get('/Biography', (req, res) => {
    res.render('Biography');
});

router.get('/Myfamily', (req, res) => {
    res.render('Myfamily');
});

router.get('/Mydogs', (req, res) => {
    res.render('Mydogs');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});
router.get('/article', (req, res) => {
    res.render('article');
});



/*router.post('/submitContact', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const comment = req.body.comment;

    const contact = new Contact(name,email,subject,comment);
    contact.save();



    res.render('submitContact', {contact: contact});
});*/
router.post('/submitContact', (req, res) => {

    const contact = new Contact ({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        subject: req.body.subject,
        comment: req.body.comment
    })

    contact.save()
    .then(result => {
        res.render('submitContact', {contact: result})
    .catch(err => console.log(err));
    })
});


router.post('/submitarticle', (req, res) => {
    const date = new Date()
    const article = new Article ({
        name: req.body.name,
        title: req.body.title,
        date: date,
        content: req.body.content
    })
    /*
    article.save()
    .then(result => {console.log('An Article has been added')})
    */
   Article.collection.insertOne(article)
   .then(result => {
       console.log('insert success..');
   })
   .catch(err => console.log(err));

   Article.find()
   .then(results =>{
    res.render('submitarticle', {articles: results});})
    .catch(err => console.log(err));
});

/*router.post('/submitarticle', (req, res) => {
    const title = req.body.title;
    const date = new Date();
    const content = req.body.content;

    const article = new Article(title,date,content);
    article.save();

    const articles = article.findAll();

   res.render('submitarticle', {articles: articles});
});*/

module.exports = router;