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
    setTimeout(() => {
      setLoaded(true);
    }, 1200);
  }, [])

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
      <div className={`content-container ${loaded ? "loaded" : ""} ${isOpen ? "" : "closed"}`} ref={draggableRef} onMouseDown={onDragStart} onMouseMove={onDragging} onMouseUp={onDragEnd} onMouseLeave={onDragEnd}>
        <div className="header">
          <h1>Kaur Accounting</h1>
          <span className={`close ${buttonPushed ? "pushed" : ""}`} onMouseDown={() => { setButtonPushed(true); setTimeout(() => { setButtonPushed(false) }, 100); }} onClick={() => setTimeout(() => { setIsOpen(false) }, 40)}>X</span>
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
          <p>&#169;&#65039; 2023 Kaur Accounting</p>
        </div>
      </div>
    </div >
  );
}

export default Content;