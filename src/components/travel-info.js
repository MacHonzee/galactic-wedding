import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import LazyMap from "./lazy-map";

function TravelInfo() {
  return (
    <Container>
      <Row className={"justify-content-center mb-4"}>
        <span className="anchor" id="travelInfo" />
        <Col xs={12} lg={6}>
          <Card className={"shadow"}>
            <Card.Body>
              <Card.Title>Cesta, parkování a místo</Card.Title>
              <Card.Text>
                Z Prahy je cesta do Liberce stále po dálnici cca na hodinu, a
                pak oudolíma a soutěskama do Libverdy ještě dalších 30 minut
                cca.
              </Card.Text>
              <Card.Text>
                Svezte se prosím co nejméně autama, šetřme naši planetu,
                chudíka. Dopravní obslužnost bez auta bude trochu náročnější,
                nicméně, auto má 4 místa (někdy i více).
              </Card.Text>
              <Card.Text>
                Důvodem je i omezenější parkování, které je možné buď na
                přilehlých cestách v okolí, nebo na placeném parkovišti cca 1km
                chůze z centra Lázní Libverda.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <LazyMap />
        </Col>
      </Row>
    </Container>
  );
}

export default TravelInfo;
