import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function TravelInfo() {
  return (
    <Row id={"travelInfo"} className={"justify-content-center mb-5"}>
      <Col xs={12} sm={9} md={6}>
        <Card>
          <Card.Body>
            <Card.Title>TravelInfo</Card.Title>
            <Card.Text>TravelInfo bude doplněno</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default TravelInfo;
