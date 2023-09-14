import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer-component";

const Layout = () => {
  return (
    <div className="Layout">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signIn">Sign in</Link>
          </li>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
        </ul>
      </nav>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
