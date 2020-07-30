const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    lname:{
        type: String
    },
    email: {
        type : String
    },
    subject : {
        type: String
    },
    comment: {
        type:String
    }
});

module.exports = mongoose.model('Contact', contactSchema);


/* class as a model
const contacts = [];

class Contact {
    constructor(name, email, subject, comment){
        this.name = name;
        this.email= email;
        this.subject = subject;
        this.comment = comment;
    }
    save(){
        contacts.push(this);
    }
}

module.exports = Contact;
*/