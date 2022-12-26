import { connect } from "../utils/config.js";
import { cancelPayment } from '../services/mercadopago.js';
import { updatePaymentCallback } from '../functions/callback.js';

const startBot = (msg) => {

    const connection = connect();
    const selectQuery = `SELECT * FROM users WHERE chat_id = ${msg.chat.id} LIMIT 1`;

    connection.query(selectQuery, (error, results) => {
    if (error) {
        console.log(error);
    } else {
        // Verifica se houve algum resultado
        if (results.length > 0) {
        // Se houver, salva o resultado em uma constante
        const result = results[0];
        console.log(result);

        } else {
        // Se não houver, faz o INSERT
        const connection = connect();
        const insertQuery = `INSERT INTO users (chat_id, full_name, created_at, updated_at) VALUES (${msg.chat.id}, '${msg.from.first_name}', NOW(), NOW())`;
        connection.execute(insertQuery, (error, results) => {
            if (error) {
            console.log(error);
            } else {
            console.log(results);
            }
        });
        
        connection.end();

        }
    }
    });

    connection.end();

}

const createRecharge = (msg) => {

    const connection = connect();
    const insertQuery = `INSERT INTO recharge_value (chat_id, message_id, value, created_at, updated_at) VALUES (${msg.chat.id}, '${msg.message_id}', 5.00, NOW(), NOW())`;

    connection.execute(insertQuery, (error, results) => {
        if (error) {
        console.log(error);
        } else {
        console.log(results);
        }
    });

    connection.end();

}

const updateRecharge = (callbackQuery, value) => {

    const connection = connect();
    const updateQuery = `UPDATE recharge_value SET value = ${value}, updated_at = NOW() WHERE chat_id = ${callbackQuery.message.chat.id} AND message_id = '${callbackQuery.message.message_id}'`;

    connection.execute(updateQuery, (error, results) => {
        if (error) {
        console.log(error);
        } else {
        console.log(results);
        }
    });

    connection.end();

}

const rechargeValue = (callbackQuery) => {

    const connection = connect();
    const selectQuery = `SELECT * FROM recharge_value WHERE chat_id = ${callbackQuery.message.chat.id} AND message_id = ${callbackQuery.message.message_id} LIMIT 1`;

    return new Promise((resolve, reject) => {
        connection.query(selectQuery, (error, results) => {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            resolve(results[0].value);
          }
        });
    
        connection.end();
      });

}

const myBalance = (msg) => {

    const connection = connect();
    const selectQuery = `SELECT * FROM users WHERE chat_id = ${msg.chat.id} LIMIT 1`;

    return new Promise((resolve, reject) => {
        connection.query(selectQuery, (error, results) => {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            resolve(results[0].balance);
          }
        });
    
        connection.end();
      });

}

const myTotalBalance = (id) => {

    const connection = connect();
    const selectQuery = `SELECT * FROM users WHERE chat_id = ${id} LIMIT 1`;

    return new Promise((resolve, reject) => {
        connection.query(selectQuery, (error, results) => {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            resolve(results[0].balance);
          }
        });
    
        connection.end();
      });

}

const myUserQuery = (id) => {

    const connection = connect();
    const selectQuery = `SELECT * FROM users WHERE chat_id = ${id} LIMIT 1`;

    return new Promise((resolve, reject) => {
        connection.query(selectQuery, (error, results) => {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            resolve(results[0]);
          }
        });
    
        connection.end();
      });

}

const createPayment = (callbackQuery, payment, value) => {

    const connection = connect();
    const insertQuery = `INSERT INTO payments (id_payment, chat_id, message_id, value, created_at) VALUES (${payment}, ${callbackQuery.message.chat.id}, '${callbackQuery.message.message_id}', ${value}, NOW())`;

    connection.execute(insertQuery, (error, results) => {
        if (error) {
        console.log(error);
        } else {
        console.log(results);
        }
    });

    connection.end();

}

const cancelPaymentQuery = (callbackQuery) => {

  const connection = connect();
  const selectQuery = `SELECT * FROM payments WHERE chat_id = ${callbackQuery.message.chat.id} AND message_id = ${callbackQuery.message.message_id} LIMIT 1`;

  connection.query(selectQuery, (error, results) => {
  if (error) {
      console.log(error);
  } else {
    cancelPayment(results[0].id_payment)
  }
  });

  connection.end();

}

const searchPaymentQuery = (bot, idPayment) => {

  const connection = connect();
  const selectQuery = `SELECT * FROM payments WHERE id_payment = ${idPayment} LIMIT 1`;

  connection.query(selectQuery, (error, results) => {
  if (error) {
      console.log(error);
  } else {
    updateMyBalance(bot, results[0]);
  }
  });

  connection.end();

}

const updateMyBalance = (bot, resultado) => {

  myTotalBalance(resultado.chat_id).then(saldo => {
     
    const totalBalance = saldo + resultado.value;
    const connection = connect();
    const updateQuery = `UPDATE users SET balance = ${totalBalance}, updated_at = NOW() WHERE chat_id = ${resultado.chat_id}`;

    connection.execute(updateQuery, (error, results) => {
        if (error) {
        console.log(error);
        } else {
          console.log(resultado);
          updatePaymentCallback(bot, resultado);
        }
    });

    connection.end();

  }).catch(error => {
    console.log(error);
  });

}

const myOperator = (id) => {

  const connection = connect();
  const selectQuery = `SELECT * FROM users WHERE chat_id = ${id} LIMIT 1`;

  return new Promise((resolve, reject) => {
      connection.query(selectQuery, (error, results) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {

          const operator = (results[0].operator === null) ? 'Áleatoria' : results[0].operator;
          resolve(operator);

        }
      });
  
      connection.end();
    });

}

const updateMyOperator = (callbackQuery, data) => {
     
    const connection = connect();
    const updateQuery = `UPDATE users SET operator = '${data}', updated_at = NOW() WHERE chat_id = ${callbackQuery.message.chat.id}`;

    return new Promise((resolve, reject) => {
    connection.execute(updateQuery, (error, results) => {
        if (error) {
        reject(error);
        } else {
          console.log(results);
          resolve(results);
        }
    });

    connection.end();
  });

}

const getAllServices = () => {
     
    const connection = connect();
    const getQuery = `SELECT * FROM services`;

    return new Promise((resolve, reject) => {
    connection.execute(getQuery, (error, results) => {
        if (error) {
        reject(error);
        } else {
          console.log(results);
          resolve(results);
        }
    });

    connection.end();
  });

}

export { startBot, createRecharge, myBalance, rechargeValue, updateRecharge, createPayment, cancelPaymentQuery, searchPaymentQuery, myOperator, updateMyOperator, getAllServices, myUserQuery };