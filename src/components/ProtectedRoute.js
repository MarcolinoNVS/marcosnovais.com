import React from "react";
import { Route, Navigate } from "react-router-dom";

// Componente de proteção de rota
const ProtectedRoute = ({ element, role, ...rest }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  // Verificar se o usuário está logado e se ele tem o papel adequado
  if (!token) {
    // Redirecionar para a página de login se o usuário não estiver autenticado
    return <Navigate to="/login" />;
  }

  if (userRole !== role) {
    // Redirecionar para a página inicial (ou qualquer outra rota) se o papel não for compatível
    return <Navigate to="/" />;
  }

  // Se passar na verificação, renderiza o componente
  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
