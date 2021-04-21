import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import LazyMap from "./lazy-map";

function TravelInfo() {
  return (
    <Row className={"justify-content-center mb-5"}>
      <a className="anchor" id="travelInfo" />
      <Col xs={12} md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Cesta, parkování a místo</Card.Title>
            <Card.Text>TravelInfo bude doplněno</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={6}>
        <LazyMap />
      </Col>
    </Row>
  );
}

export default TravelInfo;
