import Row from "react-bootstrap/Row";
import "./home.scss";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <Row id={"home"}>
      <Col xs={6} md={7} xl={8} />
      <Col className={"home-wrapper"}>
        <h1>Honza a Romča</h1>
        <h2>galaktická svatba</h2>
        <h3>statek Stodola, Lázně Libverda</h3>
        <h3>05.06.2021, 12:00</h3>
      </Col>
    </Row>
  );
}

export default Home;
