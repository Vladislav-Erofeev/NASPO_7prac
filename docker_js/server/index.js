const express = require('express')
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});
})

app.listen(8000, () => {
    console.log('server working and listenning on 8000')
})