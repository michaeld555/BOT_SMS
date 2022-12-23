import { bot } from './src/utils/config.js';
import { startMessage, faqMessage, idMessage, instrMessage, configMessage, rechargeMessage, balanceMessage } from './src/functions/message.js';
import { faqCallback, rechargeCallback, paymentCallback } from './src/functions/callback.js';
import { rechargeValue, createPayment } from './src/functions/query.js';
import { paymentMP } from './src/services/mercadopago.js';
import express from 'express';
var app = express();

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

      rechargeValue(callbackQuery).then(value => {

      let less = (action === 'less5') ? 5 : 10;
      let total = value - less;
      rechargeCallback(bot, callbackQuery, total);    /// Modularizar depois

      }).catch(error => {
        console.log(error);
      });

    } else if (action === 'more5' || action === 'more10') {
      
      rechargeValue(callbackQuery).then(value => {

        let less = (action === 'more5') ? 5 : 10;
        let total = value + less;
        rechargeCallback(bot, callbackQuery, total); /// Modularizar depois
  
        }).catch(error => {
          console.log(error);
        });

    } else if (action === 'payPix') {
      
      rechargeValue(callbackQuery).then(value => {

        if(value >= 10){

          paymentMP(value).then(data => {

          createPayment(callbackQuery, data.response.id, value);
          paymentCallback(bot, callbackQuery, data.response.point_of_interaction.transaction_data.qr_code); /// Modularizar depois
    
          }).catch(error => {
            console.log(error);
          });
        } else {
          bot.answerCallbackQuery(callbackQuery.id, '⚠ Atenção | A recarga mínima é R$ 10,00');
        }
  
        }).catch(error => {
          console.log(error);
        });

    }
});

var porta = process.env.PORT || 8080;
app.listen(porta);