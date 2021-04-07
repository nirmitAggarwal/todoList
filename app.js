const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
const port = 3000;

var items = [];

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));
var today = new Date();

var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

var day = today.toLocaleDateString('en-IN', options);

app.get('/', (req, res) => {

    res.render('list', {
        usersDay: day,
        newListItem: items
    });

});


app.post('/', (rq, rs) => {
    var item = rq.body.newItem;
    items.push(item);
    rs.redirect('/');
    //console.log(rq.body.newItem)

});

app.listen(port, '0.0.0.0', function () {

    console.log('server started')

})