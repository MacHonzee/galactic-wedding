import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Top() {
  return (
    <Navbar
      sticky={"top"}
      variant={"dark"}
      bg={"dark"}
      expand={"md"}
      collapseOnSelect
    >
      <Navbar.Brand href="#home">Galaktická svatba</Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Úvod</Nav.Link>
          <Nav.Link href="#harmonogram">Harmonogram</Nav.Link>
          <Nav.Link href="#info">Informace o svatbě</Nav.Link>
          <Nav.Link href="#travelInfo">Cesta a parkování</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Top;
