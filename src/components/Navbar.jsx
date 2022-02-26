import { Navbar, Container, Brand, Link, Nav } from "react-bootstrap";

export default function (props) {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/">Sair</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
