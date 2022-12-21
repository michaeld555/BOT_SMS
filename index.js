import { bot, media } from './src/utils/config.js';
import { startKeyboard } from './src/utils/buttons.js';


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageId = msg.message_id;
    const name = msg.from.first_name;

  
    // Envie a mensagem com os botões de seleção
      
    bot.sendPhoto(chatId, media, {
        caption: `✨ Olá, ${name} Seja bem-vindo (a)!\n\n 😉 Eu Sou Um Bot Feito Para Receber SMS's De Varios Serviços.\n\n 💰 | \*Seu Saldo:* R$: 3.35\n\n ↘️ Opções Abaixo:`,
        reply_markup: startKeyboard
        }).then((sentMessage) => {
        // Armazene o ID da mensagem enviada para usar mais tarde com o método editMessageText
        const messageId = sentMessage.message_id;
        });
  });
  
  bot.on('callback_query', (callbackQuery) => {
    const action = callbackQuery.data;
    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id;
  
    if (action === 'teste') {
      // Substitua a mensagem original pelo texto "Bom dia!"
      bot.editMessageText('<b>Bom</b> dia!', {
        chat_id: chatId,
        message_id: messageId
      });
    } else if (action === 'teste2') {
      // Substitua a mensagem original pelo texto "Boa noite!"
      bot.editMessageText('Boa noite!', {
        chat_id: chatId,
        message_id: messageId
      });
    }
  });

