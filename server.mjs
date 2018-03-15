import express from 'express';
import bodyParser from 'body-parser'
import util from './util';
import CONFIG from './config.mjs';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/home', (req, res) => {
    res.send({init: true});
});

app.get('/api/games', (req, res) => {
    const games = {
        games: [
            {
                id: '1',
                name: 'Hearts of Iron IV',
                img: `${util.dirFnc}./static/img/hoi.jpeg`
            },
            {
                id: '2',
                name: 'Squad',
                img: `${util.dirFnc}./static/img/squad.png`
            },
            {
                id: '3',
                name: 'Battlefield 1',
                img: 'http://localhost:4200/img/bf1'
            },
        ]
    };

    console.log(games);
    res.send(games);
});

app.get('/img/bf1', (req, res) => {
    res.sendFile('C:\\Users\\rwdav\\WebstormProjects\\client-server-demo\\static\\img\\bf1.jpg');
});

app.listen(CONFIG.port, () => {
    console.log('Server listening on port ' + CONFIG.port);
});

