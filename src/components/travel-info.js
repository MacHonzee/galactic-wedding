import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import LazyMap from "./lazy-map";

function TravelInfo() {
  return (
    <Container>
      <Row className={"justify-content-center mb-4"}>
        <a className="anchor" id="travelInfo" />
        <Col xs={12} lg={6}>
          <Card className={"shadow"}>
            <Card.Body>
              <Card.Title>Cesta, parkování a místo</Card.Title>
              <Card.Text>TravelInfo bude doplněno</Card.Text>
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
