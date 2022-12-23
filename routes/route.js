import express from 'express';
var app = express();
import bodyParser from 'body-parser';


app.listen(3000, () => {
    
    app.get('/webhooks', (req, res) => {

        res.send('Ja Node Teste');
        
    });

    app.post('/webhooks', (req, res) => {

        // configurando o body-parser
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        console.log(req);
        res.send('Teste POST');

    });

});