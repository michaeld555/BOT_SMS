import { faqText, paymentText }from '../utils/text.js';
import { rechargeKeyboard, cancelPaymentKeyboard } from '../utils/buttons.js';
import { updateRecharge, cancelPaymentQuery } from './query.js'

const faqCallback = (bot, callbackQuery) => {

    const options = { parse_mode: 'html' };
    bot.sendMessage(callbackQuery.message.chat.id, faqText, options);

}

const rechargeCallback = (bot, callbackQuery, valor) => {

        if(valor >= 5){

            updateRecharge(callbackQuery, valor);

            bot.editMessageText(`🔰 Escolha o valor para recarregar, depois selecione a <b>opção de pagamento.</b>\n\n 💰 Valor: <b>R$ ${valor}</b>`, {
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

    bot.editMessageText(`<b>Saldo de R$${payment.value} adicionado!</b>`, {
        chat_id: payment.chat_id,
        message_id: payment.message_id,
        parse_mode: 'html'
        });

}

export { faqCallback, rechargeCallback, paymentCallback, cancelPaymentCallback, updatePaymentCallback };