// testConnection.js
const pool = require("./db"); // Importe a configuração de conexão

// Função para testar a conexão
const testConnection = async () => {
  try {
    // Conectar-se ao banco de dados e fazer uma consulta
    const client = await pool.connect();
    console.log("Conectado ao PostgreSQL com sucesso!");

    // Exemplo de consulta
    const result = await client.query("SELECT NOW()"); // Consulta para pegar o tempo atual do banco
    console.log("Resultado da consulta:", result.rows);

    client.release(); // Libera a conexão depois de usada
  } catch (err) {
    console.error("Erro de conexão:", err);
  }
};

// Executar o teste
testConnection();
