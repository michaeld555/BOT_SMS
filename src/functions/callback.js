import { faqText }from '../utils/text.js';
import { rechargeKeyboard } from '../utils/buttons.js';

const faqCallback = (bot, callbackQuery) => {

    const options = { parse_mode: 'html' };
    bot.sendMessage(callbackQuery.message.chat.id, faqText, options);

}

const rechargeCallback = (bot, callbackQuery, valor) => {

        if(valor >= 10){

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

export { faqCallback, rechargeCallback };