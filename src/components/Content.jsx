import { useEffect, useRef, useState } from "react";

import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Industries from "./Industries";



function Content() {

  const [page, setPage] = useState("About");
  const [loaded, setLoaded] = useState(false);
  const [buttonPushed, setButtonPushed] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  // Make content-container draggable.
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const draggableRef = useRef(null);

  const onDragStart = (e) => {
    setIsDragging(true);
    // Initial position
    setPosition({
      x: e.clientX - draggableRef.current.getBoundingClientRect().left,
      y: e.clientY - draggableRef.current.getBoundingClientRect().top,
    });
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  const onDragging = (e) => {
    if (!isDragging) return;

    const newX = e.clientX - position.x;
    const newY = e.clientY - position.y;

    draggableRef.current.style.left = `${newX}px`;
    draggableRef.current.style.top = `${newY}px`;
  };



  useEffect(() => {
    if (window.innerWidth > 500) {
      setRandomLocation();
    }
    setTimeout(() => {
      setShowLogo(false);
    }, 1300);
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, [])

  const [xOffset, setXOffset] = useState("auto");
  const [yOffset, setYOffset] = useState("auto");

  function setRandomLocation() {
    const randomX = Math.floor(Math.random() * (16 - 6 + 1)) + 6;
    const randomY = Math.floor(Math.random() * (24 - 6 + 1)) + 6;
    setXOffset(window.innerWidth / randomX);
    setYOffset(window.innerHeight / randomY);
    return [xOffset, yOffset];
  }

  function navClick(page) {
    setPage(page);
  }

  function renderPage() {
    switch (page) {
      case "About":
        return <About />;
      case "Services":
        return <Services />;
      case "Industries":
        return <Industries />;
      case "Contact":
        return <Contact />;;
      default:
        return <About />;
    }
  }

  return (
    <div className="container">
      <div className={`logo ${showLogo ? "" : "hidden"}`}>
        <img src="/assets/images/logo.png" alt="K Logo" onClick={() => setTimeout(() => { setIsOpen(true); setShowLogo(false); }, 100)} />
      </div>
      <div style={{ left: xOffset, top: yOffset }} className={`content-container ${loaded ? "loaded" : ""} ${isOpen ? "" : "closed"}`} ref={draggableRef} onMouseDown={onDragStart} onMouseMove={onDragging} onMouseUp={onDragEnd} onMouseLeave={onDragEnd}>
        <div className="header">
          <h1>Kaur Accounting</h1>
          <span className={`close ${buttonPushed ? "pushed" : ""}`} onMouseDown={() => { setButtonPushed(true); setTimeout(() => { setButtonPushed(false) }, 100); }} onClick={() => setTimeout(() => { setIsOpen(false); setShowLogo(true); }, 40)}>X</span>
        </div>
        <div className="menu">
          <ul>
            <li onClick={() => navClick("About")} className={(page === "About" ? "selected" : "")}>About</li>
            <li onClick={() => navClick("Services")} className={(page === "Services" ? "selected" : "")}>Services</li>
            <li onClick={() => navClick("Industries")} className={(page === "Industries" ? "selected" : "")}>Industries</li>
            <li onClick={() => navClick("Contact")} className={(page === "Contact" ? "selected" : "")}>Contact</li>
          </ul>
        </div>
        <div className="page-container">
          {renderPage(page)}
        </div>
        <div className="footer">
          <p>
            Copyright 2020 &bull; Kaur Accounting
          </p>
        </div>
      </div>
    </div >
  );
}

export default Content;