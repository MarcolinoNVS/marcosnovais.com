const pool = require("./db");

// Função para buscar um usuário no banco
const getUserByUsername = async (username) => {
  try {
    // Consultando o banco de dados para buscar o usuário
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE usuario = ?",
      [username]
    );

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
