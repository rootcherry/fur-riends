import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);   
});
