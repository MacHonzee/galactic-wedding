import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function InfoCard(props) {
  return (
    <Col className={"mb-5"} xl={3} md={4} sm={6} xs={12}>
      <Card>
        <Card.Header as={"h4"}>{props.header}</Card.Header>
        {props.img && (
          <Card.Img variant={"top"} src={props.img} className={"mt-3"} />
        )}
        <Card.Body>{props.children}</Card.Body>
      </Card>
    </Col>
  );
}

export default InfoCard;
