import mercadopago from 'mercadopago';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const paymentMP = async (valor) => {

mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN);

var payment_data = {
    transaction_amount: valor,
    description: 'Saldo SMS - BOT',
    payment_method_id: 'pix',
    payer: {
      email: 'saldo@bot.com',
      first_name: 'Usuario',
      last_name: 'Bot',
      identification: {
          type: 'CPF',
          number: '19119119100'
      },
      address:  {
          zip_code: '06233200',
          street_name: 'Av. das Nações Unidas',
          street_number: '3003',
          neighborhood: 'Bonfim',
          city: 'Osasco',
          federal_unit: 'SP'
      }
    }
  };
  
  return new Promise((resolve, reject) => {

  mercadopago.payment.create(payment_data).then(function (data) {
    resolve(data);
  }).catch(function (error) {
    reject(error);
  });

  });

}

const cancelPayment = (paymentId) => {

  mercadopago.payment.cancel(paymentId).then(payment => {
    console.log(`Pagamento cancelado com sucesso: ${payment}`);
  }).catch(error => {
    console.error(`Erro ao cancelar o pagamento: ${error}`);
  });

}

function generateQR(image){

    const imageBuffer = Buffer.from(image, 'base64');
    fs.writeFileSync('image.jpg', imageBuffer);
    /* generateQR(data.response.point_of_interaction.transaction_data.qr_code_base64); */

}

export { paymentMP, cancelPayment };