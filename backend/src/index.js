const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-k2tld.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//app.use(cors({origin:'http://localhost:3000'})); libera só pra minha app em react
app.use(cors()); //libera para todo tipo de acesso externo
app.use(express.json());
app.use(routes);


app.listen(3333);