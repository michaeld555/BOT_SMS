import bodyParser from 'body-parser';
import { updatePayment } from '../src/services/mercadopago.js';

const webhook = (app, express, bot) => {

        // configurando o body-parser
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(express.json());
    
        app.post('/webhooks', (req, res) => {
    
            console.log(req.body);

            if(req.body.action == 'payment.updated'){

                updatePayment(bot, req.body.data.id)

            }

            res.status(200).json({
                success: true
            });
    
        });

}

export { webhook };