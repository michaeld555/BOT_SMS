const startKeyboard = {

    inline_keyboard: [
        [
          {
            text: '📲 Serviços',
            callback_data: 'servicos'
          }
        ],
        [
          {
            text: '👤 Meu Perfil',
            callback_data: 'perfil'
          },
          {
            text: '💵 Recarregar',
            callback_data: 'recarregar'
          }
        ],
        [
          {
            text: 'ℹ Sobre',
            callback_data: 'sobre'
          },
          {
            text: '🔧 Suporte',
            callback_data: 'suporte'
          }
        ],
        [
          {
            text: '🎁 Ganhe Saldo',
            callback_data: 'ganhe'
          }
        ],
        [
          {
            text: '✉ Notícias ✉',
            url: 't.me/BotFather'
          },
          {
            text: '🔹 Canal',
            url: 't.me/BotFather'
          }
        ]
      ]

};

export { startKeyboard };