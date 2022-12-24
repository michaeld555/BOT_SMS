import express from 'express';
var app = express();
import bodyParser from 'body-parser';


const webhook = () => {

    app.listen(8000, () => {
    
        app.post('/webhooks', (req, res) => {
    
            // configurando o body-parser
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use(bodyParser.json());

            console.log(req);

            res.status(200).json({
                success: true
            });
    
        });
    
    });

}

export { webhook };