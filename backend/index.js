const express = require('express');

const app = express()

app.get('/', (req, res) => {

    return res.json({ 
        evento: 'Semana OminiStack 11.0',
        aluno: 'Dev - Deyveson Willian' 
    });

})

app.listen(3333);