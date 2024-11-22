const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost", // Geralmente "localhost" ou o host do seu banco de dados
  user: "u817542199_mysql", // Nome de usuário MySQL
  password: "120401233Lol", // Senha MySQL
  database: "u817542199_bd_novais", // Nome do banco de dados
  port: 3306, // Porta padrão do MySQL é 3306
});

module.exports = pool.promise();
