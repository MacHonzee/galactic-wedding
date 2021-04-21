import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function InfoCard(props) {
  return (
    <Col className={"mb-4"} xl={4} md={6} xs={12}>
      <Card className={"shadow"}>
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
