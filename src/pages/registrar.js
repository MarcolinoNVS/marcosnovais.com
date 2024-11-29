import React, { useState } from "react";
import axios from "axios";

const Registrar = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("cliente");
  const [mensagem, setMensagem] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevenir o recarregamento da página

    // Validação da senha (pelo menos 6 caracteres)
    if (senha.length < 6) {
      setMensagemErro("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/registrar", {
        usuario,
        senha,
        role,
      });
    
      if (response.status === 201) {
        setMensagem("Usuário registrado com sucesso!");
        setMensagemErro("");
        setUsuario("");
        setSenha("");
        setRole("cliente");
    
        setTimeout(() => setMensagem(""), 3000);
      } else {
        throw new Error("Erro inesperado: " + response.status);
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      setMensagemErro(
        "Erro ao registrar usuário. Verifique os dados e tente novamente."
      );
      setMensagem("");
    }
  };

  return (
    <div className="poppins-thin">
      <h2>Registrar</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Usuário:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role: </label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="cliente">Cliente</option>
            <option value="admin">admin</option>
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p style={{ color: "green" }}>{mensagem}</p>}
      {mensagemErro && <p style={{ color: "white" }}>{mensagemErro}</p>}
    </div>
  );
};

export default Registrar;
