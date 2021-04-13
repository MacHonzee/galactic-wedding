import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

function InfoCards() {
  return (
    <Row id={"info"}>
      <ListGroup>
        <ListGroup.Item variant={"primary"}>Harmonogram</ListGroup.Item>
        <ListGroup.Item variant={"primary"}>Informace o svatbě</ListGroup.Item>
        <ListGroup.Item>Covid-19 upozornění na termín</ListGroup.Item>
        <ListGroup.Item>Ubytování</ListGroup.Item>
        <ListGroup.Item>Občerstvení</ListGroup.Item>
        <ListGroup.Item>Téma galaxie</ListGroup.Item>
        <ListGroup.Item>Svatební dar</ListGroup.Item>
        <ListGroup.Item variant={"primary"}>Cesta a parkování</ListGroup.Item>
      </ListGroup>
    </Row>
  );
}

export default InfoCards;
