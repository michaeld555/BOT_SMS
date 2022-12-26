import { faqText, paymentText, serviceText } from '../utils/text.js';
import { rechargeKeyboard, cancelPaymentKeyboard, getServiceKeyboard, servicesKeyboard } from '../utils/buttons.js';
import { updateRecharge, cancelPaymentQuery, updateMyOperator, myUserQuery } from './query.js';
import { subWord, formataNumero } from '../utils/config.js';

const faqCallback = (bot, callbackQuery) => {

    const options = { parse_mode: 'html' };
    bot.sendMessage(callbackQuery.message.chat.id, faqText, options);

}

const rechargeCallback = (bot, callbackQuery, valor) => {

        if(valor >= 5){

            updateRecharge(callbackQuery, valor);

            bot.editMessageText(`🔰 Escolha o valor para recarregar, depois selecione a <b>opção de pagamento.</b>\n\n 💰 Valor: <b>R$ ${formataNumero(valor)}</b>`, {
            chat_id: callbackQuery.message.chat.id,
            message_id: callbackQuery.message.message_id,
            reply_markup: rechargeKeyboard,
            parse_mode: 'html'
            });

        } else {

            bot.answerCallbackQuery(callbackQuery.id, '⚠ Atenção | A recarga mínima é R$ 5,00');
            
        }
        

}

const paymentCallback = (bot, callbackQuery, code) => {

    const text = paymentText(code);

    bot.editMessageText(text, {
    chat_id: callbackQuery.message.chat.id,
    message_id: callbackQuery.message.message_id,
    reply_markup: cancelPaymentKeyboard,
    parse_mode: 'html'
    });
        

}

const cancelPaymentCallback = (bot, callbackQuery) => {

    cancelPaymentQuery(callbackQuery);

    bot.deleteMessage(callbackQuery.message.chat.id, callbackQuery.message.message_id).then(() => {
        console.log('Mensagem deletada com sucesso');
      }).catch(error => {
        console.error(`Erro ao deletar a mensagem: ${error}`);
      });

}

const updatePaymentCallback = (bot, payment) => {
    
    bot.editMessageText(`<b>O valor de R$ ${formataNumero(payment.value)} foi adicionado ao seu saldo!</b>`, {
        chat_id: payment.chat_id,
        message_id: payment.message_id,
        parse_mode: 'html'
        });

}

const updateOperatorCallback = (bot, data, callbackQuery) => {

    const operator = (data === 'aleatoria') ? null : data;

    updateMyOperator(callbackQuery, operator).then(result => {

        bot.editMessageText(`<b>Operadora atual:</b> ${subWord(data)}\n\n Se não houver números para o serviço na operadora <code>${data.toUpperCase()}</code> selecione outra /config ou deixe aleatória.`, {
            chat_id: callbackQuery.message.chat.id,
            message_id: callbackQuery.message.message_id,
            parse_mode: 'html'
            });

      }).catch(error => {
        console.log(error);
      });

}

const getNumberCallback = (bot, callbackQuery, service) => {
    
    myUserQuery(callbackQuery.message.chat.id).then(user => {
        
        bot.editMessageText( serviceText(service, user), {
            chat_id: callbackQuery.message.chat.id,
            message_id: callbackQuery.message.message_id,
            reply_markup: getServiceKeyboard(service),
            parse_mode: 'html'
            });

    });

}

const backServiceMenu = (bot, callbackQuery) => {

    servicesKeyboard().then(result => {

    bot.editMessageText( `🔰 Escolha abaixo o serviço desejado.`, {
        chat_id: callbackQuery.message.chat.id,
        message_id: callbackQuery.message.message_id,
        reply_markup: result,
        parse_mode: 'html'
        });

    })

}

export { faqCallback, rechargeCallback, paymentCallback, cancelPaymentCallback, updatePaymentCallback, updateOperatorCallback, getNumberCallback, backServiceMenu };
