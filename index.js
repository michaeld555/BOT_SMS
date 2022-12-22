import { bot } from './src/utils/config.js';
import { startMessage, faqMessage, idMessage, instrMessage, configMessage, rechargeMessage, balanceMessage } from './src/functions/message.js';
import { faqCallback, rechargeCallback } from './src/functions/callback.js';
import express from 'express';
var app = express();
var saldo = 0.00;

// Mensagens Diretas
bot.on('message', (msg) => {

  if (msg.text.startsWith('/start')) {
    startMessage(bot, msg);
  } else if(msg.text.startsWith('/faq')) {
    faqMessage(bot, msg);
  } else if(msg.text.startsWith('/id')) {
    idMessage(bot, msg);
  } else if(msg.text.startsWith('/instrucoes')) {
    instrMessage(bot, msg);
  } else if(msg.text.startsWith('/config')) {
    configMessage(bot, msg);
  } else if(msg.text.startsWith('/recarregar')) {
    rechargeMessage(bot, msg.chat.id);
  } else if(msg.text.startsWith('/saldo')) {
    balanceMessage(bot, msg);
  }
    
});

// Mensagens CallBack
bot.on('callback_query', (callbackQuery) => {
    const action = callbackQuery.data;
    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id;
    
    if (action === 'faq') {

      faqCallback(bot, callbackQuery);

    } else if (action === 'recarregar') {

      rechargeMessage(bot, callbackQuery.message.chat.id);

    } else if (action === 'less5' || action === 'less10') {

      let less = (action === 'less5') ? 5 : 10;
      let total = less;
      rechargeCallback(bot, callbackQuery, total);

    } else if (action === 'more5' || action === 'more10') {
      
      let less = (action === 'more5') ? 50 : 100;
      let total = less;
      rechargeCallback(bot, callbackQuery, total);

    }
});

var porta = process.env.PORT || 8080;
app.listen(porta);