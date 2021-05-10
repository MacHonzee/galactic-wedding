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
              <Card.Text>Přesný harmonogram je zatím neznámý.</Card.Text>
              <Card.Text>
                Svatba ale bude v neformálním stylu. Nečekejte žádné dlouhé
                děkovačky, dlouhé proslovy, společnou hostinu, rozbíjení talířů,
                házení rýže.
              </Card.Text>
              <Card.Text>
                Určitě bude obřad ve 10:00. Poté nějaké focení a volná zábava a
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
