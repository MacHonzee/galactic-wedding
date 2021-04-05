import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup'

function Body() {
    return (
        <Container fluid>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <Image src={"./assets/home_photo.jpg"} fluid />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nějaká úvodní fotku, datum, čas a místo?</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>

            <Row>
                <ListGroup>
                    <ListGroup.Item>Covid-19 upozornění na termín</ListGroup.Item>
                    <ListGroup.Item>Ubytování</ListGroup.Item>
                    <ListGroup.Item>Cesta a parkování</ListGroup.Item>
                    <ListGroup.Item>Občerstvení</ListGroup.Item>
                    <ListGroup.Item>Téma galaxie</ListGroup.Item>
                    <ListGroup.Item>Svatební dar</ListGroup.Item>
                </ListGroup>
            </Row>

        </Container>
    )
}

export default Body;
