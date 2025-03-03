import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

// Lê o arquivo JSON de forma síncrona
const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));

const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // console.log(data);
    res.render('index', { data });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
