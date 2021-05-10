import Row from "react-bootstrap/Row";
import "./home.scss";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <Row className={"home-row mb-5"}>
      <span className="anchor" id="home" />
      <Col
        xs={{ span: 12 }}
        sm={{ span: 6, offset: 6 }}
        md={{ span: 5, offset: 7 }}
        lg={{ span: 4, offset: 7 }}
        xl={{ span: 4, offset: 7 }}
        className={"home-wrapper"}
      >
        <div className={"p-4 home-text text-white rounded-lg"}>
          <h1>HONZA A ROMČA</h1>
          <h2>galaktická svatba</h2>
          <h3>statek Stodola, Lázně Libverda</h3>
          <h3>17.07.2021 ve 10:00</h3>
        </div>
      </Col>
    </Row>
  );
}

export default Home;
