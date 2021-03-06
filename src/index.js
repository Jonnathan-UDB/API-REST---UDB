const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port', process.env.PORT || 10000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(require('./routes/UDBE'));

app.listen(app.get('port'), () => {
    console.log('Conectando al puerto #', app.get('port'),' del server UDB');
});