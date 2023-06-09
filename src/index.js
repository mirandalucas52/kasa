import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./layout/Header/index";
import Home from "./pages/Home/index";
import About from "./pages/About";
import Error from "./pages/Error";
import Footer from "./layout/Footer";
import Logement from "./pages/Logement";
import Logements from "./logements.json";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <div className="bodyWidth">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a_propos" element={<About />} />
                    <Route path="*" element={<Error />} />
                    <Route
                        path="/logement/:id"
                        element={<Logement datas={Logements} />}
                    />
                </Routes>
            </div>
            <Footer />
        </Router>
    </React.StrictMode>
);
