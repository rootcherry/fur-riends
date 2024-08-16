import express from 'express';
import bodyParser from 'body-parser';
import data from './data/data.json' assert { type: 'json' };

const app = express();
const port = 3000;

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
