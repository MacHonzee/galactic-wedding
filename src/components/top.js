import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Top() {
    return (
        <Navbar sticky={"top"} variant={"dark"} bg={"dark"} expand={"md"} collapseOnSelect>
            <Navbar.Brand href="#home">
                Galaktická svatba
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="#link">Úvod</Nav.Link>
                    <Nav.Link href="#link">Covid-19 upozornění</Nav.Link>
                    <Nav.Link href="#link">Informace o svatbě</Nav.Link>
                    <Nav.Link href="#link">Cesta a parkování</Nav.Link>
                    <Nav.Link href="#link">Kontakt</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Top;
