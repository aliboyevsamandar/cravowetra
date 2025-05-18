import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        username,
        password,
      });
      localStorage.setItem("adminToken", res.data.token);
      onLogin();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login error!",
        text: "Incorrect username or password error!",
        confirmButtonColor: "#c59d5f",
      });
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
      }}
    >
      <div
        className="p-5 shadow-lg"
        style={{
          maxWidth: "420px",
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.95)",
          borderRadius: "20px",
          border: "3px solid #c59d5f",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Georgia', serif",
            color: "#c59d5f",
            fontWeight: "bold",
            fontSize: "28px",
            textShadow: "1px 1px 1px rgba(0,0,0,0.1)",
          }}
        >
          Admin Panel
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3 position-relative">
            <FaUser
              style={{
                position: "absolute",
                top: "50%",
                left: "12px",
                transform: "translateY(-50%)",
                color: "#c59d5f",
              }}
            />
            <input
              type="text"
              className="form-control ps-5"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                borderRadius: "12px",
                border: "2px solid #c59d5f",
                height: "45px",
              }}
            />
          </div>
          <div className="form-group mb-4 position-relative">
            <FaLock
              style={{
                position: "absolute",
                top: "50%",
                left: "12px",
                transform: "translateY(-50%)",
                color: "#c59d5f",
              }}
            />
            <input
              type="password"
              className="form-control ps-5"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                borderRadius: "12px",
                border: "2px solid #c59d5f",
                height: "45px",
              }}
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              background: "#c59d5f",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "30px",
              padding: "10px 0",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#a0763b")}
            onMouseOut={(e) => (e.target.style.background = "#c59d5f")}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
