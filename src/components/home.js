import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <Row id={"home"}>
      <Image src={"./assets/home_photo.jpg"} fluid />
    </Row>
  );
}

export default Home;
