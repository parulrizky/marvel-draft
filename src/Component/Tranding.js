import { Card, Container, Row, Col, Image } from "react-bootstrap"
import momImage from "../assets/image/Trending/mom.jpg"
import nwhImage from "../assets/image/Trending/nwh.jpg"
import latImage from "../assets/image/Trending/lat.jpg"
import etrImage from "../assets/image/Trending/etr.jpg"

const Tranding = () => {
    return  (
        <div>
        <Container>
            <h1 className="text-white text-center p-4" id="trending">TRANDING MOVIE</h1>
            <Row>
                <Col md={3} className="movieWrapper">
                <Card className=" movieImage">
                    <Image src={momImage} alt="Multiverse of Madness" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Docter Strange in the Multiverse of Madness</Card.Title>
                        <Card.Text className="text-left">
                        This is a wider card.
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
                </Col>
                <Col md={3} className="movieWrapper">
                <Card className=" movieImage">
                    <Image src={nwhImage} alt="No Way Home" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Spiderman No Way Home</Card.Title>
                        <Card.Text className="text-left">
                        This is a wider card.
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
                </Col>
                <Col md={3} className="movieWrapper">
                <Card className=" movieImage">
                    <Image src={etrImage} alt="Eternals" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">The Eternals</Card.Title>
                        <Card.Text className="text-left">
                        This is a wider card.
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
                </Col>
                <Col md={3} className="movieWrapper">
                <Card className=" movieImage">
                    <Image src={latImage} alt="Love and Thunder" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Thor Love and Thunder</Card.Title>
                        <Card.Text className="text-left">
                        This is a wider card.
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
                </Col>
            </Row>
        </Container>

        
        </div>
    )
}


export default Tranding