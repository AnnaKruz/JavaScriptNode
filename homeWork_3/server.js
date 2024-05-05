const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    let counter = fs.readFileSync(path.resolve(__dirname, 'counter1.txt'), 'utf8') || 0;
    counter++;
    fs.writeFileSync(path.resolve(__dirname, 'counter1.txt'), counter.toString());
    res.send(`Welcome! you are visitor number ${counter}`);

});

app.get('/about', (req, res) => {
    let counter = fs.readFileSync(path.resolve(__dirname, 'counter2.txt'), 'utf8') || 0;
    counter++;
    fs.writeFileSync(path.resolve(__dirname, 'counter2.txt'), counter.toString());
    res.send(`About page! Visitor count: ${counter}`);

});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});