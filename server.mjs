import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import CONFIG from './config.mjs';

//Setup Middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

//Setup MongoDB
mongoose.connect('mongodb://rwdavisx:liamH252!@ds259778.mlab.com:59778/sandbox-db');

const Game = mongoose.model('Game', {
    name: String,
    rating: Number,
    genre: String,
});

//Setup Routes
app.get('/home', (req, res) => {
    res.send({init: true});
});

app.post('/api/games', (req, res) => {
    console.log(req.body);
    let game = new Game({
        name: req.body.name,
        rating: req.body.rating,
        genre: req.body.genre,
    });
    game.save();
    res.sendStatus(200);
});

app.get('/api/games', (req, res) => {
    Game.find({}, (err, docs) => {
        res.send({games: docs});
    });
});

//Run Server
app.listen(CONFIG.port, () => {
    console.log('Server listening on port ' + CONFIG.port);
});

