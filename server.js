const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

// Endpoint para Webhook
app.get('/webhook', (req, res) => {
    res.status(200).send('Webhook funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

