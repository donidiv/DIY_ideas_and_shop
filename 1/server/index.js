const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');


const routes = require('./routes');
const {auth} = require('./middlewares/authMiddleware');

const app = express();

mongoose.connect('mongodb://localhost:27017/DIY')
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser('SECRETSECRET'))
app.use(cors({
    origin: ['http://localhost:27017', 'http://localhost:4200'],
    credentials: true
}));
app.use(auth);

// app.use((req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader('Access-Control-Allow-Headers', '*');

//     next();
// });

app.get('/api', (req, res)=> {
    res.send('RESTful service');
});

app.use(routes)

app.listen(3000, ()=> console.log('RESTful server is listening on port 3000...'));