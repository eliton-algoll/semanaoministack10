const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-zopwh.mongodb.net/omini10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//configurando o express para aceitar Json nas requisições
app.use(express.json());
//rotas
app.use(routes);

app.listen('3333');