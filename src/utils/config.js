import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

export { bot, connection };