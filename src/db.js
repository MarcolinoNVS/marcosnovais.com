const mysql = require("mysql2/promise");

// Configuração do pool de conexões
const pool = mysql.createPool({
  host: "localhost",
  user: "****",
  password: "****", 
  database: "****",
  port: 3306, 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
