import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Harmonogram() {
  return (
    <Row id={"harmonogram"} className={"justify-content-center mb-5"}>
      <Col xs={12} sm={9} md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Harmonogram</Card.Title>
            <Card.Text>
              Harmonogram je zatím neznámý a bude doplněn as ASAP as possible
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Harmonogram;
