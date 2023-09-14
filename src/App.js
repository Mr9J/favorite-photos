import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage-component";
import About from "./components/About-component";
import SignIn from "./components/SignIn-component";
import Collection from "./components/Collection-component";
import Page404 from "./components/Page404-component";
import ProtectedRoutes from "./config/protect";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="signIn" element={<SignIn />}></Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="collection" element={<Collection />}></Route>
            </Route>
            <Route path="*" element={<Page404 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
