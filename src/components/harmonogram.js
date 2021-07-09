import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function Harmonogram() {
  return (
    <Container className={"mb-4"}>
      <Row className={"justify-content-center"}>
        <span className="anchor" id="harmonogram" />
        <Col xl={6} md={9} xs={12}>
          <Card className={"shadow"}>
            <Card.Body>
              <Card.Title>Harmonogram</Card.Title>
              <Card.Text>
                Úpravy časového plánu podřízeny průměrným promilím hostů i
                svatebčanů.
              </Card.Text>
              <ul>
                <li>10:00 - Obřad</li>
                <li>10:30 - Přípitek</li>
                <li>10:50 - Společné focení</li>
                <li>12:00 - Obědový raut</li>
                <li>13:00 - Focení novomanželů</li>
                <li>
                  15:00 - Tanec novomanželů, házení kytice, sundávání podvazku
                </li>
                <li>18:00 - Večerní raut</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Harmonogram;
