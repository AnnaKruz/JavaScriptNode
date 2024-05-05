const express = require('express');
const app = express();
const port = 3000;

let views = {
    '/': 0,
    '/about': 0
};

app.get('/', (req, res) => {
    views['/']++;
    res.send(`<a href="/about">About</a>
    Views: ${views['/']}`);
});

app.get('/about', (req, res) => {
    views['/about']++;
    res.send(`<a href="/">Home</a>
    Views: ${views['/about']}`);
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});