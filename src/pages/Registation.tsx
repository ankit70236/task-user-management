import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch("http://localhost:8082/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name: fullname }),
    })
      .then(async res => {
        const data = await res.json();
        if (res.ok) {
          alert("Registration successful!");
          navigate("/login");
        } else {
          alert(data.message || "Registration failed!");
        }
      })
      .catch(() => alert("Network error"));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" value={fullname} onChange={e => setFullName(e.target.value)} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <button onClick={handleRegister} className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">Register</button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?
          <span onClick={() => navigate("/login")} className="text-blue-500 ml-1 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;