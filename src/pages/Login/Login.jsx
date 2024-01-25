import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Auth/AuthContext";
import "./Login.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleLogin = () => {
    login(formData.username, formData.password);
    navigate("/");
  };

  return (
    <div className="login-container-container">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <label className="login-label">Username:</label>
        <input
          className="login-input"
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />

        <label className="login-label">Password:</label>
        <input
          className="login-input"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
