import { startKeyboard, configKeyboard, rechargeKeyboard } from '../utils/buttons.js';
import { faqText, instrText }from '../utils/text.js';
import { startBot, createRecharge, myBalance } from './query.js';


const startMessage = (bot, msg) => {

    const media = 'https://michaelneves.tech/teste.png';
    startBot(msg);

    bot.sendPhoto( msg.chat.id, media, {
        caption: `• Bem-vindo ${ msg.from.first_name }\n\n • ID de cliente: <code>${ msg.chat.id }</code>\n • Para recarregar <b>envie</b> /recarga\n • Ou clique no botão recarregar\n\n • Canal: @teste_virtual\n • Nosso suporte: @teste_suporte\n`,
        reply_markup: startKeyboard,
        parse_mode: 'html'
        }).then((sentMessage) => {
        const messageId = sentMessage.message_id;
    });
};

const faqMessage = (bot, msg) => {

    const options = { parse_mode: 'html' };
    bot.sendMessage(msg.chat.id, faqText, options);

};

const idMessage = (bot, msg) => {

    const options = { parse_mode: 'html' };
    bot.sendMessage(msg.chat.id, `<b>Seu ID de cliente é:</b> <code>${msg.chat.id}</code>`, options);

}

const instrMessage = (bot, msg) => {

    const options = { parse_mode: 'html' };
    bot.sendMessage(msg.chat.id, instrText, options);

}

const configMessage = (bot, msg) => {

    const options = { reply_markup: configKeyboard };
    bot.sendMessage(msg.chat.id, '⚙️ Menu de Configurações:', options);

}

const rechargeMessage = (bot, chatId) => {

    const options = { parse_mode: 'html', reply_markup: rechargeKeyboard };
    bot.sendMessage(chatId, `🔰 Escolha o valor para recarregar, depois selecione a <b>opção de pagamento.</b>\n\n 💰 Valor: <b>R$ 10,00</b>`, options).then((Message) => {
        createRecharge(Message);
    });

}

const balanceMessage = (bot, msg) => {

    myBalance(msg).then(saldo => {
        
        const options = { parse_mode: 'html'};
        bot.sendMessage(msg.chat.id, `💰 Seu saldo atual: <b>R$ ${saldo}</b>`, options);

      }).catch(error => {
        console.log(error);
      });

}



export { startMessage, faqMessage, idMessage, instrMessage, configMessage, rechargeMessage, balanceMessage };