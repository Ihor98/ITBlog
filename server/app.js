const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const app = express();

const mongoUrl = 'mongodb+srv://ihor:Wius4LrDpyD2B4hk@cluster0.rrrhf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUrl).then(() => console.log('Database connected!'))

app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/api/auth', authRoutes);

const mongoDBPassword = 'Wius4LrDpyD2B4hk';


module.exports = app;
