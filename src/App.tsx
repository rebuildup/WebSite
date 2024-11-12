import React, { useState } from "react";
import About from "./001_About";
import Work from "./002_Work";
import Commission from "./003_Commission";
import Contact from "./004_Contact";
import Link from "./005_Link";
import Home from "./006_Home";
import Icon from "./assets/001_image/icon.png";
import "./style.css";

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState("Home");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Work":
                return <Work />;
            case "Commission":
                return <Commission />;
            case "Contact":
                return <Contact />;
            case "Link":
                return <Link />;
            case "Home":
                return <Home />;
            default:
                return <About />;
        }
    };

    return (
        <div className="app">
            <div className="header">
                <div className="header-title">
                    <img src={Icon} alt="icon" />
                    <h1 onClick={() => setCurrentPage("Home")}>Yusuke-kim Website</h1>
                </div>
                <div className="header-manu">
                    <button onClick={() => setCurrentPage("About")}>- About</button>
                    <button onClick={() => setCurrentPage("Work")}>- Work</button>
                    <button onClick={() => setCurrentPage("Commission")}>- Commission</button>
                    <button onClick={() => setCurrentPage("Contact")}>- Contact</button>
                    <button onClick={() => setCurrentPage("Link")}>- Link</button>
                    <div />
                </div>
            </div>
            <div className="content">{renderPage()}</div>
        </div>
    );
};

export default App;
