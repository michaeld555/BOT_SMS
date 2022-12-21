import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

// Substitua o TOKEN pelo seu próprio token de bot do Telegram
const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});
const media = 'https://michaelneves.tech/teste.png';

export { bot, media };