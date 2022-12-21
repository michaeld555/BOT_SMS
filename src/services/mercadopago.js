import mercadopago from 'mercadopago';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();


async function teste(){
    mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN);

    var response = await mercadopago.payment_methods.listAll();
    var payment_methods = response.body;

    console.log(payment_methods)
}

async function teste2(){

mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN);

var payment_data = {
    transaction_amount: 10,
    description: 'Título do produto',
    payment_method_id: 'pix',
    payer: {
      email: 'test@test.com',
      first_name: 'Test',
      last_name: 'User',
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
  
  mercadopago.payment.create(payment_data).then(function (data) {
    console.log(data.response.point_of_interaction.transaction_data)
    generateQR(data.response.point_of_interaction.transaction_data.qr_code_base64);
  }).catch(function (error) {
    
  });

}

function generateQR(image){

    // convertendo a string base64 em um buffer
    const imageBuffer = Buffer.from(image, 'base64');

    // escrevendo o buffer em um arquivo de imagem
    fs.writeFileSync('image.jpg', imageBuffer);

}

teste()