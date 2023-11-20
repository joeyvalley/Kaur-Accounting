import { useEffect, useState } from "react";

import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Industries from "./Industries";

// import { motion } from "framer-motion";

function Content() {

  const [page, setPage] = useState("about");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(page);
  }, [page])

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1200);
  }, [])

  function navClick(page) {
    setPage(page);
  }

  function renderPage() {
    switch (page) {
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "industries":
        return <Industries />;
      case "contact":
        return <Contact />;;
      default:
        return <About />;
    }
  }

  return (
    <div className="container">
      <div className={`content-container ${loaded ? "loaded" : ""}`}>
        <div className="header">
          <h1>Kaur Accounting</h1>
        </div>
        <div className="menu">
          <ul>
            <li onClick={() => navClick("about")}>About Us</li>
            <li onClick={() => navClick("services")}>Our Services</li>
            <li onClick={() => navClick("industries")}>Industries</li>
            <li onClick={() => navClick("contact")}>Contact</li>
          </ul>
        </div>
        <div className="content-border">
          <div className="content-border2">
            <div className="content">
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;