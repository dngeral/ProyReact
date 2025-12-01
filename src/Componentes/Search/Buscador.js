import React, { useState } from "react";
import "./Buscador.css";
import { useNavigate } from "react-router-dom";

export default function Buscador({ placeholder = "Buscar", to = "/galeria" }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(to, { state: { q } });
  };

  return (
    <form className="searchbar" onSubmit={onSubmit}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit" className="btn mint">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
    
  );
}
