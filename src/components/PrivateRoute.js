import { useNavigate } from "react-router-dom"; // Importe o useNavigate

const PrivateRoute = ({ children, role }) => {
  const navigate = useNavigate(); // Agora useNavigate está disponível
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    navigate("/login");
    return null;
  }

  if (role && userRole !== role) {
    navigate("/dashboard"); // Redireciona para a página errada, se necessário
    return null;
  }

  return children;
};

export default PrivateRoute;
