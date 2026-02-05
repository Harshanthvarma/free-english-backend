import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>Free English Learning Platform</h1>
      <p>Learn English for free — anytime, anywhere.</p>
      
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/login">
          <button style={{ padding: "10px 20px", fontSize: "16px" }}>Login</button>
        </Link>
        <Link to="/register">
          <button style={{ padding: "10px 20px", fontSize: "16px" }}>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
