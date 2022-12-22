import { connection } from "../utils/config.js";

const startBot = (msg) => {

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
        const insertQuery = `INSERT INTO users (chat_id, full_name, created_at, updated_at) VALUES (${msg.chat.id}, '${msg.from.first_name}', NOW(), NOW())`;
        connection.execute(insertQuery, (error, results) => {
            if (error) {
            console.log(error);
            } else {
            console.log(results);
            }
        });
        }
    }
    });

}

export { startBot };