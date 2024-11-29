import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cliente = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      // Se não houver token ou se o papel não for cliente, redireciona para login
      if (!token || role !== "cliente") {
        setError("Você não tem permissão para acessar esta página.");
        navigate("/login");
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuthentication();
  }, [navigate]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!isAuthenticated) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="poppins-thin">
      <h1>Bem-vindo à Página do Cliente</h1>
      <p>Esta página é exclusiva para clientes autenticados.</p>
    </div>
  );
};

export default Cliente;
