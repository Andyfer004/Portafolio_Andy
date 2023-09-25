import { useState, useEffect} from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home"); 
  const [Scolled , seScrolled] = useState(false); 

useEffect(() => {
  const onScroll = () => {
    if(window.scrollY > 50){
      seScrolled(true);
    }else{
      seScrolled(false);
    }
  }

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll); 
}, [activeLink]);

  return(
  <NavBar    expand="lg" className={scrolled ? "scrolled ":""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={""} alt="Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" >
      <span className="navbar-toggler-icon"></span> 
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" className = {activeLink === "home" ? "active navbar-link": "navbar-link"} onClick={() => onUpdateActiveLink("home") } >Home</Nav.Link>
        <Nav.Link href="#skills"className = {activeLink === "skills" ? "active navbar-link": "navbar-link"} onClick={() => onUpdateActiveLink("Skills") } >Skills</Nav.Link>
         <Nav.Link href="#projects"className = {activeLink === "projects" ? "active navbar-link": "navbar-link"} onClick={() => onUpdateActiveLink("Projects") } >Projects</Nav.Link>
      </Nav>
      <span className="navbar-text">
        <div className="social-icon">
          <a href="1"> <img src={""} alt = ""/> </a>
          <a href="1"> <img src={""} alt = ""/> </a>
          <a href="1"> <img src={""} alt = ""/> </a>
          </div>
        <button className="vvd" onClick={()=> console.log("connect")}></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </NavBar>
  )
}