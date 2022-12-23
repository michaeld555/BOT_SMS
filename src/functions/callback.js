import { faqText, paymentText }from '../utils/text.js';
import { rechargeKeyboard, cancelPaymentKeyboard } from '../utils/buttons.js';
import { updateRecharge } from './query.js'

const faqCallback = (bot, callbackQuery) => {

    const options = { parse_mode: 'html' };
    bot.sendMessage(callbackQuery.message.chat.id, faqText, options);

}

const rechargeCallback = (bot, callbackQuery, valor) => {

        if(valor >= 10){

            updateRecharge(callbackQuery, valor);

            bot.editMessageText(`🔰 Escolha o valor para recarregar, depois selecione a <b>opção de pagamento.</b>\n\n 💰 Valor: <b>R$ ${valor}</b>`, {
            chat_id: callbackQuery.message.chat.id,
            message_id: callbackQuery.message.message_id,
            reply_markup: rechargeKeyboard,
            parse_mode: 'html'
            });

        } else {

            bot.answerCallbackQuery(callbackQuery.id, '⚠ Atenção | A recarga mínima é R$ 10,00');
            
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

export { faqCallback, rechargeCallback, paymentCallback };