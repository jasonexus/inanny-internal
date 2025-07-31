import React, { useState } from "react";
import supabase from "../helper/supabaseClient.ts"; // Adjust the import path as necessary
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Overrides default form submission and allows us to use custom logic
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
    }

    if (data) {
      setMessage("User account created successfully!");
      navigate("/dashboard")

    }

    setEmail("");
    setPassword("");
  }

    return (
      <div>
        <h1>Sign Up</h1>
        {message && <p>{message}</p>} 
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    );
  };

export default SignUp;
