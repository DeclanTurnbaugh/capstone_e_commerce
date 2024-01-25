import { useState } from "react";
import { useAuth } from "../../components/Auth/AuthContext";

const Register = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleRegister = () => {
    register(formData.username, formData.password);
  };

  return (
    <div>
      <h2>Register</h2>
      <label>Username:</label>
      <input
        type="text"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />

      <label>Password:</label>
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
