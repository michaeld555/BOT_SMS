import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const connect = () => {
  
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

}

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

const subWord = (word) => {
  return word.charAt(0).toUpperCase() + word.substring(1);
}

const formataNumero = (numero) => {
  let numeroFormatado = numero.toFixed(2);
  numeroFormatado = numeroFormatado.replace('.', ',');
  return numeroFormatado;
}

const useState = initialValue => {

  let value = initialValue;

  const setState = newValue => {
    value = newValue;
  };

  return [value, setState];
};


export { bot, connect, subWord, formataNumero, useState };