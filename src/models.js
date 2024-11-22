const mysql = require("mysql2");

// Criando o pool de conexões com o banco de dados
const pool = mysql.createPool({
  host: "localhost", // Geralmente "localhost" ou o host do seu banco de dados
  user: "u817542199_mysql", // Nome de usuário MySQL
  password: "120401233Lol", // Senha MySQL
  database: "u817542199_bd_novais", // Nome do banco de dados
  port: 3306, // Porta padrão do MySQL é 3306
});

// Função para buscar um usuário no banco
const getUserByUsername = async (username) => {
  try {
    // Consultando o banco de dados para buscar o usuário
    const [rows] = await pool
      .promise()
      .query("SELECT * FROM users WHERE usuario = ?", [username]);

    if (rows.length === 0) {
      // Caso não encontre o usuário, retorna null ou um erro
      console.log(`Usuário ${username} não encontrado.`);
      return null;
    }

    return rows[0]; // Retorna o primeiro usuário encontrado
  } catch (err) {
    console.error("Erro ao buscar usuário:", err);
    throw err; // Lança o erro para ser tratado em outro lugar
  }
};

// Exporta a função para ser utilizada em outros arquivos
module.exports = {
  getUserByUsername,
};
