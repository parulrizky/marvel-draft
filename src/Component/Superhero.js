import { Card, Container, Row, Col, Image } from "react-bootstrap"
import captImage from "../assets/image/Superhero/capt.jfif"
import ironImage from "../assets/image/Superhero/iron.jfif"
import thorImage from "../assets/image/Superhero/thor.jfif"
import wandImage from "../assets/image/Superhero/wand.jfif"

const SuperHero = () => {
    return  (
        <div>
        <Container>
            <h1 className="text-white text-center p-4" id="superhero">SUPERHERO</h1>
            <Row>
                <Col md={3} className="movieWrapper">
                <Card className=" movieImage">
                    <Image src={captImage} alt="Multiverse of Madness" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Captain America</Card.Title>
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
                    <Image src={ironImage} alt="No Way Home" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Iron Man</Card.Title>
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
                    <Image src={thorImage} alt="Eternals" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Thor</Card.Title>
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
                    <Image src={wandImage} alt="Love and Thunder" className="images"/>
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Scarlet Wich</Card.Title>
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


export default SuperHero