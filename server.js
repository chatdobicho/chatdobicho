const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

// Endpoint para Webhook
app.get('/webhook', (req, res) => {
    res.status(200).send('Webhook funcionando!');
});

app.get('/webhook', (req, res) => {
    const VERIFY_TOKEN = 'Chatdobicho2206*';

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token === VERIFY_TOKEN) {
        res.status(200).send(challenge);
    } else {
        res.status(403).send('Falha na validação');
    }
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

