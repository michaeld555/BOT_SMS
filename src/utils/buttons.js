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
            text: '💸 Transferir saldo',
            callback_data: 'transferir'
          }
        ]
      ]

};

const rechargeKeyboard = {

  inline_keyboard: [
      [
        {
          text: 'Digitar o valor da recarga',
          callback_data: 'enterValue'
        }
      ],
      [
        {
          text: '-5',
          callback_data: 'less5'
        },
        {
          text: '+5',
          callback_data: 'more5'
        }
      ],
      [
        {
          text: '-10',
          callback_data: 'less10'
        },
        {
          text: '+10',
          callback_data: 'more10'
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

export { startKeyboard, configKeyboard, rechargeKeyboard };