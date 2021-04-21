import Container from "react-bootstrap/Container";
import Home from "./home";
import Harmonogram from "./harmonogram";
import InfoCards from "./info-cards";
import TravelInfo from "./travel-info";

function Body() {
  return (
    <Container className={"app-body"} fluid>
      <Home />
      <Harmonogram />
      <InfoCards />
      <TravelInfo />
    </Container>
  );
}

export default Body;
