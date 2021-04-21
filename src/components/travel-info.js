import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function TravelInfo() {
  return (
    <Row id={"travelInfo"} className={"justify-content-center mb-5"}>
      <Col xs={12} md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Cesta, parkování a místo</Card.Title>
            <Card.Text>TravelInfo bude doplněno</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={6}>
        <div className={"embed-responsive embed-responsive-4by3"}>
          <iframe
            title={"mapy-cz"}
            className={"embed-responsive-item"}
            style={{ border: "none" }}
            src="https://frame.mapy.cz/s/gurelelaha"
            frameBorder="0"
          />
        </div>
      </Col>
    </Row>
  );
}

export default TravelInfo;
