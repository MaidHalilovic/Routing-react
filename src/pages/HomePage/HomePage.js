import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>home page</h1>
      <Link to={"/about"}>Idi na Home page button</Link>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "activePage" : "inactivePage")}
      >
        Idi na HomePage
      </NavLink>
    </div>
  );
}

export default HomePage;
