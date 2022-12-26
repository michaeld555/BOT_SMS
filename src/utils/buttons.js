import { getAllServices } from '../functions/query.js';
import { formataNumero } from '../utils/config.js';

const startKeyboard = {

    inline_keyboard: [
        [
          {
            text: '• Gerar Número',
            callback_data: 'servicos'
          },
          {
            text: '• Nosso FAQ',
            callback_data: 'faq'
          }
        ],
        [
          {
            text: '• Recarregar',
            callback_data: 'recarregar'
          }
        ]
      ]

};

const configKeyboard = {

    inline_keyboard: [
        [
          {
            text: '📞 Selecionar operadora',
            callback_data: 'operadora'
          },
        ],
        [
          {
            text: '💸 Afiliados',
            callback_data: 'afiliados'
          }
        ]
      ]

};

const rechargeKeyboard = {

  inline_keyboard: [
      [
        {
          text: '+ R$1',
          callback_data: 'more1'
        },
        {
          text: '- R$1',
          callback_data: 'less1'
        }
      ],
      [
        {
          text: '+ R$5',
          callback_data: 'more5'
        },
        {
          text: '- R$5',
          callback_data: 'less5'
        }
      ],
      [
        {
          text: '+ R$10',
          callback_data: 'more10'
        },
        {
          text: '- R$10',
          callback_data: 'less10'
        }
      ],
      [
        {
          text: '• Pix',
          callback_data: 'payPix'
        }
      ],
    ]

};

const cancelPaymentKeyboard = {

  inline_keyboard: [
      [
        {
          text: '❌ Cancelar',
          callback_data: 'cancelPayment'
        }
      ]
    ]

};

const operatorsNumber = {

  inline_keyboard: [
      [
        {
          text: 'Áleatoria',
          callback_data: 'aleatoria'
        }
      ],
      [
        {
          text: 'Claro',
          callback_data: 'claro'
        }
      ],
      [
        {
          text: 'Vivo',
          callback_data: 'vivo'
        }
      ],
      [
        {
          text: 'Tim',
          callback_data: 'tim'
        }
      ],
      [
        {
          text: 'Oi',
          callback_data: 'oi'
        }
      ],
    ]

};

const servicesKeyboard = () => {

  return new Promise((resolve, reject) => {

    getAllServices().then(result => {

      let arrayButton = [];

        for (let i = 0; i < result.length; i += 2) {
          arrayButton.push([
            {
              text: `${result[i].service_name} | R$ ${formataNumero(result[i].service_price)}`,
              callback_data: `${result[i].service_callback}`
            },
            {
              text: `${result[i+1].service_name} | R$ ${formataNumero(result[i+1].service_price)}`,
              callback_data: `${result[i+1].service_callback}`
            }
          ])
        }
    
      resolve({
        inline_keyboard: arrayButton
      })

    }).catch(error => {
      reject(error);
    })

  });

};

const getServiceKeyboard = (service) => {

  return {

    inline_keyboard: [
        [
          {
            text: 'Receber SMS',
            callback_data: `${service.callback_service}`
          }
        ],
        [
          {
            text: '⬅',
            callback_data: 'backServices'
          }
        ]
      ]
  
  }

}


export { startKeyboard, configKeyboard, rechargeKeyboard, cancelPaymentKeyboard, operatorsNumber, servicesKeyboard, getServiceKeyboard };