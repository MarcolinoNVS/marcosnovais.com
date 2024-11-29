const mysql = require("mysql2/promise");

// Configuração do pool de conexões
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "****", 
  database: "bd_novais",
  port: 3306, 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
