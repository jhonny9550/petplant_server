const cors = require('cors');
const app = require('express')();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');
const api = require('./controllers/api.js');

mongoose.connect(config.db);

app.set('port', config.port);
app.all('*', cors());
app.use(bodyParser.json());

app.get('/', cors(), api.test);
app.get('/get_user/:id', cors(), api.get_user);
app.get('/get_plant/:id'), cors(); api.get_plant);
app.get('/get_plants_by_user/:id', cors(), api.get_plants_by_user);
app.get('/get_users', cors(), api.get_users);

app.post('/add_user', cors(), api.create_user);
app.post('/add_plant', cors(), api.create_plant);

server.listen(app.get('port'), function () {
    console.log("Servidor corriendo por el puerto " + app.get('port'));
});
