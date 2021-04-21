import Row from "react-bootstrap/Row";
import "./home.scss";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <Row id={"home"} className={"home-row mb-5"}>
      <Col xs={6} md={7} xl={8} />
      <Col className={"home-wrapper"}>
        <h1>HONZA A ROMČA</h1>
        <h2>galaktická svatba</h2>
        <h3>statek Stodola, Lázně Libverda</h3>
        <h3>05.06.2021 ve 12:00</h3>
      </Col>
    </Row>
  );
}

export default Home;
