import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function ColCard(props) {
  return (
    <Col xl={3} md={4} sm={6} xs={12}>
      <Card>
        <Card.Header>{props.header}</Card.Header>
        <Card.Body>
          <Card.Text>{props.children}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

function InfoCards() {
  return (
    <div id={"info"}>
      <Row className={"justify-content-center mb-5"}>
        <ColCard header={"Covid-19 upozornění na termín"}>
          Covid-19 upozornění na termín
        </ColCard>
        <ColCard header={"Ubytování"}>Ubytování</ColCard>
        <ColCard header={"Občerstvení"}>Občerstvení</ColCard>
      </Row>

      <Row className={"justify-content-center mb-5"}>
        <ColCard header={"Téma galaxie"}>Téma galaxie</ColCard>
        <ColCard header={"Svatební dar"}>Svatební dar</ColCard>
      </Row>

      {/*<ListGroup>*/}
      {/*  <ListGroup.Item variant={"primary"}>Harmonogram</ListGroup.Item>*/}
      {/*  <ListGroup.Item variant={"primary"}>Informace o svatbě</ListGroup.Item>*/}
      {/*  <ListGroup.Item>Covid-19 upozornění na termín</ListGroup.Item>*/}
      {/*  <ListGroup.Item>Ubytování</ListGroup.Item>*/}
      {/*  <ListGroup.Item>Občerstvení</ListGroup.Item>*/}
      {/*  <ListGroup.Item>Téma galaxie</ListGroup.Item>*/}
      {/*  <ListGroup.Item>Svatební dar</ListGroup.Item>*/}
      {/*  <ListGroup.Item variant={"primary"}>Cesta a parkování</ListGroup.Item>*/}
      {/*</ListGroup>*/}
    </div>
  );
}

export default InfoCards;
