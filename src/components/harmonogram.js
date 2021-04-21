import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function Harmonogram() {
  return (
    <Container>
      <Row className={"justify-content-center mb-4"}>
        <a className="anchor" id="harmonogram" />
        <Col xs={12} sm={9} md={6}>
          <Card className={"shadow"}>
            <Card.Body>
              <Card.Title>Harmonogram</Card.Title>
              <Card.Text>Přesný harmonogram je zatím neznámý.</Card.Text>
              <Card.Text>
                Svatba ale bude v neformálním stylu. Nečekejte dlouhé děkovačky,
                dlouhé proslovy, společnou hostinu, rozbíjení talířů, házení
                rýže.
              </Card.Text>
              <Card.Text>
                Určitě bude obřad ve 12:00. Poté nějaké focení a volná zábava a
                tanec.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Harmonogram;
