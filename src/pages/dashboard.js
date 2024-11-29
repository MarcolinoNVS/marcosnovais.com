import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');

      if (!token) {
        console.log("Token não encontrado");
        navigate("/login");
        return;
      }

      // Verifica se o papel é admin
      if (role !== "admin") {
        console.log("Acesso negado, usuário não tem permissão");
        navigate("/cliente"); // Redireciona para página do cliente
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/admin", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
      } catch (err) {
        console.log("Erro ao acessar o painel do admin:", err);
        setError("Você não tem permissão para acessar esta página.");
        navigate("/login");
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

    </div>
  );
};


export default Dashboard;
