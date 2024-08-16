const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const menssagens = [
    {nome:'Bryam Assolini', menssagem: 'Olá mundo!!!'},
];

app.get('/menssagens', (req, res) =>{
    res.status(200).json({menssagens: menssagens});
});

app.post('/menssagens', (req, res) =>{
    const { nome , menssagem} = req.body;
    menssagens.push({nome: nome, menssagem: menssagem});
    res.status(201).json({menssagem: 'Deu boa'});
});

module.exports = app;