import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.log("Token não encontrado");
          navigate("/login");
          return;
        }

        console.log("Token enviado:", token);

        // Verifica o papel do usuário
        const role = localStorage.getItem("role");

        // Faz a requisição para a URL correta dependendo do papel
        const apiUrl =
          role === "admin"
            ? "https://marcosnovais.com//admin"
            : "https://marcosnovais.com//cliente";

        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Resposta da API:", response.data);

        setUserData(response.data);
      } catch (err) {
        console.log("Erro ao fazer a requisição:", err);

        setError("Você não tem permissão para acessar esta página.");

        // Verificando se o erro é relacionado ao token
        if (err.response?.status === 401 || err.response?.status === 403) {
          console.log("Token inválido ou expirado");
          // Redireciona para a página de login
          navigate("/login");
        }
      }
    };

    fetchData();
  }, [navigate]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="poppins-thin">
      <h2>Bem-vindo ao Dashboard</h2>
      <p>
        {userData.role === "admin" ? "Painel de Admin" : "Painel de Cliente"}
      </p>
      <p>Dados do usuário: {JSON.stringify(userData)}</p>
    </div>
  );
};

export default Dashboard;
